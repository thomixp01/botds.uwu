const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fs = require("fs");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    Log: async (message, args)=> {
        if(message.author.bot){return;}
        let username = message.author.username.toString();
        let Fecha = new Date();
        let minuto = Fecha.getMinutes();
        let hora = Fecha.getHours();
        let fechaord = new Intl.DateTimeFormat(['ban', 'id']).format(Fecha)
        args[0];
        let res = "▌" + fechaord + " "+ hora + ":" + minuto + "▌ " + username + ": " + args;
        console.log(res);


        fs.appendFile('../log.txt', '\r\n'+ res, function (err) {
            if (err) {
              // append failed
            } else {
              // done

            }
          })
    },
}