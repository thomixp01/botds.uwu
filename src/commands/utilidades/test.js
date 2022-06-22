const config = require("../../../config.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');

color = config.EMBED_COLORS
module.exports = {
    name: "test",
    alias: ["test"],
    category: "Utilidades",
    run: async (bot, message, args) => {
        let id = message.author.id;
        let nombre = message.author.username.toString();
        var asddd = [
            {nombre: 'patata', id: '1232344523'},
            {nombre: 'asd', id: '5423234'},
            {nombre: 'thomiuwu', id: '6437654'},
            {nombre: nombre, id: id}
        ]

        var ajson = JSON.stringify(asddd);
        message.channel.send(ajson);


    }
}