var express = require('express');
let Category = require("../models/Categorias");

var router = express.Router();

router.post("/create", (req, res) => {
    const cat = Category(req.body);
    cat
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
module.exports = router;