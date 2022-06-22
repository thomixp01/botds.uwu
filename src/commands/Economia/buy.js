const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

const abejita = config.EMOJIS.abejita;
color = config.EMBED_COLORS
module.exports = {
    name: "buy",
    alias: ["comprar"],
    category: "Economia",
    run: async (bot, message, args) => {
        let avatarauthor = message.author.avatarURL({ size: 4096 , dynamic: true });
        let authorid = message.author.id;
        let dinero = await db.get("userinfo.economia.dinero." + authorid)

        if(isNaN(args[0])){
            message.channel.send({
                embed: {
                  color: color.ERROR,
                  title: '❌ Ingrese un ID valido.',
                  thumbnail: {
                    url: avatarauthor,
                  },
                }
              });
              return;
        }

        let ID = args[0];
        if (ID == "951"){
            if (dinero < 5000){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: '❌ No tienes suficiente dinero',
                      thumbnail: {
                        url: avatarauthor,
                      },
                    }
                  });
                  return;
            }
            await db.add("userInfo.inventario.mascota." + authorid, 1);
            let menos = 5000;
            let res = dinero - menos;
            await db.set("userinfo.economia.dinero." + authorid, res);

            message.channel.send({
                embed: {
                  color: color.TIENDA,
                  title: abejita + ' has comprado una mascota!! `[ID: 951]`',
                  thumbnail: {
                    url: avatarauthor,
                  },
                  image: {url: 'https://i.imgur.com/8sHAFkg.gif'}
                }
              });
            return;
        }

        message.channel.send({
            embed: {
              color: color.ERROR,
              title: '❌ No se ha encontra un ID valido.',
              thumbnail: {
                url: avatarauthor,
              },
            }
          });
          return
    }
}