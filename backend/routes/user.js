const express = require('express');
const zod=require('zod');
const jwt=require('jsonwebtoken');
const { User } = require('../db');
const { JWT_SECRET } = require('../config');

const userrouter = express.Router();

const signupbody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})
userrouter.post("/signup",async(req,res)=>{
    const {success}=signupbody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existinguser=await User.findOne({
        username:req.body.username
    })

    if (existinguser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user=await User.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })

    const userid=user._id;

    const token=jwt.sign({
        userid
    },JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })


})

userrouter.post("/signin",async(req,res)=>{
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(user){
        const token=jwt.sign({
            userid:user._id
        },JWT_SECRET)

        res.json({
            token:token
        })

        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = userrouter;