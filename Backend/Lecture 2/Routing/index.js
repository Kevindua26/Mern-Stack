const express = require('express');
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on the prot ${port}`);
})

app.get('/apple', (req, res) => {
  res.send("You routed to the page apple.");
})

app.get("/samsung", (req, res) => {
  res.send("Your routed to the page samsung.");
})

app.get("*", (req, res) => {
  res.send("404 Page not found.");
})

app.post("/", (req, res) => {
  res.send("You sent a post request.");
})
