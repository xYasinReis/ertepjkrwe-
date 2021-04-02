const Discord = require("discord.js");

exports.run = (client, message) => {
  let motion = new Discord.MessageEmbed()

    .addField(
      "Veriler",
      `> <a:yrnex_squadab:800738698513481758> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> <a:yrnex_squadab:800738698513481758> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> <a:yrnex_squadab:800738698513481758> Toplam kanal: **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "Bot Geliştiricisi",
      `> <a:yrnex_cevelop:800735697060888646> Bot geliştiricisi : <@768080464984014918> | <@779983912515403776>`
    )
    .addField(
      "Sürümler",
      `> <a:yrnex_bulut:794118277705629696> Discord.js sürümü: **v${Discord.version}** \n> <a:yrnex_bulut:794118277705629696> Node.js sürümü: **${process.version}**`
    )
  .setImage("https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif")
    .setTimestamp()
    .setColor("#0x36393F");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot-bilgi", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};
