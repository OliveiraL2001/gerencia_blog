// createNewPost.js - usecase
const Post = require('../domain/post');

class CreatePost {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  execute(title, author, content) {
    const post = new Post(title, author, content);
    this.postRepository.save(post);
    return post;
  }
}

module.exports = CreatePost;
