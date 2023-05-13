const express = require('express')
const app = express()

app.use("/",(req,res,next)=>{
    console.log('This is First middleware')
    next()
})

app.use("/addproduct",(req,res,next)=>{
    console.log('This is second middleware')
    res.send('<h1>This is Add product</h1>')
    
})

app.use("/mid",(req,res,next)=>{
    console.log('Third middleware')
    res.send('<h1>Welcome to express</h1>')
    
})


app.listen(8007, ()=>{
    console.log("8007 server has started successfully")
})