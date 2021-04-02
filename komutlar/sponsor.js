const Discord = require("discord.js"); //discordu tanımladık
const ayarlar = require("../ayarlar.json"); //ayarlar'ı tanımladık

let prefix = ayarlar.prefix; //prefixi tanımladık

exports.run = async (client, message, args) => {
  const Yardım = new Discord.MessageEmbed() //embedi tanımladık //v12 hali = -RichEmbed +MessageEmbed
    .setTitle("<a:yrnex_hypes:794222389584068618> Efsane Sponsorumuz!")
    .setImage(
      "https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif"
    ).setDescription(`
 <a:YRNEXOkEmojisi1:813049597144334336> Vds Alan Adı vb... Şeylermi İstiyorsun Tamda Yerine Geldin!
 <:nokta:814527160231657504> %100 Ddos Korumalı Vdsler
 <a:YRNEXOkEmojisi1:813049597144334336> En Güvenilir Ve En Korumalı Vdslerin Sahibi
 <:nokta:814527160231657504> Türkiye Lokasyonu
 <a:YRNEXOkEmojisi1:813049597144334336> Daha Ne Duruyorsun Haydi Sende Sunucusuna Gel Ve Efsane Vdslerin Sahibi Ol
 <:nokta:814527160231657504> Giriş Linki: https://discord.gg/gecM2R4AWj
 <a:YRNEXOkEmojisi1:813049597144334336> Website: https://webvoserver.net/
 <:nokta:814527160231657504> Webvo Yardımınıza Her Zaman Yetişir!

`);
  message.channel.send(Yardım);
};

exports.conf = {
  enabled: true, //komudu açtık
  guildOnly: true, //sunucuya özel olduğunu ayarladık
  aliases: ["sponsor"],
  permLevel: 0 //yetkiyi ayarladkk
};

exports.help = {
  name: "sponsor" //komutun kullanılacak ismini ayarladık
};
