const mongoose = require('mongoose');

main().then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('MongoDB connection error:', err))
  // .finally(() => mongoose.connection.close());

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    min: [10, "Price is too low to sell."]
  },
  discount: {
    type: Number,
    default: 0
  },
  catagory: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  genre: [String]
})

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Avenger",
  author: "Marvel",
  price: 1100,
  catagory: "fiction",
  genre: ["Thrill", "Action", "Superhero"]
})

// book1.save().then((res) => console.log(res)).catch((err) => console.log(err));

Book.findByIdAndUpdate('681e44867464c45b1859ce11', { price: 9 }, { runValidators: true}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err.errors.price.properties.message);
})