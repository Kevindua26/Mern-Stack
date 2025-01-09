const express = require('express');  
const app = express(); 
const path = require('path'); 
const port = 3000; 

app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
})

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  
  // generally we pass the data from the database, here in the "app.get"

  res.render('home'); 
  console.log("Request received for home");
})

app.get("/rolldice", (req, res) => {
  let randNo = Math.floor(Math.random() * 6) + 1; //Suppose this is the data from the database
  res.render('rolldice.ejs', { randNo }); //Passing the data to the EJS file
})