
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require('cross-fetch');
const { TENORKEY } = require('../../../config');
module.exports = {
	nivelesTh: async (message) => {
		if (message.author.bot) return;
		const authorid = message.author.id.toString();

		if (!await db.get("userInfo.leveling.level." + authorid)) {
			var nivelsumar = await db.get("userInfo.leveling.level." + authorid);
			let ressumarx = parseInt(nivelsumar) + 1;
			await db.set("userInfo.leveling.level." + authorid, ressumarx);
			await db.set("userInfo.leveling.xp." + authorid, 0);
		}

		let xp = await db.get("userInfo.leveling.xp." + authorid);
		let level = await db.get("userInfo.leveling.level." + authorid);
		let randomxp = Math.floor(Math.random() * 10) + 1;
		let levelup = 5 * (level ** 2) + 50 * level + 100;

		if ((xp + randomxp) >= levelup) {
			let nivelsumar = await db.get("userInfo.leveling.level." + authorid);
			let ressumar = parseInt(nivelsumar)+parseInt(1);
			await db.set("userInfo.leveling.level." + authorid, ressumar);
			await db.set("userInfo.leveling.xp." + authorid, 0);
			const res = await db.get("userInfo.leveling.level." + authorid)

			const keywords = "happyanime";
			const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${TENORKEY}&contentfilter=high`;
			const response = await fetch(url);
			const json = await response.json();
			const gif = Math.floor(Math.random() * json.results.length);
			const authoruser = message.author.username.toString();
			message.reply({
				embed: {
					color: 'RANDOM',
					image: { url: json.results[gif].media[0].gif.url },
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