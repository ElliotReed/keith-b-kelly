const nodemailer = require('nodemailer');
const config = require('../config.json');

async function sendEmail(messageToEmail) {
	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: config['server-email'].host,
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: config['server-email'].email,
			pass: config['server-email'].password,
		},
	});

	// send mail with defined transport object
	const info = await transporter.sendMail(messageToEmail);

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = sendEmail;
