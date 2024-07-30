const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'balance',
    aliases: ['bal'],
    description: "bal <@user>",
    execute(client, message, args) {
        let user = message.mentions.users.first() || message.author;

        let money = db.get(`money_${user.id}_${message.guild.id}`)
        if (money === null) money = 0

        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s balance`)
        .setDescription(`**wallet:** ${money} 💵`)
        .setColor(0x0189ff)

        message.channel.send(embed)
    }
}// test
