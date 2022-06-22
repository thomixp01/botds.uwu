const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const db = require("quick.db");
const fetch = require ('cross-fetch');
const akaneko = require('akaneko');

color = config.EMBED_COLORS
module.exports = {
    name: "bdsm",
    alias: ["bdsm"],
    category: "nsfw",
    run: async (bot, message, args) => {
        let author = message.author.username.toString();
        if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
        bdsm();
        async function bdsm() {
          embed.setImage(await akaneko.nsfw.bdsm());
          return message.channel.send(embed);
        }
        console.log(author + "a usado el comando de bdsm");
    }
}