const config = require("../../../config.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
var prefix = config.PREFIX;
const pagination = require('discord.js-pagination');
const { nsfw } = require("akaneko");
const color = config.EMBED_COLORS;
module.exports = {
    name: "help",
    alias: ["ayuda"],
    category: "Utilidades",
    run: async (bot, message, args) => {

        let UtilsCommands = bot.commands.filter((cmd) => cmd.category === 'Utilidades');
        let Ecocommands = bot.commands.filter((cmd) => cmd.category === 'Economia');
        let Levelscommands = bot.commands.filter((cmd) => cmd.category === 'Levels');
        let Interactcommands = bot.commands.filter((cmd) => cmd.category === 'Interact');
        let nsfwcommands = bot.commands.filter((cmd) => cmd.category === 'nsfw');
        let mascotcommands = bot.commands.filter((cmd) => cmd.category === 'Mascota');

        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username.toString(), message.author.displayAvatarURL({dynamic: true}))
		.setTitle("📂 Comandos")
        .setDescription('Los comandos estarán divididos por categoría:')
        .addField(`🔹 Utilidades [${UtilsCommands.size}]:`, '**`'+UtilsCommands.map(cmd => cmd.name).join(' | ')+'`**')
        .addField(`🔹 Economia [${Ecocommands.size}]:`, '**`'+Ecocommands.map(cmd => cmd.name).join(' | ')+'`**')
		.addField(`🔹 Niveles [${Levelscommands.size}]:`, '**`'+Levelscommands.map(cmd => cmd.name).join(' | ')+'`**')
        .addField(`🔹 Interaccion [${Interactcommands.size}]:`, '**`'+Interactcommands.map(cmd => cmd.name).join(' | ')+'`**')
        .addField(`🔹 Mascota [${mascotcommands.size}]:`, '**`'+mascotcommands.map(cmd => cmd.name).join(' | ')+'`**')
        .addField(`🔹🔞 NSFW [${nsfwcommands.size}]:`, '**`'+nsfwcommands.map(cmd => cmd.name).join(' | ')+'`**')
        .setColor(bot.config.color)
        .setTimestamp()

        message.channel.send(helpEmbed);
		/*
		const pages = [
            page1,
            page2,
            page3,
			page4
        ]

		const emoji = ["⏮️", "⏩"]

        const timemout = '100000'

        pagination(message, pages, emoji, timemout)
		*/
    }

}