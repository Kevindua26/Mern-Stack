const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kevin@181869',
});

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
}

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})

// home route
app.get('/', (req, res) => {
    let q = `select count(*) from user`;
    try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]['count(*)'];
      res.render("home.ejs", { count });
    })
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.")
  }
})

// show route 
app.get('/user', (req, res) => {
    let q = `select * from user`;
    try {
      connection.query(q, (err,result) => {
        if (err) throw err;

        // console.log(result);
        let users = result;
        res.render("showusers.ejs", { users });
      })
    } catch (err) {
      console.log(err);
      console.log("Error in Database, please try again later.");
    }
})

// edit route
app.get('/user/:id/edit', (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit", { user });
    });
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.");
  }
})

// update route
app.patch('/user/:id', (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password) {
        res.send("Incorrect Password, please try again.");
      } else {
        let q2 = `update user set username = '${newUsername}' where id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect('/user');
        })
      }
    });
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.");
  }
})

app.get('/user/:id/delete', (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete", { user });
    });
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.");
  }
})

// delete route
app.delete('/user/delete/:id', (req, res) => {
  let { id } = req.params;
  let { email, password } = req.body;
  let q = `select * from user where id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (email != user.email || password != user.password) {
        res.send("Incorrect Email or Password, please try again.");
      } else {
        let q2 = `delete from user where id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect('/user');
        })
      }
    })
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.");
  }
})

app.get('/user/add', (req, res) => {
  res.render("add.ejs");
})

app.post('/user/add', (req, res) => {
  let { username, email, password } = req.body;
  let q = `insert into user (id, username, email, password) values ('${faker.string.uuid()}', '${username}', '${email}', '${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect('/user');
    })
  } catch (err) {
    console.log(err);
    console.log("Error in Database, please try again later.");
  }
})