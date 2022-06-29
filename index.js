const config = require("./config.js");

const Discord = require('discord.js');
const { Collection, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();

const fs = require('fs');
const { readdirSync } = require('fs');
const db = require("quick.db");
const mongoose = require('mongoose');
const fetch = require ('cross-fetch');


const { isArgumentsObject } = require("util/types");

const prefix = config.PREFIX;
const TOKEN = require("../Token.js").TOKENTHOMIUWU; //Token de discord bot
const TENORKEY = config.TENORKEY;
databasemongoo();
async function databasemongoo(){
  await mongoose.connect('mongodb+srv://thomiuwu.jup0r.mongodb.net/?').then(() =>{});
}


//SET COLLECTION
bot.aliases = new Collection();
bot.commands = new Collection();
bot.config = require("./config.js");
bot.config = { prefix: config.PREFIX, }// El prefix de tu bot





bot.login(TOKEN).then(function(res) {
  bot.user.setStatus('online');
  bot.user.setActivity(`Thomiuwu  |   -help`);
});
//////////// TENOR

// Commands


for (const subFolder of readdirSync(`${__dirname}/src/commands/`)) {
  for (const fileName of readdirSync(`${__dirname}/src/commands/${subFolder}/`)) {
      let file = require(`${__dirname}/src/commands/${subFolder}/${fileName}`);

      bot.commands.set(file.name, file);
      bot.aliases.set(file.alias, file);

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


});
bot.on('error', err => {
  sendToLogs("Error")
  console.error(err)
  process.exit(1);
});

bot.on('reconnecting', message => {
  sendToLogs(`User Reconnecting`)
});

bot.on('resume', message => {
  sendToLogs(`Connected ${bot.user.tag}`)
});

bot.on('disconnect', message => {
  sendToLogs(`User Disconnected`)
  process.exit(1);
});

////FINAL////