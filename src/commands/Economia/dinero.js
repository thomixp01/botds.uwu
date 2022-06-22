const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "bal",
    alias: ["eco", "dinero", "money","balance"],
    category: "Economia",
    run: async (bot, message, args) => {
        const mentionuser = message.mentions.users.first();

        if(!mentionuser){
            authorgetmoney();
        }else {
            mentiongetmoney();
        }


        async function mentiongetmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();
            let avatar = member.avatarURL({ size: 4096 , dynamic: true });
            if(!await db.get("userinfo.economia.dinero." + memberid)){await db.set("userinfo.economia.dinero." + memberid, 0);}
            message.channel.send({
                embed: {
                title: '💸 Dinero: ' + await db.get("userinfo.economia.dinero." + memberid) + '$',
                color: color.MONEY,
                thumbnail: {
                    url: avatar,
                },
                }
            })
        }

        async function authorgetmoney(){
            let authorid = message.author.id.toString();
            let avatar = message.author.avatarURL({ size: 4096 , dynamic: true });
            if(!await db.get("userinfo.economia.dinero." + authorid)){await db.set("userinfo.economia.dinero." + authorid, 0);}

            message.channel.send({
                embed: {
                title: '💸 Dinero: ' + await db.get("userinfo.economia.dinero." + authorid) + '$',
                color: color.MONEY,
                thumbnail: {
                    url: avatar,
                },
                }
            })
        }

          return;
    }
}