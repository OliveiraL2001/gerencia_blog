// createNewUser.js - usecase
const User = require('../domain/user');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(name, email, password, nickname) {
    const user = new User(name, email, password, nickname);
    this.userRepository.save(user);
    return user;
  }
}

module.exports = CreateUser;
