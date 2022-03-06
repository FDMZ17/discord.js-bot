const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "help panel",
    async run(client, message, args) {
        const together = new Discord.MessageEmbed()
            .setTitle('Together')
            .addField('youtube', 'Watch youtube together')
            .addField('fishing', 'Play fishington.io game')
            .addField('chess', 'Play chess game')
            .setColor('#2e3137')
            .setTimestamp()
        const game = new Discord.MessageEmbed()
            .setTitle('Minigame & Fun')
            .addField('guess-number', 'Play guess number game')
            .addField('snake', 'Play snake game')
            .addField('tictactoe', 'Play tic tac toe game')
            .addField('ascii', 'Make a ascii')
            .addField('meme', 'Get some cool memes')
            .addField('avatarfuse', 'Mix someone avatar')
            .addField('emojify', 'Emojifies your text message')
            .addField('fact', 'Shows some cool fact')
            .addField('delete', 'Delete this trash')
            .setColor('#2e3137')
            .setTimestamp()
        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .addField('play', 'Play music')
            .addField('pause', 'Pause the music')
            .addField('stop', 'Stop the music')
            .addField('resume', 'Resume music')
            .addField('search', 'Search music')
            .addField('skip', 'Skip the music')
            .addField('volume', 'Set the volume')
            .setColor('#2e3137')
            .setTimestamp()
        const math = new Discord.MessageEmbed()
            .setTitle('Math')
            .addField('calc +', 'calc 100+100')
            .addField('calc -', 'calc 100-50')
            .addField('calc *', 'calc 100 x 100=')
            .addField('calc ÷', 'calc 100 ÷ 2=')
            .addField('calc pi', 'Calculate the value of pi')
            .setColor('#2e3137')
            .setTimestamp()
        const etc = new Discord.MessageEmbed()
            .setTitle('Other')
            .addField('player', 'Get someone skin')
            .addField('uuid', 'Get someone uuid')
            .addField('wping', 'Make your replit/glitch projects 24/7')
            .addField('avatar', 'Get someone avatar')
            .addField('serverav', 'Get the server avatar')
            .addField('invite', 'Get invite link')
            .addField('ping', 'Ping between user and bot')
            .addField('stats', 'Gives you the bot info')
            .addField('github', 'Shows information about github user')
            .addField('wiki', 'Search something at wikipedia')
            .addField('screenshoot', 'Screenshoot a webpage')
            .addField('brainly', 'Find the answer for your homework \n ***indonesia only**')
            .setColor('#2e3137')
            .setTimestamp()
        const pages = [
            together,
            game,
            music,
            math,
            etc
        ]
        const emojiList = ["◀️", "▶️"];
        const timeout = '120000';
        pagination(message, pages, emojiList, timeout)
    }
}