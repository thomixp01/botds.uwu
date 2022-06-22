const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const akaneko = require('akaneko');
const HMfull = require("hmfull");

color = config.EMBED_COLORS
module.exports = {
    name: "fuck",
    alias: ["fuck"],
    category: "nsfw",
    run: async (bot, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
        let member = message.mentions.members.first();
        let author = message.author.username.toString();
        if (!member) return message.channel.send({
          embed: {
            color: color.BOT_EMBED,
            title: 'Ingrese un usuario. ',
            }
         });
        fuck();
        async function fuck() {
          let fuckr = await HMfull.HMtai.nsfw.gif();

          message.channel.send({
            embed: {
              color: color.BOT_EMBED,
              title: author + ' se ha follado a ' + member.displayName.toString(),
              image: { url: fuckr.url},
            }
          });

        }
        console.log(author + ' se ha follado a ' + member.displayName.toString());
    }
}