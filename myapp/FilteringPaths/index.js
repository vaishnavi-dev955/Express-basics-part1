const express = require('express')
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.urlencoded({extended: false}));

const port = 9001
const adminRoutes = require('../routes1/admin')
const shopRoutes = require('../routes1/shop')

app.use('/admin',adminRoutes)
app.use(shopRoutes)


app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});



app.listen(port,()=>{
    console.log(`Server has started successfully at port ${port}`)
})