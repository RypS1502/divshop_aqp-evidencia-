var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require("dotenv").config();

//RUTAS ALMACENADAS EN VARIABLES
var categories = require('./routes/categories');
var entry = require('./routes/ingreso');
var divshop = require('./routes/index');
var products = require('./routes/products');
var shoppingcart = require('./routes/shoppingcart');
var contact = require('./routes/contact');
var about = require('./routes/about');

var admin = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use de las rutas
app.use('/entry', entry);
app.use('/', divshop);
app.use('/products', products);
app.use('/categories', categories);
app.use('/shoppingcart', shoppingcart);
app.use('/contact', contact);
app.use('/about', about);

app.use('/admin', admin);



/* CONEXIÓN A MONGODB */
mongoose
  .connect(process.env.URI_MONGODB)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
