const {
  exec
} = require("child_process");

module.exports = {
  name: "exec",
  aliases: ["execute"],
  run: async (client, message, args) => {
    if (message.author.id !== "675299191827857410") return;
    try {
      exec(args.join(' '), (error, stdout) => {
        const response = stdout || error;
        message.channel.send(response, {
          split: true,
          code: true
        })
      })
    } catch (error) {
      message.channel.send("An Error occured" + error);
      console.error(error);
    }
  },
};