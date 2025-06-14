const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

app.listen(8080, ()=> {
  console.log('Listening on port 8080');
})

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if(token === "giveaccess") next();

  throw new ExpressError(401, "Access Denied");
}

// Middleware -> logger function 
app.use((req, res, next) => {
  req.Time = new Date(Date.now()).toString();
  console.log([req.method, req.hostname, req.path, req.Time]);   // For req references, check this -> https://expressjs.com/en/5x/api.html#req 
  return next();
})

app.get('/', (req, res) => {
  res.send('Hi, I am root');
})

app.get('/api', checkToken, (req, res) => {
  res.send("Data");
})

app.get('/random', (req, res) => {
  res.send('Hi, I am random page');
})

app.get('/err', (req, res) => {
  abcd = abcd;
})

app.get('/admin', (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden.");
})

app.use((err, req, res, next) => {
  let { status=500, message="Error Occured" } = err;
  res.status(status).send(message);

  // console.log("-----ERROR-----");
  // res.send(err);
  // next(err);
})

// app.use((req, res) => {
//   res.status(404).send('Page not found.');
// })
