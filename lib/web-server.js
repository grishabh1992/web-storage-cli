// On macOS, the value is the name of the app/browser
// On Linux, the value is the name of the binary
// On Windows, the value is the name of the .exe
// OS	Browser	APP_NAME
// macOS	Chrome	Google Chrome
// Firefox	Firefox
// Firefox (Developer)	Firefox Developer Edition
// Safari	Safari
// Windows	Chrome	Google Chrome
// Firefox	Firefox
// Firefox (Developer)	Firefox Developer Edition
// Brave	Brave
// Linux	Chrome	google-chrome
// Firefox	firefox
// Firefox (Developer)	firefox-developer-edition
// Brave	brave
const fs = require('fs');
const connect = require('connect');
const serveStatic = require('serve-static');
const open = require('open');
const files = require('./files');
const killPort = require('kill-port');
const chalk = require('chalk');

module.exports = {
    initServer: async (cred) => {
        // Perform operation
        // Wrinting js code which need to perform on browser
        // writen file is in web folder
        fs.writeFile(
            `${files.getWebRoot()}/web.js`, `localStorage.setItem("account","${cred.account}");
localStorage.setItem("username", "${cred.account}");`, function (err) {
            if (err) return chalk.red(err);
        });
        // Start server
        // Host web folder
        connect()
            .use(serveStatic(`${files.getWebRoot()}`))
            .listen(cred.port, () => chalk.green('Server Started'));
        const aa = await open(`http://localhost:${cred.port}`, { app: ['chrome', '--new-window'] });
        chalk.green('Operation Performed');
        setTimeout(() => {
            killPort(cred.port);
            chalk.green('Stopped Application')
        }, 2000);
    }
};