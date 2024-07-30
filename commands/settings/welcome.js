const Discord = require("discord.js");
const db = require('quick.db');
const bot = new Discord.Client();

const embed = new Discord.MessageEmbed()
    .setTitle('**invalid usage**')
    .setColor(0x0189ff)
    .setDescription(`\`\`\`welcome <channel> <message>\`\`\``)

const embed3 = new Discord.MessageEmbed()
    .setTitle('you are missing the `BAN_MEMBERS` permission')
    .setColor(0x0189ff)

module.exports = {
    name: 'setwelcome',
    aliases: ['setwelcomechannel'],
    description: "setwelcome <channel> <message>",
    execute(client, message, args) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(embed3)
        const channel = message.mentions.channels.first();
        const msg = args.slice(1).join(' ');

        if (!args[0]) return message.channel.send(embed)

        if (!args[1]) return message.channel.send(embed)

        if (channel) {
            db.set(`welcome_${message.guild.id}`, channel.id)
            db.set(`welcomemsg_${message.guild.id}`, msg)

            const embed2 = new Discord.MessageEmbed()
                .setDescription(`**welcome channel:** <#${channel.id}>\n**welcome message:** @member, ${msg}`)
                .setFooter(`Channel set by: ${message.author.username}`)
                .setTimestamp()
                .setColor(0x0189ff)

            message.channel.send(embed2)
        }
    }
}