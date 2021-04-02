const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
    .setTitle("Laury Moderasyon")
    .setColor("RANDOM")
    .addField(
      "**-reklamengel **",
      "** <a:yrnex_tiks8:807621060551770133> `Reklam Engeli Açarsınız.`**"
    )
    .addField(
      "**-küfürengel **",
      "** <a:yrnex_tiks8:807621060551770133> `Küfür Engeli Açarsınız.`**"
    )
    .addField(
      "**-emoji-yükle**",
      "** <a:yrnex_tiks8:807621060551770133> `Sunucunuza Emoji Yüklersiniz.`**"
    )
	.addField(
      "**-mute**",
      "** <a:yrnex_tiks8:807621060551770133> `İstediğiniz Kişiyi SÜreli Şekilde Susturursunuz.`**"
    )
    .addField(
      "**-slowmode**",
      "** <a:yrnex_tiks8:807621060551770133> `Yavaş Mod Ayarlarsınız.`**"
    )
    .addField(
      "**-sa-as**",
      "** <a:yrnex_tiks8:807621060551770133> `Sa-As Mesajını Açar.`**"
    )
    .addField(
      "**-sil**",
      "** <a:yrnex_tiks8:807621060551770133> `Belli Miktarda Mesaj Siler.`**"
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
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Tüm komutları gösterir.",
  usage: "moderasyon [komut]"
};
