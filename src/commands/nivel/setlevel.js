const config = require("../../../config.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const color = config.EMBED_COLORS
module.exports = {
    name: "setlevel",
    description: "establecer dinero a un usuario",
    SetLevel: async (message, args) =>{
        const mentionuser = message.mentions.users.first();
        let avatarauthor = message.author.avatarURL();

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
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
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: mentionuser.avatarURL(),
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
            let avatar = message.author.avatarURL();

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
                  url: member.avatarURL(),
                },
              }
            });
        }
    },
    Level: async (message) =>{
      const mentionuser = message.mentions.users.first();
      let author = message.author.username.toString();
      if (!mentionuser){
        leveluser();
      }else{
        levelmention();
      } 
  
      
      async function leveluser(){
        let avatar = message.author.avatarURL();
        let authordiscriminator = message.author.discriminator.toString();
        let authorusername = message.author.username.toString();
        let authorid = message.author.id.toString();


        let nivelres = await db.get("userInfo.leveling.level." + authorid)
        message.channel.send({
          embed: {
            title: '⭐ Nivel: ' + nivelres,
            color: color.BOT_EMBED,
            author: {
              name: 'username: ' + authorusername + "#" + authordiscriminator,
              icon_url: avatar,
            },
            thumbnail: {
              url: avatar,
            },
          }
        })
      }
      async function levelmention(){
        let member = message.mentions.users.first();
        let memberid = member.id.toString();
        let nivelres = await db.get("userInfo.leveling.level." + memberid)

        message.channel.send({
          embed: {
            title: '⭐ Nivel: ' + nivelres,
            color: color.BOT_EMBED,
            author: {
              name: 'username: ' + member.tag,
              icon_url: member.avatarURL(),
            },
            thumbnail: {
              url: member.avatarURL(),
            },
          }
        })
      }
  }
}