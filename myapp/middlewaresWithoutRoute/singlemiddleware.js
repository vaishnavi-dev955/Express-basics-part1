const express = require('express')
const app = express()

//middle ware syntax 

//use method is used to create a middle ware 
//every middle ware will have 3 arguments request, response, next
/*next() is used to make the next middleware function to execute. if any response is sent before next() and another response 
is sent in another middleware we get error once request is sent in first middleware. we cannot send further response to other middlewares 
if response is not sent in first middleware then we can send futrher response to next middleware*/
// if we dont keep next then the browser will be go on loading

// middlewares will be executing from top to bottom 


app.use((req,res,next)=>{
    console.log('first middleware')
    res.send('<h1>This is first Middleware</h1>')
    next()
})

app.listen(8005)
