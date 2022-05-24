const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

const color = config.EMBED_COLORS
module.exports = {
    name: "profile",
    description: "tu perfil y stats",
    Profile: async (message) =>{
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();
        if (!mentionuser){
          profileuser();
        }else{
          profilemention();
        } 
    
        
        async function profileuser(){
          let member = message.member;
          let fechadecreacion = message.author.createdAt.toLocaleDateString();
          let avatar = message.author.avatarURL();
          let authordiscriminator = message.author.discriminator.toString();
          let authorusername = message.author.username.toString();
    
          let authorid = message.author.id.toString();
          abrazos = await db.get("userInfo.abrazos." + authorid);
          if(!abrazos) {
              await db.set("userInfo.abrazos." + authorid, 0);
            }
          let nivelres = await db.get("userInfo.leveling.level." + authorid)
          let moneyres = await db.get("userinfo.economia.dinero." + authorid);
          let xpres = await db.get("userInfo.leveling.xp." + authorid)
          message.channel.send({
            embed: {
              color: color.PROFILE,
              author: {
                name: 'username: ' + authorusername + "#" + authordiscriminator,
                icon_url: avatar,
              },
              fields: [
                {
                  name: '📂 Creación de la cuenta',
                  value: fechadecreacion,
                  inline: true,
                },
                {
                  name: '💫 Apodo',
                  value: member.nickname ? member.nickname : 'No tiene',
                  inline: true,
                },
                {
                  name: '🐼 Hug',
                  value: 'Un total de ' + abrazos + ' abrazos',
                  inline: false,
                },
                {
                  name: '⭐ Nivel: ' + nivelres ,
                  value: ' ( ' + xpres + ' XP )',
                  inline: true,
                },
                {
                  name: '💸 Dinero: ',
                  value: moneyres + '$',
                  inline: true,
                },
                {
                  name: '🛠 Roles',
                  value: message.member.roles.cache.map(rol => '`' + rol.name + '`').join(', '),
                },
              ],
              thumbnail: {
                url: avatar,
              },
              footer: {
                text: "🔎 ID: " + message.author.id,
              },
            }
          })
        }
        async function profilemention(){
          let member = message.mentions.users.first();
          let memberid = member.id.toString();
          abrazos = await db.get("userInfo.abrazos." + memberid);
          if(!abrazos) {
              await db.set("userInfo.abrazos." + memberid, 0);
            }
          let nivelres = await db.get("userInfo.leveling.level." + memberid)
          let moneyres = await db.get("userinfo.economia.dinero." + memberid);
          let xpres = await db.get("userInfo.leveling.xp." + memberid)
          message.channel.send({
            embed: {
              color: color.PROFILE,
              author: {
                name: 'username: ' + member.tag,
                icon_url: member.avatarURL(),
              },
              fields: [
                {
                  name: '📂 Creación de la cuenta',
                  value: member.createdAt.toLocaleDateString(),
                  inline: true,
                },
                {
                  name: '💫 Apodo',
                  value: member.nickname ? member.nickname : 'No tiene',
                  inline: true,
                },
                {
                  name: '🐼 Hug',
                  value: 'Un total de ' + abrazos + ' abrazos',
                  inline: false,
                },
                {
                  name: '⭐ Nivel: ' + nivelres ,
                  value: ' ( ' + xpres + ' XP )',
                  inline: true,
                },
                {
                  name: '💸 Dinero: ',
                  value: moneyres + '$',
                  inline: true,
                },
                {
                  name: '🛠 Roles',
                  value: message.member.roles.cache.map(rol => '`' + rol.name + '`').join(', '),
                },
              ],
              thumbnail: {
                url: member.avatarURL(),
              },
              footer: {
                text: "🔎 ID: " + member.id,
              },
            }
          })
        }
    }
}