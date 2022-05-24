const config = require("../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();

const fs = require('fs');
const db = require("quick.db");
const fetch = require ('cross-fetch');
const HMfull = require("hmfull");
const akaneko = require('akaneko');


const { help } = require("./help.js");
const { Profile } = require("./interaction/profile.js");
const { SetLevel } = require("./nivel/setlevel.js");
const { Level } = require("./nivel/setlevel.js");
const { Kiss } = require("./interaction/kiss.js");
const { channel } = require('diagnostics_channel');
;
//////Economia///////
const { Addmoney } = require('./Economia/dinero');
const { Setmoney } = require('./Economia/dinero');
const { Delmoney } = require('./Economia/dinero');
const { Getmoney } = require('./Economia/dinero');
///////////////////

const TENORKEY = config.TENORKEY
const prefix = config.PREFIX
const color = config.EMBED_COLORS

/////VARS///////
var besos;
var abrazos;
var levels;








module.exports = {

	Commands: async (message) =>{
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();


  ///////////////////////////////RELOAD///////////////////////////////////////
       if(command === 'reload') {
            bot.destroy()
            bot.login(TOKEN);
			console.log('Reloaded')
            message.channel.send("Reloaded");
         return;
        }



///////RESEATEAR STATS//////////
if (command === 'setlevel'){
  if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Necesitas permisos para usar este comando.',
        thumbnail: {
          url: message.author.avatarURL(),
        },
      }
    });
    return;
  }
  SetLevel(message, args);
  return;
}

///////////////Economia/////////////////
if (command === 'ecoadd'){
  if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Necesitas permisos para usar este comando.',
        thumbnail: {
          url: message.author.avatarURL(),
        },
      }
    });
    return;
  }
  Addmoney(message, args);
  return;
}
if (command === 'ecoset'){
  if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Necesitas permisos para usar este comando.',
        thumbnail: {
          url: message.author.avatarURL(),
        },
      }
    });
    return;
  }
  Setmoney(message, args);
  return;
}
if (command === 'ecodel'){
  if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Necesitas permisos para usar este comando.',
        thumbnail: {
          url: message.author.avatarURL(),
        },
      }
    });
    return;
  }
  Delmoney(message, args);
  return;
}
if (command === 'bal' || command === 'money' || command === 'eco'){
  Getmoney(message);
  return;
}


//////////////////////////

///////HELP//////////
if (command === 'help'){
  help(message);
  return;
}

if (command === 'test'){
  message.channel.send(config.ERROR);
}
///////Level//////////
if (command === 'level'){
  Level(message);
  return;
}

  ///////////////////////////////KISS///////////////////////////////////////
  if (command === 'kiss') {
    Kiss(message);
    return;
  }

  ///////////////////////////////HENTAI///////////////////////////////////////
  if(command === 'hentai'){
    let author = message.author.username.toString();
    if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
    hentai();
    async function hentai() {
      embed.setImage(await akaneko.nsfw.hentai());
      return message.channel.send(embed);
    }
    console.log(author + "a usado el comando de hentai");
    return;
  }

  ///////////////////////////////BDSM///////////////////////////////////////
  if(command === 'bdsm'){
    let author = message.author.username.toString();
    if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
    bdsm();
    async function bdsm() {
      embed.setImage(await akaneko.nsfw.bdsm());
      return message.channel.send(embed);
    }
    console.log(author + "a usado el comando de bdsm");
    return;
  }

  ///////////////////////////////manga///////////////////////////////////////
  if(command === 'manga'){
    let author = message.author.username.toString();
    if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
    manga();
    async function manga() {
	  let mangar = await HMfull.HMtai.nsfw.manga();
	  
      message.channel.send({
        embed: {
          color: color.BOT_EMBED,
          image: { url: mangar.url},
        }
      });

    }
    console.log(author + "a usado el comando de manga");
    return;
  }

  ///////////////////////////////FUCK///////////////////////////////////////
  if(command === 'fuck'){

    if (!message.channel.nsfw) return message.channel.send('lo siento, este canal no es nsfw!');
    let member = message.mentions.members.first();
	let author = message.author.username.toString();
    if (!member) return message.channel.send({
      embed: {
        color: color.BOT_EMBED,
        title: 'Ingrese un usuario. ',
		}
	 });
    fuck();
    async function fuck() {
	  let fuckr = await HMfull.HMtai.nsfw.gif();
	  
      message.channel.send({
        embed: {
          color: color.BOT_EMBED,
          title: author + ' se a follado a ' + member.displayName.toString(),
          image: { url: fuckr.url},
        }
      });

    }
    console.log(author + ' se a follado a ' + member.displayName.toString());
    return;
  }

  ///////////////////////////////spank///////////////////////////////////////
  if(command === 'spank'){
    let member = message.mentions.members.first();
	  let author = message.author.username.toString();
    if (!member) return message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Ingrese un usuario. ',
		}
	 });
    spank();
    async function spank() {
	  let spankr = await HMfull.HMtai.sfw.slap();
	  
      message.channel.send({
        embed: {
          color: color.BOT_EMBED,
          title: author + ' nalgueo a ' + member.displayName.toString(),
          image: { url: spankr.url},
        }
      });

    }
    console.log(author + ' nalgueo a ' + member.displayName.toString());
    return;
  }

  ///////////////////////////////lick///////////////////////////////////////
  if(command === 'lick'){
    let member = message.mentions.members.first();
	  let author = message.author.username.toString();
    if (!member) return message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Ingrese un usuario. ',
		}
	 });
    lick();
    async function lick() {
	  let lickr = await HMfull.HMtai.sfw.lick();
	  
      message.channel.send({
        embed: {
          color: color.BOT_EMBED,
          title: author + ' lamio ' + member.displayName.toString(),
          image: { url: lickr.url},
        }
      });

    }
    console.log(author + ' lamio ' + member.displayName.toString());
    return;
  }

  ///////////////////////////////hug///////////////////////////////////////
  if(command === 'hug'){
    let member = message.mentions.members.first();
	  let author = message.author.username.toString();
    if (!member) return message.channel.send({
      embed: {
        color: color.ERROR,
        title: 'Ingrese un usuario. ',
		}
	 });
    let memberid = member.id.toString();

    hug();
    async function hug() {
    await db.add("userInfo.abrazos." + memberid, 1);
    abrazos = await db.get("userInfo.abrazos." + memberid);
	  let hugr = await HMfull.Nekos.sfw.hug();
	  
      message.channel.send({
        embed: {
          color: color.BOT_EMBED,
          title: author + ' abrazo a ' + member.user.username.toString(),
          description: 'ha recibido un total de ' + abrazos + ' abrazos',
          image: { url: hugr.url},
        }
      });

    }
    console.log(author + ' abrazo a ' + member.user.username.toString());
    return;
  }
  
  ///////////////////////////////Profile///////////////////////////////////////
  if (command === 'profile') {
    let author = message.author.username.toString();
    Profile(message);
    console.log(author + "ha usado el comando de profile")
    return;
  }

  //////FINAL
    }
}