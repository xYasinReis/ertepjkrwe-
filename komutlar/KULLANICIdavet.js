const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("GOLD")
    .addField("» **Botun Sahipleri**", "<@!768080464984014918> | <@!779983912515403776>")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/xksdUskx8q)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
	.addField("**» Oy Linki**", " [Oy Ver](https://top.gg/bot/787328444954050570)", )
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  .setImage("https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif")
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};