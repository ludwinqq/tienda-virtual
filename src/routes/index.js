'use strict';

const user = require('./user');
const client = require('./client');
const product = require('./product');
const sales = require('./sales');

function routes(app)
{
    app.use('/api/user', user);
    app.use('/api/client', client);
    app.use('/api/product', product);
    app.use('/api/sales', sales);
}
  
module.exports = routes;