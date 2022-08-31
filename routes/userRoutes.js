const express=require('express');
const userRoutes=express.Router();


const userList=userRoutes.get('/list',(req,res)=>{
    res.send({list:'list user'})
});
const getUser=userRoutes.get('/list/:id',(req,res)=>{
  const mm=  req.params['id']
    res.send({list:mm})
});
module.exports={userRoutes};