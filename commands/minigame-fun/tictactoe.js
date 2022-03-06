const {
    MessageEmbed
} = require('discord.js');
const djsGames = require('djs-games')
const TicTacToe = new djsGames.TicTacToe()

module.exports = {
    name: 'tictactoe',
    aliases: ['ttt'],
    categories: 'discord_games',
    description: '',
    run: async (client, message, args) => {
        const user = message.mentions.users.first()
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
            if (!user) return message.channel.send(
                new MessageEmbed()
                .setTitle(`Please Mention Your Friend To Play Game.`)
            ).then(hehe => {
                hehe.delete({
                    timeout: 5000
                })
            })
            setTimeout(() => {
                TicTacToe.startGame(message)
            }, 5000);
        })


    }
}