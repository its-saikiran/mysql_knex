require('dotenv').config()

const express=require('express')
const app=express()
const port=process.env.PORT || 3000;
app.use(express.json());

app.use('/data', require('./routes/data.route')); 

app.get('/',(req,res)=>{
    res.send('<h1>server connected!</h1>')
});

app.listen(port,()=>{
    console.log(`server connecting to port num at ${port}`); 
});