const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("Laury Ticket Sistemi")
  .setColor("RANDOM")
  .addField("**-ticket-kanal ayarla/sıfırla #kanal**", "** <a:yrnex_tiks9:807970125641678899> ` Ticket mesajının kanalını ayarlarsınız.`**",)
  .addField("**-bilet gönder**", "** <a:yrnex_tiks9:807970125641678899> ` Ticket mesajını yollar.`**",)
  .addField("**-ticket-aç**", "** <a:yrnex_tiks9:807970125641678899> ` Ticket açarsınız.`**",)

  
  
  .setFooter('Laury ©️ 2021 Tüm Hakları Saklıdır.')
  .setImage("https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif")

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send('Laury', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['ticket-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'ticket-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'ticket-sistemi [komut]'
};