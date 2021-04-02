const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("Laury Kulanıcı Menüsü")
  .setColor("RANDOM")
  .addField("**-avatar **", "** <a:yrnex_tiks3:807620757914910720> `Avatarınıza bakarsınız.`**",)
  .addField("**-profil  **", "** <a:yrnex_tiks3:807620757914910720> `Profilinize bakarsınız.`**",)
  .addField("**-sunucuresmi**", "** <a:yrnex_tiks3:807620757914910720> `Sunucu resmini gösterir.`**",)
  .addField("**-çevir **", "** <a:yrnex_tiks3:807620757914910720> `v11 Bir kodu v12'ye çevirir.`**",)
  .addField("**-ping **", "** <a:yrnex_tiks3:807620757914910720> `Botun Pingine Bakarsın.`**",)
  .addField("**-davet **", "** <a:yrnex_tiks3:807620757914910720> `Beni Sunucuna Ekle.`**",)
  .addField("**-bot-bilgi**", "** <a:yrnex_tiks3:807620757914910720> `Bot istatistiklerini görürsünüz.`**",)
  .addField("**-bug-bildir**", "** <a:yrnex_tiks3:807620757914910720> `Yazdığınız bug'u yapımcılarıma bildirir.`**",)
  .addField("**-davet **", "** <a:yrnex_tiks3:807620757914910720> `Botun Davet Linkini Gösterir!`**",)


  
  
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
  aliases: ['kullanıcı',],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı [komut]'
};