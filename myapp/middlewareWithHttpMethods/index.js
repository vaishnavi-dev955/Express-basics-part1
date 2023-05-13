const express = require('express')
const app = express()

app.get('/product',(req,res)=>{
    res.send('<h1>Got all the products</h1>')
})

app.listen(8008,()=>{
    console.log('server started successfully')
})

//Note we can use any Http method like get, post, put, delete in place of get method