const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const color = config.EMBED_COLORS
module.exports = {
    name: "Dinero",
    description: "Economia para agregar/remover/establecer dinero",
    Addmoney: async (message, args) =>{
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: message.author.avatarURL(),
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
                        url: mentionuser.avatarURL(),
                      },
                    }
                  });
                  return;
            }
            mentionaddmoney();
        }


        async function authoraddmoney(){
            let authorid = message.author.id.toString();
            await db.add("userinfo.economia.dinero." + authorid, args[0]);
            let dinero = args[0];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se agrego ' + dinero + '$ a ' + message.author.username.toString(),
                thumbnail: {
                    url: message.author.avatarURL(),
                },
                }
            });   
            return;
        }


        async function mentionaddmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();

            await db.add("userinfo.economia.dinero." + memberid, args[1]);
            let dinero = args[1];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se agrego ' + dinero + '$ a ' + member.username.toString(),
                thumbnail: {
                    url: member.avatarURL(),
                },
                }
            });   
            return;
        }
          


        return;
    },
///////////////////////////////////////////////////////////////////////////////////////////////

    Setmoney: async (message, args) =>{
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: message.author.avatarURL(),
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
                        url: mentionuser.avatarURL(),
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
                    url: message.author.avatarURL(),
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
///////////////////////////////////////////////////////////////////////////////////////////////

    Delmoney: async (message, args) =>{
        const mentionuser = message.mentions.users.first();
        let author = message.author.username.toString();

        if(!mentionuser){
            if(isNaN(args[0])){
                message.channel.send({
                    embed: {
                      color: color.ERROR,
                      title: 'Ingrese un numero.',
                      thumbnail: {
                        url: message.author.avatarURL(),
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
                        url: mentionuser.avatarURL(),
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
    
            let res = Dinero - menos;

            await db.set("userinfo.economia.dinero." + authorid, res);
            let dinero = args[0];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se elimino ' + dinero + '$ a ' + message.author.username.toString() + ' ahora: ' + res + '$',
                thumbnail: {
                    url: message.author.avatarURL(),
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
    
            let res = Dinero - menos;

            await db.set("userinfo.economia.dinero." + memberid, res);
            let dinero = args[1];
            message.channel.send({
                embed: {
                color: color.MONEY,
                title: '💸 Se elimino ' + dinero + '$ a ' + member.username.toString() + ' ahora: ' + res + '$',
                thumbnail: {
                    url: member.avatarURL(),
                },
                }
            });   
            return;
        }
        return;
    },
///////////////////////////////////////////////////////////////////////////////////////////////

    Getmoney: async (message) =>{
        const mentionuser = message.mentions.users.first();
        
        if(!mentionuser){
            authorgetmoney();
        }else {
            mentiongetmoney();
        }


        async function mentiongetmoney(){
            let member = message.mentions.users.first();
            let memberid = member.id.toString();
            let avatar = member.avatarURL();
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
            let avatar = message.author.avatarURL();
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