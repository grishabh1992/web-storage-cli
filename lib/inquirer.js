const inquirer = require('inquirer');
// asking for all user infromations
module.exports = {
    askCredentials: () => {
        const questions = [
            {
                name: 'account',
                type: 'input',
                message: 'Enter your account name:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your account.';
                    }
                }
            },
            {
                name: 'username',
                type: 'input',
                message: 'Enter your username:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password.';
                    }
                }
            },
            {
                name: 'port',
                type: 'input',
                message: 'Enter your application port:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your application port.';
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    },
};