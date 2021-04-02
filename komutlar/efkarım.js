const Discord = require("discord.js");

exports.run = (client, message) => {

const suleyman123 = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Laury Efkar Ölçer** \n <:laury_yak_yak:817036822551068702> **Efkarınız: \`%${suleyman123}\` Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım"
};
