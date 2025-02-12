const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render('home');
    console.log("Request received for home");
})

app.get("/ip/:username", (req, res) => {
    let  username  = req.params.username;
    let followers = ["kevin", "john", "james"];

    res.render('instagram.ejs', {username, followers}); // yaha dekh
})