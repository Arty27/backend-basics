const { loginService } = require("../services/loginService");
const {
  updateProductService,
  deleteProductService,
  addProductService,
  getAllProductsService,
  getProductByIdService,
} = require("../services/productServices");

const resolvers = {
  Query: {
    products: async (parent, args, context) => {
      console.log("from resolvers, ", context);
      return getAllProductsService(parent, args, context);
    },
    product: getProductByIdService,
  },
  Mutation: {
    addProduct: addProductService,
    deleteProduct: deleteProductService,
    updateProduct: updateProductService,
    login: loginService,
  },
};

module.exports = resolvers;
