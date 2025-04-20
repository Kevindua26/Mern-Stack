// npm i mysql2

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kevin@181869',
});

// use this if you have single user 
/*
  let query = 'INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?);';
  let user = ['205', 'kevindua26', 'kevindua26@gmail,com', '2695'];
  try {
    connection.query(query, user, (err, results) => {
      if (err) throw err;
      console.log('Total result:', results);
    })
  } catch (err) {
    console.log(err);
  }

*/

// if you have multiple users
let query = 'INSERT INTO user (id, username, email, password) VALUES ?;';
let users = [
  ['080', 'raunakmadan', 'raunakmadan@gmail,com', '1233'],
  ['095', 'suhani', 'suhani@gmail,com', '5678'],
  ['096', 'swati', 'swati@gmail,com', '9012'],
  ['116', 'aadhishree', 'aadhishree@gmail,com', '3456'],
];

try {
  connection.query(query, [users], (err, result) => {
    if (err) throw err;
    console.log('Total result: ', result);
  });
} catch (err) {
  console.log(err);
}
// once you have the connection established, the connection will stay open until you close it, so we use connection.end() to close the connection
connection.end();