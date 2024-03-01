// listAllPosts.js - usecase
class ListAllPosts {
    constructor(postRepository) {
      this.postRepository = postRepository;
    }
  
    execute() {
      return this.postRepository.getAll();
    }
  }
  
  module.exports = ListAllPosts;
  