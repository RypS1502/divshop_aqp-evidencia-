var express = require('express');
let Product = require("../models/Productos");
var ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

/* GET home page. */
router.get('/view/products', function(req, res) {
    Product
    .find()
    .then((data) => res.render('admin_list-products', { title: 'Lista de productos', data: data }))
    .catch((error) => res.json({ message: error }));
});

router.get('/new/products', function(req, res) {
    res.render('admin_save-products', {title: 'Nuevo Producto', prod: {}});
});

router.post('/save/products', function(req, res) {
    const prod = Product(req.body);
    prod.save();

    res.redirect('/admin/view/products');
});

router.get('/edit/products/:id', function(req, res) {
    let idProd = req.params.id;
    console.log(idProd);
    Product.findOne( {_id: ObjectId(idProd)}, (err, prod) => {
        console.log(prod);
        if(err) throw err;

        res.render('admin_edit-products', {title: 'Editar Producto', prod: prod});
    });
});

router.post('/edit/products/update/:id', function(req, res) {
    const { id } = req.params;
    const { name, url, price, description } = req.body;
    Product.updateOne({ _id: id }, { $set: { name, url, price, description } }).catch((error) => res.json({ message: error }));
    res.redirect('/admin/view/products');
});

router.get('/delete/products/:id', function(req, res) {
    const { id } = req.params;
    Product.remove({ _id: id }).catch((error) => res.json({ message: error }));
    res.redirect('/admin/view/products');
});
module.exports = router;
