// listUserPosts.js - usecase
class ListUserPosts {
    constructor(postRepository) {
      this.postRepository = postRepository;
    }
  
    execute(nickname) {
      return this.postRepository.getByAuthor(nickname);
    }
  }
  
  module.exports = ListUserPosts;
  