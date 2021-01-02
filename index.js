#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const fetcher = require('./lib/operation');
const tempServer = require("./lib/web-server")
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Browser Store', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const userInfo = await inquirer.askCredentials();
  await fetcher.perform();
  await tempServer.initServer(userInfo);
};

run();
