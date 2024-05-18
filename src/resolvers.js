import { Todo } from './models/Todo.js'

export const resolvers = {
  Query: {
    getTodos: async () => await Todo.find({ isDeleted: false }),
    getTodo: async (_, { id }) => await Todo.findById({ _id: id }),
    getDeletedTodos: async () => await Todo.find({ isDeleted: true })
  },
  Mutation: {
    createTodo: async (_, { text }) => {
      const todo = new Todo({ text });
      return await todo.save();
    },
    markComplete: async (_, { id, complete }) => await Todo.findOneAndUpdate({ _id: id }, { $set: { isComplete: complete } }),
    deleteTodo: async (_, { id }) => await Todo.findOneAndUpdate({ _id: id }, { $set: { isDeleted: true } }),
  }
};