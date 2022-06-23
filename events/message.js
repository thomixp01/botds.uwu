const Discord = require('discord.js');
const config = require("../config.js");
const { nivelesTh } = require("../src/commands/nivel/niveles.js");
const { Log } = require("../src/commands/utilidades/log.js");
module.exports = {
    name: "message",
    emiter: "on",
    run: (bot, message) => {
        if (message.author.bot || message.channel.type === 'dm') return;


        if (!message.content.startsWith(bot.config.prefix)) {
            let args = message.content.trim().split(/ +/g);
            if(config.FUNCIONES.LOG){Log(message, args);}
            if(config.FUNCIONES.NIVELES){nivelesTh(message);}
            return;
        }

        const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        let cmd = bot.commands.get(command) || bot.commands.find((c) => c.alias.includes(command));

        if (!cmd) return message.reply('Ese comando no existe.');


        cmd.run(bot, message, args);

    }
}