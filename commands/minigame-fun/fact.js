const Random = require("srod-v2");

module.exports = {
    name: 'fact',
    category: 'fun',
    description: 'Shows some cool fact',
    usage: 'fact',
    aliases: [''],
    run: async (client, message, args) => {
        let data = await Random.GetFact();
        message.channel.send(data);
    }
};