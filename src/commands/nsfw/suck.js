const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");
color = config.EMBED_COLORS
module.exports = {
    name: "suck",
    alias: ["suck"],
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
       suck();
        async function suck() {
          let suckr = await HMfull.HMtai.nsfw.blowjob();

          message.channel.send({
            embed: {
              color: color.BOT_EMBED,
              title: author + ' le ha chupado el pene a ' + member.displayName.toString(),
              image: { url: suckr.url},
            }
          });

        }
        console.log(author + ' le ha chupado el pene a ' + member.displayName.toString());
    }
}