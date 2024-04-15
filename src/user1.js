const User = require('./user');

// Colega concreto
class User1 extends User {
  constructor(name, mediator) {
    super(name, mediator);
    mediator.addUser(this);
  }
}

module.exports = User1;