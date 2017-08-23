const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 8080;
// var Sequelize = require('sequelize');
// var db = new Sequelize('resume', 'user', '', {host: 'postgres', dialect: 'postgres'});

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.get('/', function (req, res) { res.send('Hello World!'); });

// db.sync({force: process.env.DROPTABLE})
//   .then(app.listen(port, '0.0.0.0', () => {console.log('Server is listening on port', port);}));

app.listen(port, () => {console.log('Server is listening on port', port);});