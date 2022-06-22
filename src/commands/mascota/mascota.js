const config = require("../../../config");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS

module.exports = {
    name: "mascota",
    alias: ["mascot", "pet"],
    category: "Mascota",
    run: async (bot, message, args) => {

        if (!args[0]){
            let avatarauthor = message.author.avatarURL({ size: 4096 , dynamic: true });
            message.channel.send({
                embed: {
                    color: color.MASCOT,
                    title: config.MASCOTA.Name,
                    author: {
                        name: 'Mascota de ' + message.author.tag,
                        icon_url: avatarauthor,
                    },
                    description: "patata",
                    thumbnail: {
                        url: "https://i.imgur.com/eDiCWDW.gif",
                    },
                    timestamp: new Date(),
                    footer: {
                        text: config.MASCOTA.Name,
                        icon_url: 'https://i.imgur.com/FIKmlS4m.png',
                    },
                }
            });
            return;
        }

        if (args[0] === "nya"){
            let author = message.author;
            await message.author.send({
                embed: {
                    color: color.BOT_EMBED,
                    title: 'patata',
                    thumbnail: { url: "https://i.imgur.com/EVr2Zlo.gif"},
                    timestamp: new Date(),
                    footer: {
                        text: config.MASCOTA.Name,
                        icon_url: 'https://i.imgur.com/FIKmlS4m.png',
                    },
                }
            });
            return;
        }

    }
}