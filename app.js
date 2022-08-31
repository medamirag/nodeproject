const {userRoutes}=require('./routes/userRoutes')
const express=require('express');
const app=express();
app.use('/user',userRoutes);

















app.listen(4000,()=>{
    console.log('server ok');
});