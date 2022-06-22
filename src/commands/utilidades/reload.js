const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');


color = config.EMBED_COLORS

module.exports = {
    name: "reload",
    alias: ["rl", "refresh"],
    category: "utilidades",
    run: async (bot, message, args) => {
        if(message.author.id !== `465383439831400448`) return message.channel.send('You are not a Dev');
        bot.commands.sweep(() => true)

        message.channel.send(`Reloaded Commands`);

    }

}
