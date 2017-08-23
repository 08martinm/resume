const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 8080;

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {console.log('Server is listening on port', port);});
