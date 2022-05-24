const config = require("../../config.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fetch = require ('cross-fetch');
var prefix = config.PREFIX;

module.exports = {
	name: 'help',
	description: 'informacion sobre los comandos',
	help: async (message) =>{
		let avatar = message.author.avatarURL();
		message.channel.send({
			embed: {
				color: '8346DC',
				title: '📂 Comandos',
				fields: [
	            {
	              name: '🔹 ' + prefix + ' Profile',
	              value: 'perfil',
	            },
	            {
	              name: '🔹 ' + prefix + ' kiss',
	              value: 'darle un beso a alguien',
	            },
	            {
	              name: '🔹 ' + prefix + ' hug',
	              value: 'darle un abrazo a alguien',
	            },
	            {
	              name: '🔹 ' + prefix + ' fuck',
	              value: 'cojerte a alguien',
	            },
	            {
	              name: '🔹 ' + prefix + ' bdsm',
	              value: 'imagen random sobre bdsm',
	            },
	            {
	              name: '🔹 ' + prefix + ' manga',
	              value: 'panel random de un hentai/anime',
	            },
	            {
	              name: '🔹 ' + prefix + ' hentai',
	              value: 'hentai random',
	            },
	            {
	              name: '🔹 ' + prefix + ' spank',
	              value: 'nalguear a alguien',
	            },
	            {
	              name: '🔹 ' + prefix + ' lick',
	              value: 'lamer a alguien',
	            },
				{
					name: '🔒 ' + prefix + ' setlevel',
					value: 'actualizar el nivel de alguien o tu propio nivel',
				},
				{
					name: '🔹 ' + prefix + ' level',
					value: 'ver tu nivel actual o el de alguien mas',
				},
				{
					name: '🔒 ' + prefix + ' ecoadd',
					value: 'agregar dinero a un usuario',
				},
				{
					name: '🔒 ' + prefix + ' ecodel',
					value: 'restar o eliminar dinero a un usuario',
				},
				{
					name: '🔒 ' + prefix + ' ecoset',
					value: 'establecer dinero a un usuario',
				},
				{
					name: '🔹 ' + prefix + ' bal/eco/money',
					value: 'Saber cuanto dinero tienes',
				},
	          ],
	          thumbnail: {
	            url: avatar,
	          },
			}
		})

	}
	
}