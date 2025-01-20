const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://maniraj96950:174956Mani@cluster0.egwgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

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