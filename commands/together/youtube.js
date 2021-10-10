const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
	name : "youtube",
	description: "Watch youtube together",
	aliases : ['yt'],
    run: async(client,message, args) => {
        let channel = message.member.voice.channel;
        if(!channel) return message.channel.send("please join a voice channel!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 90000,
                max_uses: 0,
                target_application_id: "755600276941176913",
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
            if(!invite.code) return message.channel.send("I can't start a yt together")
            message.channel.send(`https://discord.com/invite/${invite.code}`);
        })
    }
};