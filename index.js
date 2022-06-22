
const config = require("./config.js");

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.config = {
    prefix: config.PREFIX, // Your bot prefix
    color: config.EMBED_COLORS.BOT_EMBED // Color for the embeds
}

const { MessageEmbed } = require('discord.js');

const fs = require('fs');
const { readdirSync } = require('fs');
const db = require("quick.db");
const mongoose = require('mongoose');
const fetch = require ('cross-fetch');

const { nivelesTh } = require("./src/commands/nivel/niveles.js");
const { Log } = require("./src/commands/utilidades/log.js");
const { isArgumentsObject } = require("util/types");

const prefix = config.PREFIX;
const { TOKENTHOMIUWU } = require("../Token.js");
const TENORKEY = config.TENORKEY;
databasemongoo();
async function databasemongoo(){
  await mongoose.connect('mongodb+srv://thomiuwu.jup0r.mongodb.net/?').then(() =>{
    console.log(
      '       ╔════════════════╗\n\
       ║  DataBase :D   ║\n\
       ╚════════════════╝'
    );
  });
}


bot.login(TOKENTHOMIUWU).then(function(res) {
  bot.user.setStatus('online');
  bot.user.setActivity(`Connecting...   |   -help`);
});
//////////// TENOR

// Commands
for (const subFolder of readdirSync(`${__dirname}/src/commands/`)) {
  for (const fileName of readdirSync(`${__dirname}/src/commands/${subFolder}/`)) {
      let file = require(`${__dirname}/src/commands/${subFolder}/${fileName}`);

      bot.commands.set(file.name, file);
  }
}

// Events
for (const fileName of readdirSync(`${__dirname}/events/`)) {
  let file = require(`${__dirname}/events/${fileName}`);
  let eventEmiter = file.emiter;

  bot[eventEmiter](file.name, file.run.bind(null, bot));
}


Saves();

async function Saves(){
  let botlogs = await db.get("botinfo.log");
  config.FUNCIONES.LOG = botlogs;
  console.log("Save succesfull");
}



bot.on("message", (message) => {
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
return;}
let args = message.content.trim().split(/ +/g);

  if (!message.content.startsWith(prefix)) {
    if(config.FUNCIONES.LOG){Log(message, args);}
    if(config.FUNCIONES.NIVELES){nivelesTh(message);}

    return;
  }



  ////FINAL////
});
