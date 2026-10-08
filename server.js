// getting express so i can make a server
var express = require("express");
var app = express();

// the port my server will listen on
var PORT = 5000;

// this line lets express read json from req.body
// has to be above my routes or req.body is undefined
app.use(express.json());

// my fake database, just an empty array
var blogPosts = [];

// this gives each post its own id
var nextId = 1;

// GET all posts, sends the whole array
app.get("/posts", function (req, res) {
  res.json(blogPosts);
});

// GET one post by id (still the placeholder for now)
app.get("/posts/:id", function (req, res) {
  res.json({ message: "Route active" });
});

// POST a new post, takes data from req.body and pushes it in the array
app.post("/posts", function (req, res) {
  var newPost = {
    id: nextId,
    title: req.body.title,
    content: req.body.content,
  };

  blogPosts.push(newPost);
  nextId = nextId + 1;

  res.json(newPost);
});

// PUT (update) a post by id (still the placeholder for now)
app.put("/posts/:id", function (req, res) {
  res.json({ message: "Route active" });
});

// DELETE a post by id, filter keeps everything except the one with that id
app.delete("/posts/:id", function (req, res) {
  // req.params.id is a string so i turn it into a number
  var idToDelete = Number(req.params.id);

  blogPosts = blogPosts.filter(function (post) {
    return post.id !== idToDelete;
  });

  res.json({ message: "Post deleted", posts: blogPosts });
});

// start the server
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});