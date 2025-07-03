const products = require("../data/products");

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((e) => e.id === id),
  },
  Mutation: {
    addProduct: (_, { title, price, category, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        title,
        price,
        category,
        inStock,
      };
      products.push(newProduct);
      return newProduct;
    },

    deleteProduct: (_, { id }) => {
      const index = products.findIndex((e) => e.id === id);
      if (index === -1) {
        return false;
      }
      products.splice(index, 1);
      return true;
    },

    updateProduct: (_, { id, ...updates }) => {
      const index = products.findIndex((e) => e.id === id);
      if (index === -1) {
        return null;
      }
      const updateProduct = {
        ...products[index],
        ...updates,
      };
      products[index] = updateProduct;
      return updateProduct;
    },
  },
};

module.exports = resolvers;
