const mongose = require('mongoose');
let instance = null;

class Database {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
}

async function connect(options) {
    try {
        await mongose.connect(options.url, options.options);
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed');
    }


}

Module.exports = Database;