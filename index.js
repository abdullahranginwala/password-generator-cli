const { program } = require('commander');
const createPassword = require('./utils/createPassword');
const log = console.log;

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Save the password to password.txt')
  .option('-nn, --no-numbers', 'Remove numbers')
  .option('-ns, --no-symbols', 'Remove symbols')
  .parse();

const {length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

log(generatedPassword)
