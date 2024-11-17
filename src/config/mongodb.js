const mongoose = require('mongoose');
const DB = 'tiendaVirtual';
const REF = 'mongodb://localhost:27017/';

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