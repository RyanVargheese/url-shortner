import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

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
    select: false
  },
  avatar: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp",
  },

});

userSchema.methods.comparePassword = async function (password) {
  console.log(this.password,"\n",password);
  return await bcrypt.compare(password,this.password);
}

userSchema.pre("save",async function (next){
  if(!this.isModified("password")) return next();
  this.password=await bcrypt.hash(this.password,10);
  next();
});

userSchema.set('toJSON',{
  transform: function(doc,ret){
    delete ret.password;
    delete ret.__v;
    return ret;
  }
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