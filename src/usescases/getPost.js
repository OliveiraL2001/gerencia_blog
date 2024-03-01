// getPost.js - usecase
class GetPost {
    constructor(postRepository) {
      this.postRepository = postRepository;
    }
  
    execute(postId) {
      return this.postRepository.getById(postId);
    }
  }
  
  module.exports = GetPost;
  