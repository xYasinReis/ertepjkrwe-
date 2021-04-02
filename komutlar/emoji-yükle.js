const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {

            return message.channel.send(`<a:yrnex_uyar:800419824538091610> **Gerekli iznin yok! (Emojileri yönet)**`)

        }

        const emoji = args[0];

        if (!emoji) return message.channel.send(`<a:laury_no:816556209092034570> **Bir emoji girmelisin!**`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {

            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${

              customemoji.animated ? "gif" : "png"

            }`;

            const name = args.slice(1).join(" ");

            message.guild.emojis.create(

                `${Link}`,

                `${name || `${customemoji.name}`}`

            ).catch(error => {

                console.log(error)

            })

            const Added = new MessageEmbed()

                .setTitle(`Emoji Eklendi`)

                .setColor("RANDOM" )

                .setDescription(

                    `<a:laury_yes:816556207857991722> **Emoji eklendi!** | **İsim:** \`${name || `${customemoji.name}`}\` | **Ön İzleme:** [Bana Tıkla](${Link})`

                );

            return message.channel.send(Added).catch(e => {

                console.log(e)

            })

        } else {

            let CheckEmoji = parse(emoji, {

                assetType: "png"

            });

            if (!CheckEmoji[0])

                return message.channel.send(`<a:laury_no:816556209092034570> **Lütfen geçerli bir emoji girin!**`);

            message.channel.send(

                `<a:laury_no:816556209092034570> **Normal emojileri sunucunuza ekleyemezsiniz!**`

            );

        }
}

exports.conf = {
    aliases: ["emoji-yükle"]
}

exports.help = {
    name: "emojiyükle",
    description: "Başka sunucudan kullandığınız emojiyi sunucuya ekler",
    usage: "emoji-yükle <özel emoji>"
}