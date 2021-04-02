const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("Laury Kayıt Sistemi")
  .setColor("RANDOM")
  .addField("**-yetkili-rol ayarla**", "** <a:yrnex_tiks7:807621020470214736> `Kayıtçı rolünü ayarlar`**",)
  .addField("**-erkek-rol ayarla**", "** <a:yrnex_tiks7:807621020470214736> `Erkek kayıt rolünü ayarlar!`**",)
  .addField("**-kadın-rol ayarla**", "** <a:yrnex_tiks7:807621020470214736> ` Kadın kayıt rolünü ayarlar!`**",)
  .addField("**-kayıtsız-rol ayarla**", "** <a:yrnex_tiks7:807621020470214736> ` Kayıtsız Rolünü ayarlar!`**",)
  .addField("**-kayıt-log ayarla**", "** <a:yrnex_tiks7:807621020470214736> ` Kayıt Log Sistemini ayarlar!`**",)
  .addField("**-hg-kanal ayarla**", "** <a:yrnex_tiks7:807621020470214736> ` Hoşgeldin kanalını ayarlar!`**",)
  .addField("**-e @kişi İsim Yaş**", "** <a:yrnex_tiks7:807621020470214736> ` Erkek üye kayıt eder!`**",)
  .addField("**-k @kişi İsim Yaş**", "** <a:yrnex_tiks7:807621020470214736> ` Kadın üye kayıt eder!`**",)

  
  
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
  aliases: ['kayıt-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıt-sistemi [komut]'
};