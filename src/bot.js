require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

var images = [
	'https://imgur.com/E9I7vt0.jpg',
	'https://imgur.com/piYVrpR.jpg',
	'https://imgur.com/0pVaIp9.jpg',
	'https://imgur.com/tZX8sar.jpg',
	'https://imgur.com/O8tHGFG.jpg',
	'https://imgur.com/SBP40yW.jpg',
	'https://imgur.com/rH5jbGN.jpg',
	'https://imgur.com/IC50Emf.jpg',
	'https://imgur.com/z7MDAwk.jpg',
	'https://imgur.com/UcF1CSC.jpg',
	'https://imgur.com/kw8cLws.jpg',
	'https://imgur.com/VXf2QBg.jpg'
];

var count = 0;

client.on("ready", () => {
	console.log("Hello World");
	client.user.setActivity('submarineguns', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

var interval = setInterval (function (){
	    client.channels.cache.get('826133568148602931').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
  .catch(console.error);
  count = count + 1;
}, 86400000);

client.login(process.env.BOT_TOKEN);
