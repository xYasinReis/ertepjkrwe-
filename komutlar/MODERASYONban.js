const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:yrnex_uyar:800419824538091610> **Yeterli yetkiye sahip değilsin.**`)

 
  let member = message.mentions.users.first();
  if (!member) return message.channel.send(`<a:laury_no:816556209092034570> **Lütfen Bir Kişi belirt!**`)
 
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<:nokta:814527160231657504> ${member} **Adlı kişinin sunucudan banlamasını onaylıyor musunuz?**`)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("Ban İşlemi iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(`<a:laury_yes:816556207857991722> **İşlem Başarılı! ${member} Adlı Kişi başarılı bir şekilde sunucudan banlandı!**`)
        message.guild.member(member).ban();
      }
    });
  });
};
 
exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};