const  config = require("./config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const fs = require('fs');
const db = require("quick.db");
const fetch = require ('cross-fetch');


const client = new Discord.Client();

const { nivelesTh } = require("./src/commands/nivel/niveles.js");
const { Commands } = require("./src/commands/commands.js");

const prefix = config.PREFIX;
const TOKEN = config.TOKEN;
const TENORKEY = config.TENORKEY;



client.login(TOKEN).then(function(res) {
  client.user.setStatus('online');
  client.user.setActivity(`Connecting...   |   -help`);  
});
//////////// TENOR


/////////////////////////////////////////COMANDOS////////////////////////////////////////////////////////
client.on("message", (message) => {

  
  ///////////////////////////////QUE///////////////////////////////////////
  if (message.content.startsWith("que")) {
    message.react('🤔');
    message.channel.send({
      embed: {
        color: '33FFF6',
        title: 'SO JAJAJAJA',
        image: { url: "https://c.tenor.com/IyKy95tPdNgAAAAC/smiling-thinking.gif" },
        footer: {
          text: 'troleado',
        },
      }
    })
    return;
  }

  /////////////////////////////
  if (!message.content.startsWith(prefix)) {
    nivelesTh(message);
    return;
  }
  Commands(message);
  ////FINAL////
});



client.on('ready', () => console.log(
  '   ╔════════════════╗\n\
   ║  BOT ACTIVO :D ║\n\
   ╚════════════════╝'
));