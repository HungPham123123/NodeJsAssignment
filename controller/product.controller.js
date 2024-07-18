const Product = require("../model/Product.model");

exports.product_get = async function(req, res) {
  try {
      let sort = {};
      if (req.query.sortBy === 'ProductStoreCode') {
          sort = { ProductStoreCode: -1 };
      }
      let list = await Product.find().sort(sort).lean(); 
      res.render("home", {
          products: list
      });
  } catch (error) {
      res.status(500).send(error);
  }
};


exports.open_createProduct = async (req, res) => {
    res.render('create');
}

exports.create_Product = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.redirect('/');        
    } catch(error) {
        error
    }
}

exports.delete_Product = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
}

exports.show_edit = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render('edit', { product });
    } catch (error) {
        next(error);
    }
}

exports.update_Product = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/');
    } catch (error) {
        next(error);
    }
}


