// index.js

const express = require('express');
const app = express();
const userController = require('./controllers/user-controller');
const postController = require('./controllers/post-controller');

// Middleware para o body-parser
app.use(express.json());

// Rotas
app.post('/users', userController.createUser);
app.post('/posts', postController.createPost);
app.get('/posts', postController.getAllPosts);
app.get('/posts/:userId', postController.getPostsByUser);
app.get('/posts/:postId', postController.getPostById);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
