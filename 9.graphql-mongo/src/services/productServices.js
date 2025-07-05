const Product = require("../../models/Product");

async function updateProductService(_, { id, ...updates }) {
  try {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
    });
    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error.message);
    throw new Error("Failed to update product. " + error.message);
  }
}

const deleteProductService = async (_, { id }) => {
  try {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      throw new Error(`Product with ${id} not found`);
    }
    await Product.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.error("Error while deleting Product:", error.message);
    throw new Error("Failed to delete Product," + error.message);
  }
};

const addProductService = async (_, args) => {
  try {
    const newProduct = new Product(args);
    await newProduct.save();
  } catch (error) {
    console.error("Error while adding Product", error.message);
    throw new Error("Failed to add the Product", error.message);
  }
};

module.exports = {
  updateProductService,
  deleteProductService,
  addProductService,
};
