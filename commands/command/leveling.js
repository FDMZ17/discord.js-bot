const db = require('quick.db')
const canvacord = require('canvacord')
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'level',
    aliases: ["lvl"],
    description: 'Show your current level',
    usage: 'level',
    run: async(client, message, args) => {

        const member = message.mentions.users.first() || message.author;
        var level = db.get(`guild_${message.guild.id}_level_${member.id}`) || 0
        // level = level.toString()
        let xp = db.get(`guild_${message.guild.id}_xp_${member.id}`) || 0
        var xpNeeded = level * 500 + 500
        let every = db
            .all()
            .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
            .sort((a, b) => b.data - a.data)

        var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${member.id}`) + 1
        // rank = rank.toString()
        var image = new canvacord.Rank()
            .setUsername(member.username)
            .setDiscriminator(member.discriminator)
            .setStatus(member.presence.status)
            .setCurrentXP(xp)
            .setRequiredXP(xpNeeded)
            .setLevel(level)
            .setRank(rank)
            .setAvatar(member.displayAvatarURL({ format: 'png' }))
            .setRankColor('#2A2E35')

        image.build().then(data => {
            const rankImage = new MessageAttachment(data, 'levelup.png')
            message.channel.send(rankImage)

        })
    }
}
