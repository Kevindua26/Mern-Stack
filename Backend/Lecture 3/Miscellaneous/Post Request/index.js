const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded()); // this is the middleware to parse the body of the request
app.use(express.json()); // this is the middleware to parse the body of the request

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
})

app.get('/register', (req, res) => {
    let { name1, password1 } = req.query;
    res.send(`Standard GET request for user: ${name1}`);
})

app.post('/register', (req, res) => {
    let { name, password } = req.body; // req.body is not defined, because we haven't used any middleware to parse the body of the request
    // also, the express don't know how to parse the body of the request
    // so, we need to use the middleware to parse the body of the request

    res.send(`Standard POST request for user: ${name}`);
})
