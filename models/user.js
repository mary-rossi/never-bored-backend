const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String },
    googleId: { type: String },
    password: { type: String },
    profile: { type: String },
});




const User = mongoose.model('User', userSchema);




module.exports = User;