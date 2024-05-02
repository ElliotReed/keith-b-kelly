'use strict';
const nodemailer = require('nodemailer');
const config = require('../config/config.json');
const TemplateEngine = require('../templates');

class EmailService {
	constructor() {
		this.from = `${config.website} <${config.serverEmail.email}>`;
		this.to = process.env !== 'production' ? 'elliot_dev@elliotreed.net' : config.serverEmail.destination;
	}

	sendContactMessage(name, email, message) {
		this.from = `${name} <${email}>`;
		let templateEngine = new TemplateEngine();

		const content = `
    <tr>
		<td bgcolor="${templateEngine.bgcolor}"
		style="padding: 32px 32px 32px; font-family: sans-serif; font-size: 16px; line-height: 24px; color: ${templateEngine.textColor}; text-align: left;">
		<p>You have a new message from ${name}.</p>
		<p style="height: 300px;">${message}</p>
		</td>
    </tr>
		`;

		templateEngine.setContent(content);

		const messageToSend = {
			to: this.to,
			from: this.from,
			subject: 'New Contact Message',
			text: message,
			html: templateEngine.defaultTemplate(),
		};

		this.send(messageToSend).catch((err) => {
			console.error(err);
		});
		templateEngine = null;
	}

	verifyRegistration(email, confirmationURL) {
		let templateEngine = new TemplateEngine();

		const content = `
			<tr>
			<td bgcolor="#fdfdfd"
				style="padding: 10px 40px 0px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #777777; text-align: center;">
				<p>
					Click here to complete your registration.
				</p>
				<p style="margin: 50px;">
					<a style="
									border-radius: 3px;
									padding: 15px 30px;
									background-color:#dfdfdf;
									color: #fdfdfd;
									text-decoration: none;
								" href="${confirmationURL}">Complete Registration</a>
				</p>
			</td>
			</tr>
		`;

		templateEngine.setContent(content);

		const messageToSend = {
			to: this.to,
			from: this.from,
			subject: 'Verify registration',
			text: `Go to this address in your browser to verify your account.
			${confirmationURL}`,
			html: templateEngine.defaultTemplate(),
		};

		this.send(messageToSend).catch((err) => {
			console.error(err);
		});
		templateEngine = null;
		return true;
	}
	async send(messageToEmail) {
		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: config.serverEmail.host,
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: config.serverEmail.user,
				pass: config.serverEmail.password,
			},
		});
		// send mail with defined transport object
		const info = await transporter.sendMail(messageToEmail).catch((err) => {
			console.error(err);
		});
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		// console.log('Message sent: %s', info.messageId);
	}
}

module.exports = EmailService;
