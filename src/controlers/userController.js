// userController.js - controller
class UserController {
    constructor(createUserUseCase) {
      this.createUserUseCase = createUserUseCase;
    }
  
    createUser(req, res) {
      const { name, email, password, nickname } = req.body;
      const user = this.createUserUseCase.execute(name, email, password, nickname);
      res.status(201).json({ user });
    }
  }
  
  module.exports = UserController;
  