import mongoose from 'mongoose';

export const Todo = mongoose.model('Todo', { 
    text: String,
    isComplete: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false } 
});
