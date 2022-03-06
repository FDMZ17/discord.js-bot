const discord = require("discord.js");

module.exports = {
  name: "invite",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()
      .setTitle("Invite:")
      .setDescription(`[Click to invite me](https://discordapp.com/oauth2/authorize?client_id=${client.setting.bot.botid}&scope=bot)
            
             \Used on **${client.guilds.cache.size}** server\
             
             `)
      .setColor("#2e3137")
      .setFooter(message.guild);
    message.channel.send(embed);
  }
};