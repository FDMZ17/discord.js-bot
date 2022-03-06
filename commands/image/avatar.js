const Discord = require("discord.js");


module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: "avatar",
    async run(client, message, args) {


        const Discord = require("discord.js");
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({
            size: 4096,
            dynamic: true
        });



        let embed = new Discord.MessageEmbed()
            .setTitle(`Avatar of ${user.tag}`)
            .setURL(avatar)
            .setImage(avatar)
            .setColor('RANDOM')
            .setDescription('Avatar:')
        message.channel.send(embed)

    }
}