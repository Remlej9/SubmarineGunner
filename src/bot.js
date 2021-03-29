require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Hello World");
	client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.login(process.env.BOT_TOKEN);
