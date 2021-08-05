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

      console.log(parent);
      const updatedUser = await User.findByIdAndUpdate(
         args._id, args.balance,{ new: true});

      if(!updatedUser) {
        throw new AuthenticationError("No user");
      }
      console.log(updatedUser);
      return updatedUser;
        
      

    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
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
