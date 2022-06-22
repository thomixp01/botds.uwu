const config = require("../../../config.js");
const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

const embed = new Discord.MessageEmbed().setColor("#E96A00");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
const coin = config.EMOJIS.coin;
const egg = config.EMOJIS.egg;
const abejita = config.EMOJIS.abejita;

module.exports = {
    name: "tienda",
    alias: ["shop"],
    category: "Economia",
    run: async (bot, message, args) => {


        const page1 = new Discord.MessageEmbed()
        .setTitle('Tienda')
		.setThumbnail('https://i.imgur.com/gDuPKfR.png')
        .setColor(color.TIENDA)
		.addFields(
			{ name: egg + '** Huevo de mascota — 5.000** ' + coin + ' `[ID: 951]`', value: 'Mascota personal para cuidar y querer uwu ' },
		)



        const pages = [
            page1,
        ]

        const emoji = ["⏮️", "⏩"]

        const timemout = '100000'

        pagination(message, pages, emoji, timemout)
    }
}
