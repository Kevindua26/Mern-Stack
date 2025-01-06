const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

app.use((req, res) => {
  // console.log(req);
  console.log("Request received");

  // res.send({
  //   name: "Kevin",
  //   age: "19",
  //   college: "Bvp"
  // });

  let html = "<h1>Details<ul><li>Name: Kevin</li><li>Age: 19</li></ul></h1>";
  res.send(html);
})