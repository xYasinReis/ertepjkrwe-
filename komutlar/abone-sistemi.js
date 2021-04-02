const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
    .setTitle("Laury Abone Sistemi")
    .setColor("RANDOM")
    .addField(
      "**-abone-yetkili-rol**",
      "** <a:yrnex_tiks5:807620903412039740> `Abone Yetkilisini Seçer.`**"
    )
    .addField(
      "**-abone-rol**",
      "** <a:yrnex_tiks5:807620903412039740> `Vericeğiniz Rolü ayarlarsınız.`**"
    )
    .addField(
      "**-abone-log**",
      "** <a:yrnex_tiks5:807620903412039740> `Log mesajınn gitceği yer seçilir.`**"
    )
    .addField(
      "**-abone**",
      "** <a:yrnex_tiks5:807620903412039740> `Abone Rolü verme komutudur.`**"
    )

    .setFooter("Laury ©️ 2021 Tüm Hakları Saklıdır.")
    .setImage(
      "https://media.discordapp.net/attachments/812754727774322730/816413069608747048/standard.gif"
    );

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send(
        "Laury",
        `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` +
          prefix +
          `${rexuscommands.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-sistemi"],
  permLevel: 0
};

exports.help = {
  name: "abone-sistemi",
  description: "Tüm komutları gösterir.",
  usage: "abone-sistemi [komut]"
};
