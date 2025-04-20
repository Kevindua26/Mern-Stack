// npm i mysql2

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const { v4: uuid } = require('uuid');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kevin@181869',
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let query = 'INSERT INTO user (id, username, email, password) VALUES ?;';

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(createRandomUser());
}

try {
  connection.query(query, [data], (err, results) => {
    if (err) throw err;
    console.log(results);
  })
} catch (err) {
  console.log(err);
}

// once you have the connection established, the connection will stay open until you close it, so we use connection.end() to close the connection
connection.end(); 