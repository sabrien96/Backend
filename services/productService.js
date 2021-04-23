const Product = require("../model/product");

async function addProduct(req) {
  const product = new Product(
    {
      ...req.body
      //   name: req.body.name,
      //   image: req.body.image,
      //   brand: req.body.brand,
      //   description: req.body.description,
      //   countInStock: req.body.countInStock,
      //   price: req.body.price,
      //   category: req.body.category,
      //   subCategeory: req.body.subCategeory,
    });
  return await product.save()

}

async function getAllProducts() {
  return await Product.find({})

}
async function getProductById(id) {
  return await (await Product.findById(id).populate('reviews.reviewer')).execPopulate()
}

// function to get all products by category
async function getProductByCategory(category) {
  return await Product.find({ category: category })
}
// function to get all products by subcategory
async function getProductBySubcategory(subcategory) {
  return await Product.find({ subcategory: subcategory })
}
// function to delete  products by id
async function deleteProduct(proName) {
  console.log("deleting");
  // return await (await Product.deleteOne({_id:id}).populate('reviews.reviewer')).execPopulate()
  return await Product.deleteOne({ name: proName })
}

//function to update product 

// async function updateProduct(id) {

//   const product = await Product.findById(id);
//   if (!product) throw 'product not found';
//   Product.findByIdAndUpdate(req.params.id, {
//     name: req.body.name || "Untitled Note",
//     price: req.body.price,
//     discount:req.body.discount
//   }, { new: true })
//     .then(prod => {
//       if (!prod) {
//         return res.status(404).send({
//           message: "product not found with id " + req.params.id
//         });
//       }
//       res.send(prod);
//     }).catch(err => {
//       if (err.kind === 'ObjectId') {
//         return res.status(404).send({
//           message: "product not found with id " + req.params.id
//         });
//       }
//       return res.status(500).send({
//         message: "Error updating product with id " + req.params.noteId
//       });
//     });

//   // Object.assign(user, userParam);

//   // await user.save();
// }

module.exports = { addProduct, getAllProducts, getProductById, getProductByCategory, getProductBySubcategory, deleteProduct };
