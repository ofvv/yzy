const Discord = require("discord.js");
const db = require('quick.db');
const embed2 = new Discord.MessageEmbed()
    .setTitle('**invalid usage**')
    .setColor(0x0189ff)
    .setDescription(`\`\`\`suggestion <message>\`\`\``)
module.exports = {
    name: 'suggestion',
    aliases: ['suggest'],
    description: "suggestion <message>",
    async execute(client, message, args) {

        let prefix = db.get(`prefix_${message.guild.id}`);
        if (prefix === null) prefix = 'yzy '

        const embed = new Discord.MessageEmbed()
            .setTitle('**there is no suggestion channel for this guild!**')
            .addField('SET CHANNEL USING:', `\`\`\`${prefix}suggestionchannel <channel>\`\`\``)
            .setColor(0x0189ff)

        const channell = db.get(`suggestion_${message.guild.id}`)

        const channel = message.guild.channels.cache.get(channell);
        if (!channel) return message.channel.send(embed)

        if (!args[0]) return message.channel.send(embed2)

        const msg = args.slice(0).join(' ');

        const suggestion = new Discord.MessageEmbed()
        .setAuthor(`Suggestion from: ${message.author.tag}`)
        .setDescription(msg)
        .setColor(0x0189ff)
        //.setFooter(`Suggestion from: ${message.author.tag}`)
        .setTimestamp()

        const lol = await channel.send(suggestion)
        lol.react('👍')
        lol.react('👎')

    }

}