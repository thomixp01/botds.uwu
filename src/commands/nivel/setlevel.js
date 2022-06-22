const config = require("../../../config.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const color = config.EMBED_COLORS
module.exports = {
    name: "setlevel",
    alias: ["setlevel"],
    category: "Levels",
    run: async (bot, message, args) => {
        const mentionuser = message.mentions.users.first();
        let avatarauthor = message.author.avatarURL({ size: 4096 , dynamic: true });

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: '❌ Ingrese un numero.',
                      thumbnail: {
                        url: avatarauthor,
                      },
                    }
                  });
                  return;
            }
            setlevelauthor();
        }else{
            if(isNaN(args[1])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: '❌ Ingrese un numero.',
                      thumbnail: {
                        url: mentionuser.avatarURL({ size: 4096 , dynamic: true }),
                      },
                    }
                  });
                  return;
            }
            setlevelmention();
        }

        async function setlevelauthor(){

            let authorusername = message.author.username.toString();
            let authorid = message.author.id.toString();
            let avatar = message.author.avatarURL({ size: 4096 , dynamic: true });

            await db.set("userInfo.leveling.level." + authorid, args[0]);
            let level = await db.get("userInfo.leveling.level." + authorid,);
            console.log("el nivel de " + authorusername + " a sido actualizado a " + level);
            message.channel.send({
              embed: {
                color: color.BOT_EMBED,
                title: '⭐ el nivel de ' + authorusername + ' a sido actualizado a ' + level,
                thumbnail: {
                  url: avatar,
                },
              }
            });
        }

        async function setlevelmention(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();


            await db.set("userInfo.leveling.level." + memberid, args[1]);
            let level = await db.get("userInfo.leveling.level." + memberid,);
            console.log("el nivel de " + member.username.toString() + " a sido actualizado a " + level);
            message.channel.send({
              embed: {
                color: color.BOT_EMBED,
                title: '⭐ el nivel de ' + member.username.toString() + ' a sido actualizado a ' + level,
                thumbnail: {
                  url: member.avatarURL({ size: 4096 , dynamic: true }),
                },
              }
            });
        }
    },
}