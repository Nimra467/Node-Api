const express = require("express");
const app = express();
const posts = require("./data/posts");
const comments = require("./data/comments");
const users = require("./data/users");
const todos = require("./data/todos");
const albums = require("./data/albums"); 
const photos = require("./data/photos"); 

app.use(express.json()); 


app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to JSONPlaceholder Clone</h1>
    <ul>
      <li><a href="/posts">/posts</a> - View all posts</li>
      <li><a href="/comments">/comments</a> - View all comments</li>
      <li><a href="/albums">/albums</a> - View all albums</li>
      <li><a href="/photos">/photos</a> - View all photos</li>
      <li><a href="/todos">/todos</a> - View all todos</li>
      <li><a href="/users">/users</a> - View all users</li>
    </ul>
  `);
});


app.get("/albums", (req, res) => {
  res.json(albums);
});

app.post("/albums", (req, res) => {
  const newAlbum = { id: albums.length + 1, ...req.body };
  albums.push(newAlbum);
  res.status(201).json(newAlbum);
});

app.put("/albums/:id", (req, res) => {
  const { id } = req.params;
  const albumIndex = albums.findIndex((album) => album.id === parseInt(id));

  if (albumIndex !== -1) {
    albums[albumIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(albums[albumIndex]);
  } else {
    res.status(404).json({ message: "Album not found" });
  }
});

app.delete("/albums/:id", (req, res) => {
  const { id } = req.params;
  const albumIndex = albums.findIndex((album) => album.id === parseInt(id));

  if (albumIndex !== -1) {
    albums.splice(albumIndex, 1);  
    res.status(200).json({ message: "Album deleted successfully" });
  } else {
    res.status(404).json({ message: "Album not found" });
  }
});


app.get("/photos", (req, res) => {
  res.json(photos);
});

app.post("/photos", (req, res) => {
  const newPhoto = { id: photos.length + 1, ...req.body };
  photos.push(newPhoto);
  res.status(201).json(newPhoto);
});

app.put("/photos/:id", (req, res) => {
  const { id } = req.params;
  const photoIndex = photos.findIndex((photo) => photo.id === parseInt(id));

  if (photoIndex !== -1) {
    photos[photoIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(photos[photoIndex]);
  } else {
    res.status(404).json({ message: "Photo not found" });
  }
});

app.delete("/photos/:id", (req, res) => {
  const { id } = req.params;
  const photoIndex = photos.findIndex((photo) => photo.id === parseInt(id));

  if (photoIndex !== -1) {
    photos.splice(photoIndex, 1);  
    res.status(200).json({ message: "Photo deleted successfully" });
  } else {
    res.status(404).json({ message: "Photo not found" });
  }
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts[postIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);  
    res.status(200).json({ message: "Post deleted successfully" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});


app.get("/comments", (req, res) => {
  res.json(comments);
});

app.post("/comments", (req, res) => {
  const newComment = { id: comments.length + 1, ...req.body };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.put("/comments/:id", (req, res) => {
  const { id } = req.params;
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));

  if (commentIndex !== -1) {
    comments[commentIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(comments[commentIndex]);
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));

  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);  
    res.status(200).json({ message: "Comment deleted successfully" });
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});


app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex !== -1) {
    users[userIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex !== -1) {
    users.splice(userIndex, 1);  
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex !== -1) {
    todos[todoIndex] = { id: parseInt(id), ...req.body };  
    res.status(200).json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);  
    res.status(200).json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
