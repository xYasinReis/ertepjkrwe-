const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("Laury Eğlence Menüsü")
  .setColor("RANDOM")
  .addField("**-efkarım**", "** <a:yrnex_tiks2:807620495762915328> `Efkarınızı Ölçer.`**",)
  .addField("**-aykut-elmas**", "** <a:yrnex_tiks2:807620495762915328> `Classic Aykut Elmas Sözleri.`**",)
  .addField("**-kaç-cm**", "** <a:yrnex_tiks2:807620495762915328> `Malafatını Ölçer.`**",)
  .addField("**-trump**", "** <a:yrnex_tiks2:807620495762915328> `Trump Tweet Atar.`**",)
  .addField("**-atam**", "** <a:yrnex_tiks2:807620495762915328> `Dene ve Gör Reis.`**",)
  .addField("**-vine**", "** <a:yrnex_tiks2:807620495762915328> `Komik Paylaşımlar.`**",)

  
  
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
  aliases: ['eğlence',],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence [komut]'
};