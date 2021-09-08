module.exports = {
    name: "ping",
    category: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
       message.channel.send(`> 🏸 Pong! api latency: ${client.ws.ping}ms`)
    }
}
