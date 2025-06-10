const express = require('express');
const app = express();

app.listen(8080, ()=> {
  console.log('Listening on port 8080');
})

// Middleware -> logger function 
app.use((req, res, next) => {
  req.Time = new Date(Date.now()).toString();
  console.log([req.method, req.hostname, req.path, req.Time]);   // For req references, check this -> https://expressjs.com/en/5x/api.html#req 
  return next();
})

// NOTE: Don't write the Middlewares after defining the ROUTES or the REST API's

app.get('/', (req, res) => {
  res.send('Hi, I am root');
})

app.get('/random', (req, res) => {
  res.send('Hi, I am random page');
})