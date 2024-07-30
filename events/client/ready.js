const Discord = require("discord.js");
const chalk = require('chalk');

module.exports = (Discord, client) => {

    console.log(chalk.green(`> ${client.user.username} is online in ${client.guilds.cache.size} servers`))
    console.log(chalk.green(`> logged in as ${client.user.tag} ID: ${client.user.id}`))

    var totalMembers = 0;
        client.guilds.cache.forEach(guild => {
            var x = parseInt(guild.memberCount);
            totalMembers = totalMembers + x;
        })

    const statuses = [`over ${client.guilds.cache.size} guilds`,  `over ${totalMembers} users`, 'yzy help']

    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)]

        client.user.setActivity(status, {
            type: "WATCHING"
        })
    }, 60000)

    const log = client.channels.cache.get('821436298890969128')
    if(!log) return
    
    const embed = new Discord.MessageEmbed()
        .setDescription(`<a:green_swirl:809874856589918308> **yzy is now back online in ${client.guilds.cache.size} servers!**`)
        .setTimestamp()
        .setColor(0x0189ff)

    log.send(embed)

}