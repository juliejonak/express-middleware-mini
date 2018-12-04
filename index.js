const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const customMW = require('./custom_middleware.js');
console.log('custom MW', customMW);

const server = express();
const PORT = 4000;

//middleware
server.use(
    express.json(),
    helmet(),
    logger('tiny'),
    customMW.gatekeeper
)


//route handlers
server.get('/', (req, res) => {
    res.json({
        message: "It works! It's super alive"
    })
});


//listening
server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})