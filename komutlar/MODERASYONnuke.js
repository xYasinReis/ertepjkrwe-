const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const yetki = new Discord.MessageEmbed()
      .setColor("BLACK")
    .setFooter(client.user.username , client.user.avatarURL())
  .setDescription("<a:emoji_10:798510413355941908> Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki); 
message.channel.clone().then(rennia => {
let darkcode = message.channel.position;
rennia.setPosition(darkcode);  
message.channel.delete();});
  message.channel.send("<a:emoji_10:798510413355941908> Kanal Patlatılıyor \n https://tenor.com/view/destory-eexplode-nuke-gif-6073338 ")
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nuke','nuk'],
  permLevel: 0
};

exports.help = {
    name: 'nuke',
  description: 'x',
  usage: 'x'
};  