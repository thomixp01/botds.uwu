const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "mascota nya",
    alias: ["mascot nya", "pet nya"],
    category: "categoria",
    run: async (bot, message, args) => {
        let author = message.author;
        await message.author.send('👋')

    }
}