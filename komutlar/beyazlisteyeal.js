const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "774591026940739585") if(message.author.id !== "774591026940739585") return message.channel.send(":x: Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(":x: Bir kullanıcı belirtmelisin!")

message.channel.send("✅ **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const elminstêr = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setTimestamp()
.setFooter('Laury')
.setDescription(`✅ **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("798273804060590086").send(elminstêr)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['erişimaç'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };