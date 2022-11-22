const express = require('express');
const cors = require('cors');
const db = require('./db');
const router = require('./routes/appRouter');

const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(express.static('./client/build'));
// console.log(__dirname);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}

app.post("/login", function (req, res) {
	console.log(req.body);
	// let valid = req.body.password === 'passwordsecret' && req.body.email === 'admin@example.com';
	let valid = req.body.password === '1' && req.body.email === '1';
	console.log(valid);
	if (!req.body) return res.sendStatus(400);
	res.json(valid);
});

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server OK, port ${PORT}`);
});