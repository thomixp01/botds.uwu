const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");

color = config.EMBED_COLORS
module.exports = {
    name: "hug",
    alias: ["hug"],
    category: "Interact",
    run: async (bot, message, args) => {
        let member = message.mentions.members.first();
        let author = message.author.username.toString();
      if (!member) return message.channel.send({
        embed: {
          color: color.ERROR,
          title: '❌ Ingrese un usuario. ',
          }
       });
      let memberid = member.id.toString();

      hug();
      async function hug() {
      await db.add("userInfo.abrazos." + memberid, 1);
      abrazos = await db.get("userInfo.abrazos." + memberid);
        let hugr = await HMfull.Nekos.sfw.hug();

        message.channel.send({
          embed: {
            color: color.BOT_EMBED,
            title: author + ' abrazo a ' + member.user.username.toString(),
            description: 'ha recibido un total de ' + abrazos + ' abrazos',
            image: { url: hugr.url},
          }
        });

      }
      console.log(author + ' abrazo a ' + member.user.username.toString());
    }
}