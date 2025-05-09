const mongoose = require('mongoose');

main()
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log('MongoDB connection error:', err))
  // .finally(() => mongoose.connection.close());

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Models
const User = mongoose.model("User", userSchema);

// Insert One
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

/*
  user1.save();
  user2
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
*/

// Insert Multiple
/*
  User.insertMany([
    { name: "Suhani", email: "suhani@gmail.com", age: 20 },
    { name: "Swati", email: "swati@gmail.com", age: 19 },
    { name: "Aadhishree", email: "aadhi@gmail.com", age: 20 }
  ]).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
*/

// Find 
/*
  User.find({age: {$gt: 19}}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })

  User.findOne({age: {$gt: 19}}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
*/

  User.findById("681bca3ae18355c8283efa3f").then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })


// Update
/*
  User.updateOne({name: "Suhani"}, {age: 21}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
*/

// Find and Update
/*
  User.findOneAndUpdate({name: "Kevin"}, {name: "Kaivalaya"}, {new: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })

  User.findByIdAndUpdate("681bca3ae18355c8283efa3f", {name: "Kaivalaya"}, {new: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
*/

// Delete 
/*
  User.deleteOne({name: "Raunak"}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })

  User.deleteMany({age: 19}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  }
*/

// Find and Delete
/*
  User.findOneAndDelete({name: "Kevin"}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })

  User.findByIdAndDelete("681bca3ae18355c8283efa3f").then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
*/
