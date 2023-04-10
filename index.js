import { program } from 'commander';
import chalk from 'chalk';
import { createPassword } from './utils/createPassword.js';
import clipboard from 'clipboardy';
const log = console.log;

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Save the password to password.txt')
  .option('-nn, --no-numbers', 'Remove numbers')
  .option('-ns, --no-symbols', 'Remove symbols')
  .parse();

const {length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

clipboard.writeSync(generatedPassword);

log(chalk.blue('Generated Password:') + chalk.bold(generatedPassword));
log(chalk.yellow('Copied to clipboard!'));
