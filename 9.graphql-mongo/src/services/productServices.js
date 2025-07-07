const Product = require("../../models/Product");

async function getAllProductsService(_, __, context) {
  try {
    if (!context.user) {
      throw new Error("Not authorized, Please login!");
    }
    return await Product.find({});
  } catch (error) {
    console.log("Error while getting all products", error.message);
    throw new Error("Failed to get all products");
  }
}

async function getProductByIdService(_, { id }) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("No product found for id:", id);
    }
    return product;
  } catch (error) {
    console.log("Error while getting product by id", error.message);
    throw new Error(`Failed to get product with ${id}`, error.message);
  }
}

async function updateProductService(_, { id, ...updates }) {
  try {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...existingProduct.toJSON(), ...updates },
      {
        new: true,
      }
    );
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
    return newProduct;
  } catch (error) {
    console.error("Error while adding Product", error.message);
    throw new Error("Failed to add the Product", error.message);
  }
};

module.exports = {
  updateProductService,
  deleteProductService,
  addProductService,
  getProductByIdService,
  getAllProductsService,
};
