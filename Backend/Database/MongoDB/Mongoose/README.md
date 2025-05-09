# Mongoose

A library that **creates a connection** between MongoDB& Node.js JavaScript Runtime Environment.

It is an **ODM** (Object Data Modeling) Library.

Table of Contents -
- [Installation](#installation)
- [Schema](#schema)
- [Models](#models)
- [Insert](#insert)
- [Find](#find)
- [Update](#update)
- [Find and Update](#find-and-update)
- [Delete](#delete)
- [Find and Delete](#find-and-delete)

<br>

# Installation

Next install Mongoose from the command line using `npm`:

```bash
npm i mongoose
```

The first thing we need to do is include mongoose in our project and open a connection to the `test` database on our locally running instance of MongoDB.

```js
// getting-started.js
const mongoose = require('mongoose');

main()
  .then(() => { console.log('Connected to MongoDB')});
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

<br>

# Schema

Schema defines the shape of the documents within that collection.

Schema are the blueprints of the collection.

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
```

<br>

# Models

Models in mongoose is a class with which we construct documents.

```js
const User = mongoose.model("User", userSchema);
```

<br>

# Insert

### Inserting One

```js
const user1 = new User({
  name: "Kevin",
  email: "kevin@gmail.com",
  age: 19,
});
const user2 = new User({
  name: "Raunak",
  email: "raunak@gmail.com",
  age: 19,
})

user1.save(); //to save in db
user2.save(); //to save in db
```

### Insert Multiple

```js
User.insertMany([
  { name: "Suhani", email: "suhani@gmail.com", age: 20 },
  { name: "Swati", email: "swati@gmail.com", age: 19 },
  { name: "Aadhishree", email: "aadhi@gmail.com", age: 20 }
]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
```

#### NOTE
Mongoose uses **Operation Buffering**

<em>Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.</em>

### Find

```js
User.find({age: {$gt: 19}}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

```js
User.findOne({age: {$gt: 19}}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

```js
User.findById("681bca3ae18355c8283efa3f").then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

### Update

```js
User.updateOne({name: "Suhani"}, {age: 21}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

### Find and Update

```js
User.findOneAndUpdate({name: "Kevin"}, {name: "Kaivalaya"}, {new: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

```js
User.findByIdAndUpdate("681bca3ae18355c8283efa3f", {name: "Kaivalaya"}, {new: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

### Delete

```js
User.deleteOne({name: "Raunak"}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

```js
User.deleteMany({age: 19}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  }
```

### Find and Delete

```js
User.findOneAndDelete({name: "Kevin"}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```

```js
  User.findByIdAndDelete("681bca3ae18355c8283efa3f").then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
```