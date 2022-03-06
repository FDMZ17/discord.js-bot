const fetch = require('node-fetch')
const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "chess",
    description: "Play Chess Game",
    aliases: [],
    run: async (client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("please join a voice channel!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 90000,
                    max_uses: 0,
                    target_application_id: "832012774040141894",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(invite => {
                if (!invite.code) return message.channel.send("I can't start a chess game")
                const embed = new MessageEmbed()
                    .setTitle("Play chess game")
                    .setDescription(`[Click to open play together](https://discord.com/invite/${invite.code})`)
                    .setColor("#2e3137")
                    .setFooter(message.author.username, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                message.reply(embed)
            })
    }
};