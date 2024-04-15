const User = require('./user');

// Colega concreto
class User3 extends User {
  constructor(name, mediator) {
    super(name, mediator);
    mediator.addUser(this);
  }
}

module.exports = User3;
