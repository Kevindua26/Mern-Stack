const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
})

app.use(express.static(path.join(__dirname, '/public/css'))); // serving static files
app.use(express.static(path.join(__dirname, '/public/js'))); // serving static files

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render('home');
    console.log("Request received for home");
})

app.get("/ip/:username", (req, res) => {
    let  username  = req.params.username;
    // let followers = ["kevin", "john", "james"];

    const instaData = require('./data.json');
    const data = instaData[username];
    // console.log(data);

    if (data) {
        res.render('instagram.ejs', { data }); // yaha dekh
    } else {
        res.render('error.ejs'); // yaha dekh
    }
})