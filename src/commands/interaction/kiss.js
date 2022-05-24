const config = require("../../../config.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const TENORKEY = "QBR3OM5C5UBM"
const fetch = require ('cross-fetch');
const akaneko = require('akaneko');
const HMfull = require("hmfull");
const color = config.EMBED_COLORS

module.exports = {
    name: "kiss",
    description: "besar a alguien",
    Kiss: async (message) =>{
        let member = message.mentions.members.first();
        let author = message.author.username.toString();
        if (!member) return message.channel.send({
          embed: {
            color: color.ERROR,
            title: 'Ingrese un usuario. ',
          }
        })
        let authorid = message.author.id.toString();
        let memberid = member.id.toString();  
        kiss();
        async function kiss() {
          await db.add("userInfo.besos." + authorid + "." + memberid, 1);
          
          besos = await db.get("userInfo.besos." + authorid + "." + memberid);
          let keywords = "animekissing";
          let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${TENORKEY}&contentfilter=high`;
          let response = await fetch(url);
          let json = await response.json();
          const gif = Math.floor(Math.random() * json.results.length);
          message.channel.send({
            embed: {
              color: color.BOT_EMBED,
              title: author + ' a besado a ' + member.user.username.toString(),
              description: 'un total de ' + besos + ' besos',
              image: { url: json.results[gif].media[0].gif.url },
            }
          });
        }
        console.log(author + ' a besado a ' + member.user.username.toString());
    }
}