const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "help panel",
    async run (client, message, args){
        const page1 = new Discord.MessageEmbed()
        .setTitle('Main')
        .addField('help', 'Show this menu')
        .addField('ping', 'Ping between bot and server')
        .addField('prefix', 'Set your bot prefix *per server')
        .setColor('#2e3137')
        .setTimestamp()
        const page2 = new Discord.MessageEmbed()
        .setTitle('Your cmd')
        .addField('cmd', 'desc')
        .addField('cmd', 'desc')
        .setColor('#2e3137')
        .setTimestamp()
        const pages = [
                page1,
                page2
        ]
        const emojiList = ["◀️", "▶️"];
        const timeout = '120000';
        pagination(message, pages, emojiList, timeout)
    }
}