const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
    name: 'flip',
    aliases: ['coinflip'],
    description: "flip",
    execute(client, message, args) {
        const coin = ['heads', 'tails']
        
        const flip = coin[Math.floor(Math.random() * coin.length)]

        message.channel.send(`the coin landed on: **${flip}**`)
    }
}