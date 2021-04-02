const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || process.env.TOKEN;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        `Mesajı göndereceğim kanal zaten ayarlı: -ticket-kanal sıfırla`
      );
    let kanal = message.mentions.channels.first();
    if (!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`);
    if (!kanal)
      return message.channel.send(`Etiketlediğin kanalı bulamıyorum.`);
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription(
          `Mesajın kanalı başarıyla ayarlandı: -ticket gönder`
        )
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        `Mesajı göndereceğim kanal zaten ayarlı değil: -ticket-kanal sıfırla`
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription(
          `Mesajın kanalı başarıyla sıfırlandı: -ticket-kanal ayarla #kanal`
        )
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticket-kanal"],
  permLevel: 0
};

exports.help = {
  name: "ticket-kanal"
};
