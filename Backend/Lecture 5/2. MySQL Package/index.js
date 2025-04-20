// npm i mysql2

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kevin@181869',
});

try {
  connection.query("SHOW TABLES", (err, results) => {
    if (err) throw err;
    console.log(results);
  })
} catch (err) {
  console.log(err);
}

// once you have the connection established, the connection will stay open until you close it, so we use connection.end() to close the connection
connection.end(); 

let createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

// console.log(createRandomUser());