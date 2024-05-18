import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({ 
    text: String,
    isComplete: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false } 
});

export const Todo = mongoose.model('Todo', TodoSchema);
