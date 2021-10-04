const discord = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()

      .setTitle(`Help Command`)

      .setThumbnail(
        message.author.displayAvatarURL({ dynamic: true, size: 1024 })
      )

      .setDescription(
        `

**Info**
\`help, ping, invite\`

**Leveling:**
\`level/lvl\`

**Setting:**
\`setprefix/prefix\`

`
      )
      .setFooter(message.guild);
    message.channel.send(embed);
  }
};
