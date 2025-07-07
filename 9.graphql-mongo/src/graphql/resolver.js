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
    products: getAllProductsService,
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
