const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();

const adminRoutes = require('../Routes/admin');
const shopRoutes = require('../Routes/shop');

app.use(express.static(path.join(__dirname, 'public')));

//app.use("/assets", express.static('assets'))
app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRoutes);
app.use(shopRoutes);

// sending response whenever we provide in appropriate path other than the paths provided for in routes
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(9000,()=>{
    console.log('Server started  Successfully at 9000')
});