const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "help panel",
    async run (client, message, args){
        const main = new Discord.MessageEmbed()
        .setTitle('Main')
        .addField('help', 'Show this menu')
        .addField('ping', 'Ping between bot and server')
        .addField('prefix', 'Set your bot prefix *per server')
        .setColor('#2e3137')
        .setTimestamp()
        const level = new Discord.MessageEmbed()
        .setTitle('level')
        .addField('level', 'Show your current level')
        .setColor('#2e3137')
        .setTimestamp()
        const pages = [
                main,
                level
        ]
        const emojiList = ["◀️", "▶️"];
        const timeout = '120000';
        pagination(message, pages, emojiList, timeout)
    }
}