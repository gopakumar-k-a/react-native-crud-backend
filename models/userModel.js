import mongoose from "mongoose";
// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is mandatory
    trim: true, // Removes any leading or trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
    trim: true,
    lowercase: true, // Converts the email to lowercase
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address',
    ],
  },
  password: {
    type: String,
    // required: true,
    minlength: [8, 'Password must be at least 8 characters long'],
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Create the model
export const User = mongoose.model('User', userSchema);


