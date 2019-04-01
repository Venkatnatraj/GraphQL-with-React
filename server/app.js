const express = require('express');

const grapqlHttp = require('express-graphql')

const app = express();

app.use('/graphql',grapqlHttp({
    
}))

app.listen(8080 , ()=>{
    console.log('djknfgdho')
})