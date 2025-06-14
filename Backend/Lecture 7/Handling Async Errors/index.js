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

app.get('/chats', async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render('index.ejs', { chats });
})

app.get('/chats/new', (req, res) => {
  throw new ExpressError(404, "Page not found."); // testing on non asynchronous route
  res.render('new.ejs');
})

app.post('/chats', async (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });

  newChat.save()
    .then((res) => {
      console.log("Chat saved");
    })
    .catch((err) => {
      console.log(err);
    })

  res.redirect('/chats');
})

// Error Handling on this route
app.get('/chats/:id', async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if(!chat) {
    next(new ExpressError(404, "Chat not found."));
  }
  res.render('edit.ejs', { chat });
})

app.get('/chats/:id/edit', async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render('edit.ejs', { chat });
})

app.put('/chat/:id', async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id, 
    { msg: newMsg }, 
    { runValidators: true, new: true }
  );

  console.log("Updated Chat: " + updatedChat);
  res.redirect('/chats');
})

app.delete('/chat/:id/delete', async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);

  res.redirect('/chats');
})

// Default Error Handling Middleware
app.use((err, req, res, next) => {
  let { status=500, message="Error Occured" } = err;
  res.status(status).send(message);
})