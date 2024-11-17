const mongoose = require('mongoose');
require('dotenv').config();

const DB = 'tiendaVirtual';
const REF = process.env.DB_REF;

async function connect(){
    await mongoose.connect(REF+DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Base de datos MongoDB conectado...');
}
module.exports = {
    connect
}