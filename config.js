const cooldown = require('command-cooldown');
const db = require("quick.db");
const fetch = require('cross-fetch');



module.exports = {


    PREFIX: "-",
    TENORKEY: "QBR3OM5C5UBM",
    FUNCIONES:{
        NIVELES: true,
        ECONOMIA: true,
        LOG: false,
    },
    MASCOTA: {
      Name: "NekoPet",
    },
      /* Bot Embed Colors */
    EMBED_COLORS: {
        BOT_EMBED: "#33FFF6",
        MONEY: "#6BFF79",
        SUCCESS: "#00A56A",
        ERROR: "#D61A3C",
        PROFILE: "#31FB1C",
        TIENDA: "#FF6B98",
        MASCOT: "#3589A5",
    },
    ERROR_MESSAGE_EMBED: {
        embed: {
          color: 'D61A3C',
          title: 'ERROR',
        }
      },
    TIEMPOS_MS: {
      Dias: "86400000",
      Horas: "3600000",
      Minutos: "60000",
      Segundos: "1000",
    },
    EMOJIS: {
      coin: '<:goldcoin:979072267550076938>',
      egg: '<:eggzz:979079825199362099>',
      abejita: '<:abejitauwu:979084775287562290>',
    },
}