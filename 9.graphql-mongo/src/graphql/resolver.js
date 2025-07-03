const {
  updateProductService,
  deleteProductService,
} = require("../services/productServices");
const Product = require("../../models/Product");

const resolvers = {
  Query: {
    products: async () => await Product.find({}),
    product: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    addProduct: async (_, args) => {
      const newProduct = new Product(args);
      return await newProduct.save();
    },

    deleteProduct: deleteProductService,

    updateProduct: updateProductService,
  },
};

module.exports = resolvers;
