// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user_1 = new Discord.Client();

const { id, id_1, error, success } = require('./config.json');

user_1.on('ready', () => {
	console.log(`USER_1 ${user_1.user.tag}!`);
	user_1.user.setPresence({ activity: { name: 'Savage Developers' }, status: 'dnd' });
	const channel = user_1.channels.cache.get(`887982477858181132`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});

user_1.login("Token");
