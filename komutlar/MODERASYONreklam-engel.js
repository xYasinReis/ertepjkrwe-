const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const suleyman123 = new Discord.MessageEmbed()
      .setDescription(`Ne Yazık Ki Bu Komutu Kullanmaya Yetkin Yok.`)
      .setColor("RED");

    message.channel.send(suleyman123);
    return;
  }
  if (!args[0]) {
    const suleyman123 = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription(
        `Hatalı Kullanım! Örnek: **${prefix}reklam-engel aç & kapat**`
      );

    message.channel.send(suleyman123);
    return;
  }
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const suleyman123 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("**Görünüşe Göre Reklam-Engel Sistemi Zaten Aktif!**");

      message.channel.send(suleyman123);
      return;
    } else {
      db.set(`kufur_${message.guild.id}`, "Açık");
      const suleyman123 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("Reklam-Engel Sistemi Başarıyla Açıldı!");

      message.channel.send(suleyman123);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kufur_${message.guild.id}`);
    const suleyman123 = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription("Reklam-Engel Sistemi Başarıyla Kapandı!");

    message.channel.send(suleyman123);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklamengel"],
  permLevel: 2
};

exports.help = {
  name: "reklam-engel",
  description: "Kinda Code & Only V12.",
  usage: "reklam-engel"
};
