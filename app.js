// Import discord.js
const { clear } = require('console');
const { channel } = require('diagnostics_channel');
const { Client, Intents, MessageEmbed, Guild, GuildMember } = require('discord.js');
const { send } = require('process');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// define things

const prefix = '-'

require('dotenv').config();

const TOKEN = process.env.TOKEN

// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('WORKING!');
    await console.log(`LOGGED IN AS [${client.user.tag}]`)
    client.user.setAvatar('https://cdn.discordapp.com/attachments/949358380718387291/950119546885406750/771-7716581_art-wumpus-discord-hd-png-download.png')
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'test') {
        if (message.member.roles.cache.has('949358316784607252')) {
            message.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }else {
            message.reply('U DONT HAVE PERMS');
        }
    }

    if (command === 'clear') {
        message.channel.bulkDelete(100)
        .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
        .catch(console.error);
    }

    if (command === 'sell') {
        if (message.member.roles.cache.has('949358329279430656')){
        var serverIcon = message.guild.iconURL();
        const errorembed = new MessageEmbed()
	    .setColor('#cc1111')
	    .setTitle('Error')
	    .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
	    .setDescription('Error while executing command!')
	    .setThumbnail(serverIcon)
	    .addFields(
		{ name: 'Correct usage:', value: '`-sell (product name) (product description)`'},
		{ name: 'Need Help?', value: 'Conntact a staff member or admin ',},
	    )
	    .setTimestamp()

        const success = new MessageEmbed()
	    .setColor('#00FF00')
	    .setTitle('Success')
	    .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
	    .setDescription('We will be submiting your item shortly!')
	    .setThumbnail(serverIcon)
	    .addFields(
		{ name: 'Need Help?', value: 'Conntact a staff member or admin ',},
	    )
	    .setTimestamp()

        const itemembed = new MessageEmbed()
        .setColor('#00FFFF')
	    .setTitle('New Item For Sale')
	    .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
	    .setDescription('There is a new item on the shop!')
	    .setThumbnail(serverIcon)
	    .addFields(
        { name: 'New Item:', value: `${args[1]}`},
        { name: 'About Item:', value: `${args[2]}`},
		{ name: 'Need Help?', value: 'Conntact a staff member or admin ',},
	    )
	    .setTimestamp()
            message.delete({timeout: 1000})
            if (!args[0]) return message.channel.send({ embeds:[errorembed] });
            if (!args[1]) return message.channel.send({ embeds: [errorembed] });
            if (!args[2]) return message.channel.send({ embeds: [success] }), client.channels.cache.get(`950103677627162684`).send({ embeds: [itemembed] });
        } else {
            if (message.member.roles.cache.has('949358330088947722')){
            var serverIcon = message.guild.iconURL();
            const errorembed = new MessageEmbed()
	        .setColor('#cc1111')
	        .setTitle('Error')
	        .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
	        .setDescription('Error while executing command!')
	        .setThumbnail(serverIcon)
	        .addFields(
		    { name: 'Correct usage:', value: '`-sell (product name) (product description)`'},
		    { name: 'Need Help?', value: 'Conntact a staff member or admin ',},
	        )
	        .setTimestamp()

            const success = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Success')
            .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
            .setDescription('We will be submiting your item shortly!')
            .setThumbnail(serverIcon)
            .addFields(
            { name: 'Need Help?', value: 'Conntact a staff member or admin ',},
            )
            .setTimestamp()

            const itemembed = new MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('New Item For Sale')
            .setAuthor({ name: 'Wumpus Shop', iconURL: `${serverIcon}`, url: 'https://discord.js.org' })
            .setDescription('There is a new item on the shop!')
            .setThumbnail(serverIcon)
            .addFields(
            { name: 'New Item:', value: `${args[1]}`},
            { name: 'About Item:', value: `${args[2]}`},
            { name: 'Need Help?', value: 'Conntact a staff member or admin ',},
            )
            .setTimestamp()
                message.delete({timeout: 1000})
                if (!args[0]) return message.channel.send({ embeds:[errorembed] });
                if (!args[1]) return message.channel.send({ embeds: [errorembed] });
                if (!args[2]) return message.channel.send({ embeds: [success] }), client.channels.cache.get(`950103677627162684`).send({ embeds: [itemembed] });
            }
        }
    }
});


// Login to Discord with your client's token
client.login(TOKEN);