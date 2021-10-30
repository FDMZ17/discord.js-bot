const { Client, Message, MessageEmbed } = require('discord.js');
const djsGames = require('djs-games')
const SnakeGame = new djsGames.SnakeGame()

module.exports = {
    name: 'snake',
    aliases: ['snk'],
    categories : 'discord_games',
    description: '',
    run: async (client, message, args) => {
        message.channel.send(
            new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Your Game is Starting , Please Wait....`)
                .setAuthor(message.author.tag)
                .setTimestamp(5000)
        ).then(msg => {
            msg.delete({ timeout: 5000 })
            setTimeout(() => {
                SnakeGame.startGame(message)
            }, 5000);
        })

    }
}