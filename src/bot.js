require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Hello World");
	client.user.setActivity('submarineguns', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

var interval = setInterval (function (){
	    client.channels.cache.get('826133568148602931').send({
		files: ['https://i.imgur.com/Tivrl2P.jpg']
	}
	.then(message => console.log(`Sent submarinegun`))
  .catch(console.error));
}, 5000);

client.login(process.env.BOT_TOKEN);
