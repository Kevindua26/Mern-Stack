const express = require('express');;
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
})

//Path Parameters
app.get("/:username/:id", (req, res) => {
  let {username, id} = req.params;
  let htmlstr = `<h1>Details<ul><li>Username: ${username}</li><li>ID: ${id}</li></ul></h1>`;
  res.send(htmlstr);
})

//Query Strings
app.get("/search", (req, res) => {
  let {q} = req.query;
  if (!q) {
    res.send(`Nothing searched`);
  }
  res.send(`Search results for query: ${q}`);
})