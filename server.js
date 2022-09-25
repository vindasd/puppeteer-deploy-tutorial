const express = require('express');
const bot = require('./bot');

const app = express();

app.get('/', async(req, res) => {
	const response = await bot();
	// response.write("<img src = "+response+">");
	// response.send();
	// res.sendFile(__dirname + response);
	res.send(response);
	// res.send('Done');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
	if(err) throw err;
	console.log('listening on port ${PORT} ...');
});