const discord = require("discord.js");

module.exports = {
  name: "invite",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()

            .setTitle("Invite:")
            .setDescription(`[Click to invite me](https://discord.com/api/oauth2/authorize?client_id=${client.setting.bot.botid}&permissions=3669056&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D${client.setting.bot.botid}%26permissions%3D268435472%26scope%3Dbot&scope=bot)
            
             \Used on **${client.guilds.cache.size}** server\
             
             `)
            .setColor("#2e3137")
      .setFooter(message.guild);
    message.channel.send(embed);
  }
};
