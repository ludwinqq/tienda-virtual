const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dbMongo = require('./src/config/mongodb');
dbMongo.connect();

const sequelize = require('./src/config/mysqldb');
sequelize.sync();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/photos', express.static(path.join(__dirname, 'photos')));

require('./src/routes')(app);

app.listen(port, () => {
  console.log('Puerto del servidor ' + port);
});
