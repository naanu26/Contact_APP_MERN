const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Database connected');
}

module.exports = connect;
