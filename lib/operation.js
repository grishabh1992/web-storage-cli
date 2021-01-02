const CLI = require('clui');
const Spinner = CLI.Spinner;


module.exports = {
    // Any operation which need to perform 
    perform: async (cred) => {
        const status = new Spinner('Working you, please wait...');
        status.start();
        return new Promise(resolve => setTimeout(()=> {
            status.stop();
            resolve(cred);
        }, 3000));
    }
};