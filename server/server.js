require('dotenv/config');
const express = require('express');
const { check, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const db = require('./models');
const { Op } = require('sequelize');
const cors = require('cors');
const moment = require('moment');
const EmailService = require('./email-service');
const { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } = require('./utils/tokens');
const { isAuth } = require('./utils/isAuth');

const port = process.env.PORT;
const corsOptions = {
	origin: process.env === 'production' ? 'https://keithbkelly.com' : `http://localhost:8000`,
	credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/admin/register', async (req, res) => {
	const email = 'keithbkelly@gmail.com';
	const password = 'maulofamerica';

	try {
		const user = await db.user.findOne({
			where: {
				email: { [Op.eq]: email },
			},
		});

		if (user) throw new Error('User already exists');
		const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({ email: email, password: hashedPassword });
		res.status(201).send({ user: newUser });
	} catch (err) {
		res.status(409).send({ error: err.message });
	}
});

app.post('/admin/login', async (req, res) => {
	console.log(req.body);
	const { email, password } = req.body;

	try {
		const user = await db.user.findOne({
			where: {
				email: { [Op.eq]: email },
			},
		});

		if (!user) throw new Error('User does not exist');
		const valid = await compare(password, user.password);

		if (!valid) throw new Error('Password is not correct');

		const accessToken = createAccessToken(user.id);
		const refreshToken = createRefreshToken(user.id);

		user.refreshToken = refreshToken;
		user.save();

		sendRefreshToken(res, refreshToken);
		sendAccessToken(req, res, accessToken);
	} catch (err) {
		res.status(501).send({ error: err.message });
	}
});

app.post('/admin/logout', (_req, res) => {
	res.clearCookie('refreshToken', { path: '/admin/refresh_token' });
	res.send({ message: 'Logged out' });
});

app.post('/admin/protected', async (req, res) => {
	try {
		const userId = isAuth(req);
		if (userId !== null) {
			res.send({
				data: 'this is protected data',
			});
		}
	} catch (err) {
		res.status(501).send({ error: err.message });
	}
});

app.post('/admin/refresh_token', async (req, res) => {
	const token = req.cookies.refreshToken;

	if (!token) return res.send({ accessToken: '' });

	let payload = null;

	try {
		payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
	} catch (err) {
		res.status(501).send({ accessToken: '' });
	}

	const user = await db.user.findOne({
		where: {
			id: { [Op.eq]: payload.userId },
		},
	});

	if (!user) return res.send({ accessToken: '' });
	if (user.refreshToken !== token) {
		return res.send({ accessToken: '' });
	}

	const accessToken = createAccessToken(user.id);
	const refreshToken = createRefreshToken(user.id);

	user.refreshToken = refreshToken;
	user.save();

	sendRefreshToken(res, refreshToken);
	sendAccessToken(req, res, accessToken);
});

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
