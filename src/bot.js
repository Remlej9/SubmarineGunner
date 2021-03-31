require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const schedule = require('node-schedule');

var images = [
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
	'https://imgur.com/VXf2QBg.jpg',
	'https://imgur.com/uTQgEGf.jpg'
];

var count = 0;

const job1 = schedule.scheduleJob('* * * 1 * *', function(){
  count = 0;
  //console.log("1");
});
const job2 = schedule.scheduleJob('* * * 2 * *', function(){
  count = 1;
  //console.log("2");
});
const job3 = schedule.scheduleJob('* * * 3 * *', function(){
  count = 2;
  //console.log("3");
});
const job4 = schedule.scheduleJob('* * * 4 * *', function(){
  count = 3;
  //console.log("4");
});
const job5 = schedule.scheduleJob('* * * 5 * *', function(){
  count = 4;
  //console.log("5");
});
const job6 = schedule.scheduleJob('* * * 6 * *', function(){
  count = 5;
  //console.log("6");
});
const job7 = schedule.scheduleJob('* * * 7 * *', function(){
  count = 6;
  //console.log("7");
});
const job8 = schedule.scheduleJob('* * * 8 * *', function(){
  count = 7;
  //console.log("8");
});
const job9 = schedule.scheduleJob('* * * 9 * *', function(){
  count = 8;
  //console.log("9");
});
const job10 = schedule.scheduleJob('* * * 10 * *', function(){
  count = 9;
  //console.log("10");
});
const job11 = schedule.scheduleJob('* * * 11 * *', function(){
  count = 10;
  //console.log("11");
});
const job12 = schedule.scheduleJob('* * * 31 * *', function(){
  count = 11;
  //console.log("31");
});

client.on("ready", () => {
	console.log("Ready for some sexy guns?");
	console.log("19:45:45 Every day!");
	console.log("Be there!");
	client.user.setActivity('submarineguns', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

// OLD SCRIPT
/*
var interval = setInterval (function (){
	    client.channels.cache.get('797442340884185118').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
  .catch(console.error);
  count = count + 1;
}, 86400000);*/

const job = schedule.scheduleJob('45 * * * * *', function(){
	client.channels.cache.get('826133568148602931').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
	.catch(console.error);
});

client.login(process.env.BOT_TOKEN);
