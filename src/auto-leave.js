
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const chalk = require('chalk');

client.on('ready', async () => {
  console.log(chalk.black.bgGreen('[ + ]') + chalk.green.underline(` Auto-leave ativo para ${client.user.tag}`));
  
  const { processGuilds } = require('../backend/leave.js');
  await processGuilds(client);
});

client.login(process.env.TOKEN || 'TOKEN');
