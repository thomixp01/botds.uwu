const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");

color = config.EMBED_COLORS
module.exports = {
    name: "lick",
    alias: ["lamer"],
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
      lick();
      async function lick() {
        let lickr = await HMfull.HMtai.sfw.lick();

        message.channel.send({
          embed: {
            color: color.BOT_EMBED,
            title: author + ' lamio ' + member.displayName.toString(),
            image: { url: lickr.url},
          }
        });

      }
      console.log(author + ' lamio ' + member.displayName.toString());
    }
}