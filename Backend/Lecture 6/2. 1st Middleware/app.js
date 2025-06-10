const express = require('express');
const app = express();

app.listen(8080, ()=> {
  console.log('Listening on port 8080');
})

app.use((req, res) => {
  const intro = "Hi, I am a middleware"
  console.log(intro);
  res.send(intro);
})

app.get('/', (req, res) => {
  res.send('Hi, I am root');
})

app.get('/random', (req, res) => {
  res.send('Hi, I am random page');
})