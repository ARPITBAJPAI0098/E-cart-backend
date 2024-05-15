const { Product } = require("../Model/Product");
//All CRUD OPERATION are put in the section of Controller
exports.createProduct = async (req, res) => {
  //as we are putting this in routes therefore we are using req,res both
  //
  const product = new Product(req.body);
  const response = await product.save();
  console.log(response);
  //   product.save((err, doc) => { 
  //     console.log({ err, doc });
  //     if (err) {
  //       res.status(400).json(err);
  //     } else {
  //       res.status(201).json(doc);
  //     }
  //});
  // the above format is nolonger available for mongodb 7.0 grater version
};
