const config = require("../../../config.js");


const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const cooldown = require("command-cooldown");

color = config.EMBED_COLORS
module.exports = {
    name: "daily",
    alias: ['dk'],
    category: "Economia",
    run: async (bot, message, args) =>{
        let cd = await cooldown.checkCoolDown(message.author.id, "cmd-economia-daily");
        if (!cd.res.ready) return message.reply(`Faltan ${(cd.res.rem / config.TIEMPOS_MS.Horas).toFixed(1)}h para poder ejecutar este comando`);
        let authorid = message.author.id.toString();
        let dailymoney = Math.floor(Math.random() * 5000) + 1;
        await db.add("userinfo.economia.dinero." + authorid, dailymoney);
        message.channel.send({
            embed: {
            color: color.MONEY,
            title: '💸 Se agrego ' + dailymoney + '$ a ' + message.author.username.toString(),
            thumbnail: {
                url: message.author.avatarURL({ size: 4096 , dynamic: true }),
            },
            }
        });
        cooldown.addCoolDown(message.author.id, config.TIEMPOS_MS.Dias, "cmd-economia-daily");
    }
}