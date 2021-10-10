module.exports = {
    name: "ping",
    category: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
       message.channel.send(`> 🏓  Latency: ${Date.now() - message.createdTimestamp}ms \n> 🏸  API latency: ${Math.round(client.ws.ping)}ms`)
    }
}
