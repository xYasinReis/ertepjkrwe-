const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //+mute <@üye> <1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün> <nedenin>

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply(":yrnex_uyar: **Doğru Kullanım: -mute <@kişi> <süre> <nedeni>**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":yrnex_uyar: **Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!**");
let muterole = message.guild.roles.cache.find(r => r.name === "muted");

  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        permissions:[]
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("**-mute <@kişi> <süre>**");

  await(tomute.roles.add(muterole.id));
  message.reply(`**Başarıyla <@${tomute.id}> Kişisini ${ms(ms(mutetime))} Süreyle Susturdu !** <:ons:817030705603280976>`);

  setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`**<@${tomute.id}> Kişisinin Susturulma Süresi Doldu !** <:ons:817030705603280976>`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'mute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sureli Susturur.',
  usage: 'mute [Kullanıcı] [Süre] [Nedeni]'
};