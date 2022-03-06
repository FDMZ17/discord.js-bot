const {
    MessageEmbed,
    discordjs,
    discord
} = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'eval',
    run: async (client, message, args) => {
        if (message.author.id !== '675299191827857410') return
        try {
            const data = eval(args.join(' ').replace(/```/g, '``````'))
        } catch (error) {
            message.channel.send('An Error occured' + error);
            console.error(error);
        }
    }
}