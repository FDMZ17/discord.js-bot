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

**Ex:**
\`Example1\`

**Ex:**
\`Example2\`

**Ex:**
\`Example3\`

`
      )
      .setFooter(message.guild);
    message.channel.send(embed);
  }
};
