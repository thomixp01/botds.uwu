const Discord = require('discord.js');
const config = require("../../../config.js");
const osu = require('node-osu');
const { MessageEmbed } = require('discord.js');
const api = new osu.Api("85842912bd27a41e4474c36868bd9b92605c61b0" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false
})

module.exports = {
    name: "osu",
    alias: ["osu"],
    category: "Utilidades",
    run: async (bot, message, args) => {

        let username = args[0]


        if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

        api.getUser({u: username}).then(user => {

        let timeplayer = user.secondsPlayed;
        timeplayer = timeplayer / 3600;
        timeplayer = timeplayer.toFixed(1);

        const osu = new Discord.MessageEmbed()
        .setTitle(`Osu user`)
        .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
        .setColor(config.embedcolor)
        .addField('》`Nombre:`', user.name)
        .addField('》`PP:`', Math.round(user.pp.raw))
        .addField('》`Rango:`', user.pp.rank)
        .addField('》`Nivel:`', Math.round(user.level))
        .addField('》`Puntaje:`', user.scores.ranked)
        .addField('》`Pais:`', user.country)
        .addField('》`Rango de pais:`', user.pp.countryRank)
        .addField('》`Partidas Jugadas:`', user.counts.plays)
        .addField('》`Precisión:`', `${user.accuracyFormatted}`)
        .addField('》`Creación de la cuenta:`', `${user.joinDate}`)
        .addField('》`Tiempo jugado:`', timeplayer + 'h')
        .setTimestamp()
            .setFooter(user.name, 'https://images-ext-1.discordapp.net/external/4GdcuxsEqxEKLyL0lhvak9qa372gGtm62HUGc5n_Vz8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/741709243052326922/1a478aefa9d07edbacb4882d15d34cf8.png')
        message.channel.send(osu)
        })


    }
}