const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "774591026940739585") if(message.author.id !== "774591026940739585") return message.channel.send(":x: Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(":x: Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send(":x: Bir sebep belirtmelisin!")

message.channel.send(":x: **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const elminstêr = new Discord.MessageEmbed()
.setColor(`RED`)
.setTimestamp()
.setFooter('Laury')
.setDescription(`:x: **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("798273804060590086").send(elminstêr)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['erişimkapat'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };