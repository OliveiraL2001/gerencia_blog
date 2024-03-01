// post.js - domain
class Post {
    constructor(title, author, content) {
      this.title = title;
      this.author = author;
      this.content = content;
      this.postDate = new Date();
    }
  }
  
  module.exports = Post;
  