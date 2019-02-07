const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMessage');
// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const product = require('./routes/product.route'); // Imports routes for the products

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://daki:dakito1@ds119059.mlab.com:19059/email-perretes';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//app.use(cors())

/*app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    console.log(req.body.name)
    res.status(200).send();
})*/
app.listen(3000, () => {
console.log('Server runnn')
});