require('dotenv').config();
const discord = require('discord.js');
const client = new Discord.client();

client.on("ready", () => {
	console.log("Hello World");
	client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});