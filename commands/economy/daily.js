const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'daily',
    cooldown: 86400,
    description: "daily",
    execute(client, message, args) {
        let amount = 5000

        db.add(`money_${message.author.id}_${message.guild.id}`, amount)

        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> **redeemed their daily** \`${amount}\` 💵`)
            .setColor(0x0189ff)

        message.channel.send(embed)
    }
}