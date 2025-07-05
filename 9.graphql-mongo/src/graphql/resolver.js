const {
  updateProductService,
  deleteProductService,
  addProductService,
} = require("../services/productServices");
const Product = require("../../models/Product");

const resolvers = {
  Query: {
    products: async () => await Product.find({}),
    product: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    addProduct: addProductService,

    deleteProduct: deleteProductService,

    updateProduct: updateProductService,
  },
};

module.exports = resolvers;
