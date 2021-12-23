var express = require('express');
let Product = require("../models/Productos");

var router = express.Router();

router.get("/", (req, res) => {
  Product
  .find()
  .then((data) => res.render('products', { title: 'Productos', data: data}))
  .catch((error) => res.json({ message: error }));
});

router.post("/create", (req, res) => {
  const prod = Product(req.body);
  prod
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;