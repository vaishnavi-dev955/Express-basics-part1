const express = require('express')

const app = express()

const port = 8009

const adminRoutes = require('./RouterExpress/index1')

app.use(adminRoutes)


// Router will work same as valid middleware function

app.listen(port,()=>{
    console.log(`Server started successfully at port ${port}`)
})