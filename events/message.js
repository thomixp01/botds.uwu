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
        const command = message.content.split(' ')[0].slice(bot.config.prefix.length).toLowerCase();

        let cmd;
        if (bot.commands.has(command)) { cmd = bot.commands.get(command); }
        else if (bot.aliases.has(command)) { cmd = bot.commands.get(bot.aliases.get(command)) }

        if (!cmd){
            message.channel.send({
                embed: {
                    color: config.EMBED_COLORS.ERROR,
                    title: 'Error',
                    description: 'El comando no existe',
                }
            });
            return;
        }


        cmd.run(bot, message, args).catch (err => bot.emit("error", err));

    }
}