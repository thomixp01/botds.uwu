const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "setmoney",
    alias: ["ecoset", "seteco", "balset", "setbal"],
    category: "Economia",
    run: async (bot, message, args) => {
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: message.author.avatarURL({ size: 4096 , dynamic: true }),
                      },
                    }
                  });
                  return;
            }
            authorsetmoney();
        }else{
            if(isNaN(args[1])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: mentionuser.avatarURL({ size: 4096 , dynamic: true }),
                      },
                    }
                  });
                  return;
            }
            mentionsetmoney();
        }

        async function authorsetmoney(){
            let authorid = message.author.id.toString();
            await db.set("userinfo.economia.dinero." + authorid, args[0]);
            let dinero = args[0];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se establecio ' + dinero + '$ a ' + message.author.username.toString(),
                thumbnail: {
                    url: message.author.avatarURL({ size: 4096 , dynamic: true }),
                },
                }
            });
            return;
        }


        async function mentionsetmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();

            await db.set("userinfo.economia.dinero." + memberid, args[1]);
            let dinero = args[1];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se establecio ' + dinero + '$ a ' + member.username.toString(),
                thumbnail: {
                    url: member.avatarURL(),
                },
                }
            });
            return;
        }


        return;
    },
}