const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main()
  .then(() => {
  console.log('Connected to MongoDB~')
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(8080, () => {
  console.log('Server is listening on http://localhost:8080/');
});

app.get('/', (req, res) => {
  res.send('Root is working');
});

// By using this asyncWrap function, we don't need the try-catch block in every single async function
// the catch in the asyncWrap will handles all the errors in the async functions
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(err => next(err));
  }
};

// calling the async function as the parameter of the asyncWrap function
app.get('/chats', asyncWrap(async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render('index.ejs', { chats });
}))

// calling the async function as the parameter of the asyncWrap function
app.get('/chats/new', (req, res) => {
  throw new ExpressError(404, "Page not found."); 
  res.render('new.ejs');
})

// calling the async function as the parameter of the asyncWrap function
app.post('/chats', asyncWrap(async (req, res) => {
    let { from, to, msg } = req.body;

    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });

    newChat.save();
    res.redirect('/chats');
}))

// calling the async function as the parameter of the asyncWrap function
app.get('/chats/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
      next(new ExpressError(404, "Chat not found."));
    }
    res.render('edit.ejs', { chat });
}))

// calling the async function as the parameter of the asyncWrap function
app.get('/chats/:id/edit', asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs', { chat });
}))

// calling the async function as the parameter of the asyncWrap function
app.put('/chat/:id', asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id, 
      { msg: newMsg }, 
      { runValidators: true, new: true }
    );

    console.log("Updated Chat: " + updatedChat);
    res.redirect('/chats');
}))

// calling the async function as the parameter of the asyncWrap function
app.delete('/chat/:id/delete', asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);

    res.redirect('/chats');
}))

app.use((err, req, res, next) => {
  let { status=500, message="Error Occured" } = err;
  res.status(status).send(message);
})