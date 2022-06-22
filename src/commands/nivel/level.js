const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "level",
    alias: ["xp", "nivel"],
    category: "Levels",
    run: async (bot, message, args) => {
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();
        if (!mentionuser){
          leveluser();
        }else{
          levelmention();
        }


        async function leveluser(){
          let avatar = message.author.avatarURL({ size: 4096 , dynamic: true });
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
                icon_url: member.avatarURL({ size: 4096 , dynamic: true }),
              },
              thumbnail: {
                url: member.avatarURL({ size: 4096 , dynamic: true }),
              },
            }
          })
        }
    }
}