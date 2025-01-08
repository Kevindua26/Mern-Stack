const express = require('express'); // Importing express module 
const app = express(); // Creating an express object
const path = require('path'); // Views Directory
const port = 3000; // Setting constant port to 3000

// message to be displayed on the console
app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
})

app.set('view engine', 'ejs'); // Setting the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Views Directory
// this tells express to search for the views in the current directory/views 

app.get('/', (req, res) => {
  // res.send("This is my first implementation of EJS");
  // because it is not possible to write the whole code in the send dialog box, so we use the *render* function 

  // the express always search for the file in the views folder
  // the file is searched on the basis of file name only, so we don't need to write the extension of the file
  res.render('home'); // "home" means "home.ejs"

  console.log("Request received for home"); // message to be displayed on the console
})
