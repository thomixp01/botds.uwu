const config = require("../../../config");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "avatar",
    alias: ["icon"],
    category: "Utilidades",
    run: async (bot, message, args) => {
        const mentionuser = message.mentions.users.first();

        if(!mentionuser){
            authoravatar();
        }else{
            mentionavatar();
        }


        function authoravatar(){
                message.channel.send({
                    embed: {
                        color: color.BOT_EMBED,
                        title: message.author.username.toString(),
                        description: '[Click here!](' + message.author.displayAvatarURL({ size: 4096 , dynamic: true }) +')',
                        image: { url: message.author.displayAvatarURL({ size: 4096 , dynamic: true })},
                    }
                });

                return;
        }

        function mentionavatar(){
            let mention = message.mentions.users.first();
            let urla = mention.displayAvatarURL({ size: 4096 , dynamic: true });
            message.channel.send({
                embed: {
                    color: color.BOT_EMBED,
                    title: mention.username.toString(),
                    description: '[Click here!](' + message.author.displayAvatarURL({ size: 4096 , dynamic: true }) +')',
                    image: { url: mention.displayAvatarURL({ size: 4096 , dynamic: true })},
                }
            });
            return;
        }
        ///final
    }
}