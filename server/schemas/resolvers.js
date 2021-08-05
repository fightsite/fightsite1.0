const { AuthenticationError } = require("apollo-server-express");
const  User = require('../models/user_model');
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      console.log(args);
      const token = signToken(user);
      console.log(token + `||` + user);

      return { token, user };
    },
    updateUser: async (parent, args) => {
      console.log(args);
      const updatedUser = await User.findOneAndUpdate(
         args.email, args.balance,{ new: true});
      if(!updatedUser) {
        throw new AuthenticationError("No user");
      }
     
      return updatedUser;
        
      

    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log('seeing this');
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
