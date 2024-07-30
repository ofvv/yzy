const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'leaderboard',
    description: "leaderboard",
    async execute(client, message, args) {
        /*
        let money = db.all().filter(data => data.ID.startsWith(`messages_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setColor(0x0189ff)
                .setFooter("nothing to see here")
            return message.channel.send(noEmbed)
        };

        money.length = 5;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - ${money[i].data}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`message leaderboard for ${message.guild.name}`)
            .setColor(0x0189ff)
            .setDescription(finalLb)
        message.channel.send(embed);
        */
        message.channel.send('not working rn LMAO')
    }

}