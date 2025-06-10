const express = require('express');
const app = express();

app.listen(8080, ()=> {
  console.log('Listening on port 8080');
})

// middleware 1
app.use((req, res, next) => {
  const intro = "Hi, I am a middleware 1"
  console.log(intro);
  return next();
  res.send(intro);
})

// middleware 2
app.use((req, res, next) => {
  const intro = "Hi, I am a middleware 2"
  console.log(intro);
  next();
})

app.get('/', (req, res) => {
  res.send('Hi, I am root');
})

app.get('/random', (req, res) => {
  res.send('Hi, I am random page');
})