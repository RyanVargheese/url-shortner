import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp",
  },
  
});

function getGravatarUrl(email) {
  const hash = require('crypto')
    .createHash('md5')
    .update(email.trim().toLowerCase())
    .digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

const User = mongoose.model("User", userSchema); // Assumes userSchema is defined

export default User;