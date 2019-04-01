const express = require('express');

const grapqlHttp = require('express-graphql')

const schema = require('./shema/Schema')

const app = express();

app.use('/graphql',grapqlHttp({
    schema,
    graphiql : true
}))

app.listen(8080 , ()=>{
    console.log('djknfgdho')
})