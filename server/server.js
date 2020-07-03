require('dotenv/config');
const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('./models');
const { Op } = require('sequelize');
const moment = require('moment');
const EmailService = require('./email-service');

const port = process.env.PORT;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
	'/email/contact',
	[check('name').isLength({ min: 1 }), check('email').isEmail(), check('message').isLength({ min: 2 })],
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).send({ errors: errors.array() });
		}

		const { name, email, message } = req.body;
		let emailService = new EmailService();

		emailService.sendContactMessage(name, email, message);
		res.status(200).send({ mail: 'success' });

		emailService = null;
	}
);

app.post('/performances', async (req, res) => {
	console.log(req.body);
	if (!req.body.date) {
		res.send({ message: 'oops' }).status(401);
		return;
	}
	const performance = await db.performances.create(req.body);
	if (!performance) {
		res.send({ message: 'oops' }).status(401);
	}
	res.send({ message: 'success' }).status(200);
});

app.get('/performances', async (req, res) => {
	const yesterdaysDate = moment(Date.now()).subtract(1, 'days');
	console.log(yesterdaysDate);
	const performances = await db.performances.findAll({
		where: { date: { [Op.gt]: yesterdaysDate } },
	});
	res.send(performances).status(201);
});

app.post('/news', async (req, res) => {
	if (!req.body) {
		res.send({ message: 'No imformation has been sent' }).status(401).end();
	}
	const newsItem = await db.news.create(req.body);
	if (!newsItem) {
		res.send({ message: 'oops' }).status(401);
	}
	res.send({ message: 'success' }).status(201);
});

app.get('/news', async (req, res) => {
	const newsItems = await db.news.findAll();
	if (!newsItems) {
		res.send({ message: 'No news is good news' }).status(401);
	}
	res.send(newsItems).status(201);
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(port, () => {
	console.log(`server is listening on port: ${port}`);
});
