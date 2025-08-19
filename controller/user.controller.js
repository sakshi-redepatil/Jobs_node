const db=require('../models');
const bcrypt=require('bcrypt')
const user=db.user;

module.exports={
    getAll:(req,res)=>{
        user.findAll({}).then((data)=>{
            res.send({error:false, data:data})
        }).catch((err)=>{
             res.send({error:true,message:err.message})
        })
    },
    createUser:(req,res)=>{
        let {Name,Age,Mobile,Email,Password}=req.body;
        let salt=bcrypt.genSaltSync(10);
        
        let hashPassword=bcrypt.hashSync(Password,salt);

        let newUser={
            Name:Name,
            Age:Age,
            Mobile:Mobile,
            Email:Email,
            Status:true,
            Password:hashPassword,
            profile:'default.jpg'
        }
        user.create(newUser).then((data)=>{
            res.send({error:false, data:data})
        }).catch((err)=>{
             res.send({error:true,message:err.message})
        })
    },
    updateUser:(req,res)=>{

    },
    deleteUser:(req,res)=>{

    },
    searchUser:(req,res)=>{

    }
}