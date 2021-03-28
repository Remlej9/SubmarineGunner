const Discord = require('discord.js');
const client = new Discord.Client();
const token = proccess.env.token;

client.on('ready', () => {
	console.log("I'm ready!");
});

client.on('message', message => {
	if (message.content === 'hello') message.reply('Hello there');
});

client.login(token).catch( err => console.log(err));