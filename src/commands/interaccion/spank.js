const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");

color = config.EMBED_COLORS
module.exports = {
    name: "spank",
    alias: ["spank"],
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
      spank();
      async function spank() {
        let spankr = await HMfull.HMtai.sfw.slap();

        message.channel.send({
          embed: {
            color: color.BOT_EMBED,
            title: author + ' nalgueo a ' + member.displayName.toString(),
            image: { url: spankr.url},
          }
        });

      }
      console.log(author + ' nalgueo a ' + member.displayName.toString());
    }
}