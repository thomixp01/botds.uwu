const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const color = config.EMBED_COLORS
module.exports = {
    name: "ecoadd",
    alias: ["baladd", "moneyadd"],
    category: "Economia",
    run: async (bot, message, args) =>{
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
            authoraddmoney();
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
            mentionaddmoney();
        }


        async function authoraddmoney(){
            let authorid = message.author.id.toString();
            let dinero = parseInt(args[0]);
            let dineroactual = await db.get("userinfo.economia.dinero." + authorid);
            var res = parseInt(dinero)+parseInt(dineroactual);
            await db.set("userinfo.economia.dinero." + authorid, res);
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se agrego ' + dinero + '$ a ' + message.author.username.toString(),
                thumbnail: {
                    url: message.author.avatarURL({ size: 4096 , dynamic: true }),
                },
                }
            });
            return;
        }


        async function mentionaddmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();
            let dinero = parseInt(args[1]);
            let dineroactual = await db.get("userinfo.economia.dinero." + memberid);
            var res = parseInt(dinero)+parseInt(dineroactual);
            await db.set("userinfo.economia.dinero." + memberid, res);
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se agrego ' + dinero + '$ a ' + member.username.toString(),
                thumbnail: {
                    url: member.avatarURL({ size: 4096 , dynamic: true }),
                },
                }
            });
            return;
        }



        return;
    },
}