const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
    getUserById: (_, { id }) => {
      const user = users.find((e) => e.id === id);
      return user;
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        id: (users.length + 1).toString(),
        ...args,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const users = [
  { id: "1", name: "User1", age: 10, isMarried: false },
  { id: "2", name: "User2", age: 11, isMarried: false },
  { id: "3", name: "User3", age: 12, isMarried: true },
];

export default resolvers;
