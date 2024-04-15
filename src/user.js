class User {
    constructor(name, mediator) {
      this.name = name;
      this.mediator = mediator;
      this.mensajes = [];
    }
  
    send(message) {
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message) {
      this.mensajes.push(message);
    }
  }
  
  module.exports = User;
  