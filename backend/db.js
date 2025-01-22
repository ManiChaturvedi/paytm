const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017');

const Userschema=new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User=mongoose.model('User',Userschema);

const accountschema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    balance:{
        type:Number,
        required:true
    }
})

const Account=mongoose.model('Account',accountschema);

module.exports = {
	User,Account
};