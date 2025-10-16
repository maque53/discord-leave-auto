
const chalk = require('chalk');
const ora = require('ora');

async function processGuilds(client) {
  const guilds = client.guilds.cache;

  for (const guild of guilds.values()) {
    const spinner = ora(`Processando guild "${guild.name}"...`).start();

    try {
      if (guild.ownerId === client.user.id) {
        await guild.delete();
        spinner.succeed(`Servidor "${guild.name}" deletado com sucesso!`);
      } else {
        await guild.leave();
        spinner.succeed(`Saiu do servidor "${guild.name}" com sucesso!`);
      }
    } catch (err) {
      spinner.fail(`Falha ao processar "${guild.name}": ${err.message}`);
    }
  }

  console.log(chalk.black.bgGreen('[ + ]') + chalk.green.underline(`Todas as guilds foram processadas.`));
  client.destroy();
  process.exit(0);
}

module.exports = { processGuilds };
