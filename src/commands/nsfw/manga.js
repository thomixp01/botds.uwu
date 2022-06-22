const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");

color = config.EMBED_COLORS
module.exports = {
    name: "manga",
    alias: ["panelhentai", "panel"],
    category: "nsfw",
    run: async (bot, message, args) => {
        let author = message.author.username.toString();
        if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
        manga();
        async function manga() {
          let mangar = await HMfull.HMtai.nsfw.manga();

          message.channel.send({
            embed: {
              color: color.BOT_EMBED,
              image: { url: mangar.url},
            }
          });

        }
        console.log(author + "a usado el comando de manga");
    }
}