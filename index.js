const discord = require('discord.js');
const client = new discord.Client();
client.commands = new discord.Collection();

const express = require('express');
const app = express();
const port = 2323;
client.setting = require('./setting');
const prefix = client.setting.bot.prefix;


//-----------------------------------------------

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

});





client.on('ready', () => {


	console.log('Online.');
});


client.login(client.setting.bot.token);
app.listen(port, () => console.log(`http://localhost:${port}`));
app.get('/', (req, res) => {
	res.send('FDMZ17 DiscordJS Bot')
});

client.on("ready", () => {
	console.log(`Hi, ${client.user.username} is now online!`);

	client.user.setActivity(client.setting.bot.status, {
		type: client.setting.bot.statustype
	});

	console.log(`Bot is online and running in ${client.guilds.cache.size} servers!, for ${client.users.cache.size} user!`)

})
console.log(process.version)