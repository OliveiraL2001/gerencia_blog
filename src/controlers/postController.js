// postController.js - controller
class PostController {
    constructor(createPostUseCase, listAllPostsUseCase, listUserPostsUseCase, getPostUseCase) {
      this.createPostUseCase = createPostUseCase;
      this.listAllPostsUseCase = listAllPostsUseCase;
      this.listUserPostsUseCase = listUserPostsUseCase;
      this.getPostUseCase = getPostUseCase;
    }
  
    createPost(req, res) {
      const { title, author, content } = req.body;
      const post = this.createPostUseCase.execute(title, author, content);
      res.status(201).json({ post });
    }
  
    listAllPosts(req, res) {
      const posts = this.listAllPostsUseCase.execute();
      res.status(200).json({ posts });
    }
  
    listUserPosts(req, res) {
      const { nickname } = req.params;
      const posts = this.listUserPostsUseCase.execute(nickname);
      res.status(200).json({ posts });
    }
  
    getPost(req, res) {
      const { postId } = req.params;
      const post = this.getPostUseCase.execute(postId);
      res.status(200).json({ post });
    }
  }
  
  module.exports = PostController;
  