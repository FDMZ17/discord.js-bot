const config = require("./prefix.json");
const token = require("./token.json");
const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client();
client.commands = new discord.Collection();

//===============================================

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.guild) return;
	
	if (!message.content.startsWith(prefix)) return;

	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	// Get the command
	let command = client.commands.get(cmd);
	// If none is found, try to find it by alias
	if (!command) command = client.commands.get(client.aliases.get(cmd));

	// If a command is finally found, run the command
	if (command) command.run(client, message, args);

	try {
		client.commands.get(cmd);
		client.channels.cache
			.get('Channel_Logs_ID')
			.send(
				`**Logs ${message.guild.name}**: ${message.author.tag} used (**${
					client.commands.get(cmd).name
	 }) ${message}**`
			);
	} catch (err) {
		console.log(err);
	}
}); 



		
client.on('ready', () => {
	

	console.log('Online.');
});

client.on('message', async message => {
    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(!message.guild) return;
    if(message.author.bot) return;
    xp(message)
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command)
    if(cmd) cmd.run(client, message, args)

})

async function xp(message) {
    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = 'f!'
    if(message.content.startsWith(prefix)) return;
    const randomNumber = Math.floor(Math.random() * 1) + 5
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.guild.id}`, randomNumber)
    var level = db.get(`guild_${message.guild.id}_rank_${message.author.id}`) || 1
    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
    var xpNeeded = level * 500
    if(xpNeeded < xp) {
        var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
        db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
        message.channel.send(`Congrats ${message.author}, you have levelled up to Level ${newLevel}`)
    }
}


client.login(token.token);

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
	console.log(`This bot used on ${client.guilds.cache.size} servers and ${client.users.cache.size} users`)
    client.user.setActivity("!help",{type: "WATCHING"}) 
})
