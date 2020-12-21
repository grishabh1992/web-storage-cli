const CLI = require('clui');
const Spinner = CLI.Spinner;


module.exports = {
    // Call api from here and return cradential
    getCred: async (cred) => {
        const status = new Spinner('Authenticating you, please wait...');
        status.start();
        return new Promise(resolve => setTimeout(()=> {
            status.stop();
            resolve(cred);
        }, 3000));
    }
};