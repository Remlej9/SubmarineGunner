require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const schedule = require('node-schedule');

var images = [
	'https://imgur.com/VXf2QBg.jpg',
	'https://imgur.com/gGMYiDh.jpg',
	'https://imgur.com/SlQVejJ.jpg',
	'https://imgur.com/tbi12uB.jpg',
	'https://imgur.com/bAXKRHy.jpg',
	'https://imgur.com/UNAnKyc.jpg',
	'https://imgur.com/c0EpfWb.jpg',
	'https://imgur.com/CQRlK4j.jpg',
	'https://imgur.com/yaNJSqa.jpg',
	'https://imgur.com/UpgOG5j.jpg',
	'https://imgur.com/wtuRh9m.jpg'
	
];

var count = 0;

const job1 = schedule.scheduleJob('* * * 12 * *', function(){
  count = 1;
  //console.log("12");
});
const job2 = schedule.scheduleJob('* * * 13 * *', function(){
  count = 2;
  //console.log("13");
});
const job3 = schedule.scheduleJob('* * * 14 * *', function(){
  count = 3;
  //console.log("14");
});
const job4 = schedule.scheduleJob('* * * 15 * *', function(){
  count = 4;
  //console.log("15");
});
const job5 = schedule.scheduleJob('* * * 16 * *', function(){
  count = 5;
  //console.log("16");
});
const job6 = schedule.scheduleJob('* * * 17 * *', function(){
  count = 6;
  //console.log("17");
});
const job7 = schedule.scheduleJob('* * * 18 * *', function(){
  count = 7;
  //console.log("18");
});
const job8 = schedule.scheduleJob('* * * 19 * *', function(){
  count = 8;
  //console.log("19");
});
const job9 = schedule.scheduleJob('* * * 20 * *', function(){
  count = 9;
  //console.log("20");
});
const job10 = schedule.scheduleJob('* * * 21 * *', function(){
  count = 10;
  //console.log("21");
});
const job11 = schedule.scheduleJob('* * * 11 * *', function(){
  count = 0;
  //console.log("11");
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

const job = schedule.scheduleJob('45 45 17 * * *', function(){
	client.channels.cache.get('797442340884185118').send({files: [images[count]]})
	.then(message => console.log(`Sent submarinegun`))
	.catch(console.error);
});

client.login(process.env.BOT_TOKEN);
