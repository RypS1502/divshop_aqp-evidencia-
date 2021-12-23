var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
let Product = require("../models/Productos");
let Cart = require("../models/Carrito");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Cart
  .find()
  .then((data) => res.render('shoppingcart', { title: 'Carrito' , data: data}))
  .catch((error) => res.json({ message: error }));
});

router.get('/add/:id', function(req, res, next) {
    const id = req.params.id;
    Product.findById( { _id: id }, (err, newprod) => {
      console.log(newprod);

      const name = newprod.name;
      const url = newprod.url;
      const price = newprod.price;
      const description = newprod.description;

      const cart = Cart({
        name: name,
        url: url,
        price: price,
        description: description
      }); 
      cart.save();
    });
  /* const carrito = Cart(produ);
  carrito.save(); */

  res.redirect('/products');
});

router.get('/delete/:id', function(req, res) {
  const { id } = req.params;
  Cart.remove({ _id: id }).catch((error) => res.json({ message: error }));
  res.redirect('/shoppingcart/');
});

module.exports = router;
