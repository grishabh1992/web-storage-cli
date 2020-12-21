#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const fetcher = require('./lib/credFetcher');
const tempServer = require("./lib/repo")
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Cradential Store', { horizontalLayout: 'full' })
  )
);


const run = async () => {
  const credentials = await inquirer.askCredentials();
  console.log(credentials);
  await fetcher.getCred();
  await tempServer.initServer(credentials);

};

run();
