const Controller = require('./controller');
const UsersModel = require('../models/userModel');
const connection = require('../config/connectionSql');
const sequelize = require('sequelize');

class userController extends Controller
{
constructor(req,res,next){
    super(req,res,next);
}
findAllUsers()
{
    UsersModel.findAll()
    .then((data) => {
     this.res.send(data);   
    }).catch((err) => {
        
    });
}

findAllUserSQL(){
    connection.query("select * from users").then(user=>{
        this.res.send(user);
    })
}

findUserById(){
    UsersModel.findById(1)
    .then(user=>{
        this.res.send(user);
    })
}

findUserByName(){
    UsersModel.findAll({where:{firstName:this.req.params.name}})
    .then(users=>{
        this.res.send(users);
    })
}

finsUserWithOp(){
    UsersModel.findAll({
        where:{
            firstName:
            {
                [sequelize.Op.like]:
                '%e%'
            }
        }
    })
    .then(users=>{
        this.res.send(users);
    })
}

findOrCreateUser(){
    UsersModel.findOrCreate({where:{
        firstName:"Luis"
    },defaults:{lastName:"Jurado"}})
    .then(user=>{
        this.res.send(user)
;    })
}

findAndCountUsers(){
    UsersModel.findAndCountAll({where:{
        firstName:"John"
    }})
    .then(users=>{
        this.res.send(users);
    })
}

findOffset(){
    UsersModel.findAll({offset:3})
    .then(users=>{
        this.res.send(users);
    })
}

findMax(){
    UsersModel.max('id')
    .then(result=>{
        this.res.json(result);
    })
    .catch(error=>{
        console.log(error);
        
    })
}


}


module.exports = userController;