const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "ecodel",
    alias: ["baldel", "moneydel"],
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
            authordelmoney();
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
            mentiondelmoney();
        }


        async function authordelmoney(){
            let authorid = message.author.id.toString();
            let Dinero = await db.get("userinfo.economia.dinero." + authorid);
            let menos = args[0];
            let res = parseInt(Dinero)-parseInt(menos);
            await db.set("userinfo.economia.dinero." + authorid, res);
            let dinero = args[0];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se elimino ' + dinero + '$ a ' + message.author.username.toString() + ' ahora: ' + res + '$',
                thumbnail: {
                    url: message.author.avatarURL({ size: 4096 , dynamic: true }),
                },
                }
            });
            return;
        }


        async function mentiondelmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();

            let Dinero = await db.get("userinfo.economia.dinero." + memberid);
            let menos = args[1];

            let res = parseInt(Dinero)-parseInt(menos);

            await db.set("userinfo.economia.dinero." + memberid, res);
            let dinero = args[1];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se elimino ' + dinero + '$ a ' + member.username.toString() + ' ahora: ' + res + '$',
                thumbnail: {
                    url: member.avatarURL({ size: 4096 , dynamic: true }),
                },
                }
            });
            return;
        }
        return;
    }
}