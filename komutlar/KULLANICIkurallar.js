const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/765956003728326677/766009591866851358/4ea1e74d-1c99-490a-9c13-d46ec11bc4642Fkurallar.gif');
hook.send(`📢 KURALLAR
**- 1.) Siyaset yapmak, ağır argo, kavga çıkartmak yasak.

- 2.) Kişiye yönelik ağır küfür etmek (kişi rahatsız olacak derecede) yasaktır.

- 3.) Spam yapmak kesinlikle yasaktır. Lütfen yazacaklarınızı arka arkaya değil, tek seferde yazınız.

- 4.) Reklam yapmak kesinlikle yasaktır.

- 5.) Sunucumuzdaki kadınlara rahatsız edici derecede, kişinin isteği dışında sarkıntılık yapmak yasaktır.

- 6.) Pornografik +18 içerik, fotoğraf veya video atmak yasaktır.

- 7.) TÜRKİYE CUMHURİYETİ milli değerlerine, örf ve adetlerine küfür etmek, hakaret etmek yasaktır.

- 8.) Her türlü dini görüşe saygı duyulması zorunludur.

- 9.) Sunucuya katılan herkes 18 yaş üstü, reşit varsayılır.

- 10.) 8 yaşının altındaki üyelerin sunucumuzda barınması yasaktır.

- 11.) Altyapı Paylaşmak Yasaktır ! **\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};