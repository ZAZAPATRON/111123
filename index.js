const { Client, IntentsBitField, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.commands = new Collection();

// Ping Komutu
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply(`Pong! 🏓 ${client.ws.ping}ms`);
  }

  if (message.content === '!help') {
    const helpEmbed = {
      color: 0x0099ff,
      title: 'Bot Komutları',
      description: 'Mevcut komutlar:',
      fields: [
        {
          name: '!ping',
          value: 'Bot latency\'sini göster',
        },
        {
          name: '!merhaba',
          value: 'Bot sana selamını verir',
        },
      ],
    };
    message.reply({ embeds: [helpEmbed] });
  }

  if (message.content === '!merhaba') {
    message.reply(`Merhaba ${message.author.username}! 👋`);
  }
});

client.login(process.env.TOKEN);