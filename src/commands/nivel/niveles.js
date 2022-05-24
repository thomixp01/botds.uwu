
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

module.exports = {
	name: "level",
    description: "ver tu nivel actual o el de alguien mas",
	nivelesTh: async (message) =>{
	  if (message.author.bot) return;
      let authorid = message.author.id.toString();

	  if(!await db.get("userInfo.leveling.level." + authorid)) {
	  	await db.set("userInfo.leveling.level." + authorid, 1);
	  	await db.set("userInfo.leveling.xp." + authorid, 0);
	  }

	  let xp = await db.get("userInfo.leveling.xp." + authorid);
	  let level = await db.get("userInfo.leveling.level." + authorid);
	  let randomxp = Math.floor(Math.random() * 30) + 1;
	  let levelup = 5 * (level ** 2) + 50 * level + 100;

	  if((xp + randomxp) >= levelup){
	  	await db.add("userInfo.leveling.level." + authorid, 1);
	  	await db.set("userInfo.leveling.xp." + authorid, 0);
	  	let res = await db.get("userInfo.leveling.level." + authorid)

	  	let keywords = "happyanime";
	  	let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${TENORKEY}&contentfilter=high`;
	  	let response = await fetch(url);
    	let json = await response.json();
        const gif = Math.floor(Math.random() * json.results.length);
        let authoruser = message.author.username.toString();
	  	message.reply({
	  		embed :{
	  			color: 'RANDOM',
	  			image: { url: json.results[gif].media[0].gif.url},
	  			title: '🌟  Felicidades ' + authoruser + ' acabas de subir al nivel: ' + res,
	  		}
	  	});
	  	console.log("🌟  Felicidades " + authoruser + " acabas de subir al nivel: " + res)
	  }
	  else {
	  	await db.add("userInfo.leveling.xp." + authorid, randomxp);
	  }

	}
} 