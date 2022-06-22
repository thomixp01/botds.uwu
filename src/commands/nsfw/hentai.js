const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const db = require("quick.db");
const fetch = require ('cross-fetch');
const akaneko = require('akaneko');

color = config.EMBED_COLORS
module.exports = {
    name: "hentai",
    alias: ["hentai"],
    category: "nsfw",
    run: async (bot, message, args) => {
        let author = message.author.username.toString();
        if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
        hentai();
        async function hentai() {
          embed.setImage(await akaneko.nsfw.hentai());
          return message.channel.send(embed);
        }
        console.log(author + "a usado el comando de hentai");
    }
}