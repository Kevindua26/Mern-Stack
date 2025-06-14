const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
  .then(() => {
    console.log('Connected to MongoDB~');
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from:"Kevin",
    to:"Aadi",
    msg:"Hello!",
    created_at: new Date(),
  },
  {
    from:"Raunak",
    to:"Aadi",
    msg:"Hello!",
    created_at: new Date(),
  },
  {
    from:"Suhani",
    to:"Aadi",
    msg:"Hello!",
    created_at: new Date(),
  },
  {
    from:"Swati",
    to:"Aadi",
    msg:"Hello!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats).then((res) => {
  console.log(res);
})
