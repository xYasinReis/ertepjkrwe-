const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setImage(
      "https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif"
    )
    .setColor("RANDOM")
    .setFooter(
      `${msg.author.username} Başarıyla Yardım Komutunu Kullandı!`,
      msg.author.avatarURL
    )
    .setAuthor("Laury Bot Yardım Menüsü")
    .setDescription(
      "<a:vumpushypee:805848458883760179> Botu Davet Etmek İçin `-davet` yazabilirisiniz.",
      false
    )
    .addField(
      "**__Moderasyon__**",
      "<a:yrnex_tiks8:807621060551770133> `-moderasyon` \n**Moderasyon Komutlarını Gösterir.**",
      true
    )
    .addField(
      "**__Kullanıcı__**",
      "<a:yrnex_tiks3:807620757914910720>  `-kullanıcı` \n**Kullanıcı Komutlarını Gösterir.**",
      true
    )
    .addField(
      "**__Eğlence__**",
      "<a:yrnex_tiks2:807620495762915328> `-eğlence` \n**Eğlence Komutlarını Gösterir.**",
      true
    )
    .addField(
      "**__Abone Sistemi__**",
      "<a:yrnex_tiks5:807620903412039740> `-abone-sistemi` \n**Ayarlamalı Abone Rol Sistemidir.**",
      true
    )
    .addField(
      "**__Bot List Sistemi__**",
      "<a:yrnex_tiks:798275047047168041> `-botlist-sistemi` \n**Ayarlamalı Bot List Sistemidir.**",
      true
    )
    .addField(
      "**__Ticket Sistemi__**",
      "<a:yrnex_tiks9:807970125641678899> `-ticket-sistemi` \n**Ayarlamalı Ticket Sistemidir Sistemidir.**",
      true
    )
    .addField(
      "**__Bilgilendirme__**",
      "<a:yrnex_zincir:807960234991026176>  `-davet` | Botu Sununuya Davet Edersiniz \n<a:yrnex_zincir:807960234991026176> `-bot-bilgi` | Botun İslatistiklerini Görürsünüz \n<a:yrnex_zincir:807960234991026176>  `-sponsor` | Sponsoru Gorursunuz",
      false
    );

  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım", "help"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "yardım"
};
