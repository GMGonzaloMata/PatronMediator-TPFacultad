const IChatMediator = require('./IChatMediator');

// Mediador concreto
class ChatRoom extends IChatMediator {
  constructor() {
    super();
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, user) {
    this.users.forEach(u => {
      if (u !== user) {
        u.receiveMessage(message);
      }
    });
  }
}

module.exports = ChatRoom;
