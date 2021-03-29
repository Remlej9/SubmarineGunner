require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Hello World");
	client.user.setActivity('submarineguns', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
    client.channels.cache.get('826133568148602931').send('Hello here!')
	.then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error);
});

client.login(process.env.BOT_TOKEN);
