const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const os = require('os-utils');
module.exports = {
    name: "stats",
    category: "info",
    description: "stats",
    aliases : ['stat', 'status'],
    run: (client, message, args) => {
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`Stats`);
        embed.addField(":wrench:  Bot stats:", 
        `**Memory Usage**: ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb
        **Uptime**: ${new Date(Math.floor(process.uptime()) * 1000).toISOString().substr(11,8)}
        **Ping**: ${client.ws.ping}Ms
        **Bot Version**: ${client.setting.bot.botVer}`,true)
        embed.addField(":desktop:  System stats", 
        `**Platform**: ${process.platform}
        **NodeJS**: ${process.version}
        **Architecture**: ${process.arch}
        **Local Time**: ${new Date().toLocaleTimeString()}`,true)
        embed.addField(":radio_button:  Server stats",
        `**Name**: ${message.guild.name}
        **Owner**: ${message.guild.owner.user.username}
        **Total Members**: ${client.guilds.cache.get(message.guild.id).memberCount}`,true)
        message.channel.send(embed)
	}
};