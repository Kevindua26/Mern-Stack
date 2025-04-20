// npm i mysql2

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kevin@181869',
});

let query = 'SHOW TABLES';

try {
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log('Total result:', results);
    console.log('Result Length: ', results.length);
    console.log('Result 1: ', results[0]);
    console.log('Result 2: ', results[1]);
  })
} catch (err) {
  console.log(err);
}

// once you have the connection established, the connection will stay open until you close it, so we use connection.end() to close the connection
connection.end();