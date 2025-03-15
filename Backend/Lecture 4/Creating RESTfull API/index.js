const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

let posts = [
    {
        id: uuid(),
        username: 'kevin',
        content: 'Shahdara'
    },
    {
        id: uuid(),
        username: 'suhani',
        content: 'Nangloi'
    },
    {
        id: uuid(),
        username: 'swati',
        content: 'Ghaziabad'
    },
    {
        id: uuid(),
        username: 'raunak',
        content: 'Rohini'
    },
    {
        id: uuid(),
        username: 'aadhishree',
        content: 'Dwarka'
    }
]

// Index Route
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
})

// New Route
app.get("/posts/new", (req, res) => {
    res.render("newPost.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuid();
    posts.push({ id, username, content });
    res.redirect("/posts");
})

// Show Route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("showPost.ejs", { post });
});

// update route
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent= req.body.content;
    post.content = newContent;
    
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(id);
    res.render("editPost.ejs", { post });
})

// Delete Route
app.delete("/posts/:id", (req, res) => {
    const postId = req.params.id; // Ensure req.params.id is defined
    console.log("Deleting post with ID:", postId); // Debugging log

    // Check if postId is undefined
    if (!postId) {
        return res.status(400).send("Invalid post ID");
    }

    // Simulated database (if you're using an array)
    posts = posts.filter(post => post.id !== postId);

    console.log(`Post ${postId} deleted!`); // Confirm deletion
    res.redirect("/posts"); // Redirect after deletion
});
