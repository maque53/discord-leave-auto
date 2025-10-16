
const { Client } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
require('dotenv').config();

const client = new Client();

client.on('ready', async () => {
  console.log(chalk.black.bgGreen('[ + ]') + chalk.green.underline(` Logado como ${client.user.tag} em ${client.guilds.cache.size} servidores.`));
  console.log(chalk.black.bgGreen('[ + ]') + chalk.green.underline(` Auto-leave ativo para ${client.user.tag}`));
  
  const { processGuilds } = require('./backend/leave.js');
  await processGuilds(client);
});

client.on('error', (err) => {
  console.log(chalk.white.bgRed('[ - ]') + chalk.red.underline(` Erro: ${err.message}`));
});

const token = process.env.TOKEN || 'TOKEN';

client.login(token).catch(err => {
  console.log(chalk.white.bgRed('[ - ]') + chalk.red.underline(` Erro ao logar: ${err.message}`));
  process.exit(1);
});
