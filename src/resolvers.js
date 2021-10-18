import { Todo } from './models/Todo'

export const resolvers = {
  Query: {
    getTodos: () => Todo.find({ isDeleted: false }),
    getTodo: (_, { id }) => Todo.findById({ _id: id }),
    getDeletedTodos: () => Todo.find({ isDeleted: true })
  },
  Mutation: {
    createTodo: (_, { text }) => {
      const todo = new Todo({ text });
      return todo.save();
    },
    markComplete: (_, { id, complete }) => Todo.findOneAndUpdate({ _id: id }, { $set: { isComplete: complete } }),
    deleteTodo: (_, { id }) => Todo.findOneAndUpdate({ _id: id }, { $set: { isDeleted: true } }),
  }
}