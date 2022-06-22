

const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "true",
    alias: ["true"],
    category: "test",
    run: async (bot, message, args) => {
        config.FUNCIONES.LOG = true;
        db.set("botinfo.log", true);
    }
}