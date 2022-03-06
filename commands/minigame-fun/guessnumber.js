const {
    MessageEmbed
} = require('discord.js');
const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()


module.exports = {
    name: 'guess-number',
    aliases: ['gsn'],
    categories: 'discord_games',
    description: '',
    run: async (client, message, args) => {
        message.channel.send(
            new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Your Game is Starting , Please Wait....`)
            .setAuthor(message.author.tag)
            .setTimestamp(5000)
        ).then(msg => {
            msg.delete({
                timeout: 5000
            })
            setTimeout(() => {
                guessTheNumber.startGame(message)
            }, 5000);
        })
    }
}