/*Router is used to  maintain the middlewares in another file . such that there is no confusion between multiple middlewares
with same path which makes developers work easy*/
/*In order to create Route for different middlewares by uinsg Http methods and app.use method and export  them we use Router. 
we install Router and use them for multiple middlewares*/

/*Router is mainly used in order to write route middleware functions in another file and export them to another file whenever there
are mutiple middlewares with same path*/
/* Router works same as middleware fucntion like app.use method*/
/*Router is like a mini express app tied to main express app*/

const express = require('express')
const router = express.Router()

router.get('/books',(req,res,next)=>{
    res.send('<h1>Yeah I got the books</h1>')
})



router.use('/About',(req,res,next)=>{
    res.send('<h1>This is mini express app</h1>')
})

module.exports = router





