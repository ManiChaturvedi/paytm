const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017');

const Userschema=mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User=mongoose.model('User',Userschema);

module.exports = {
	User
};