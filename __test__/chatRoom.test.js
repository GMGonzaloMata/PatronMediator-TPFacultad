const ChatRoom = require('../src/chatRoom');
const User = require('../src/user');
const User2 = require('../src/user2');
const User1 = require('../src/user1');
const User3 = require('../src/user3');

    test('Crear chat room', () =>{
        const chatRoom = new ChatRoom();
        expect(typeof chatRoom).toBe('object');
    }
    )

    test('Crear user', () =>{
        const user = new User();
        expect(typeof user).toBe('object');
    }
    )

    test('Prueba de registrar usuarios en chat room', () =>{
        const chatRoom = new ChatRoom();
        const user = new User();
        chatRoom.addUser(user);
        expect(chatRoom.users[0]).toBe(user);
    })

    test('El usuario 1 envía un mensaje al ChatRoom y los usuarios 2 y 3 reciben el mensaje', () => {
        // Crea una instancia de la sala de chat
        const chatRoom = new ChatRoom();
      
        // Crea usuarios y añádelos a la sala de chat
        const user1 = new User1('User 1', chatRoom);
        const user2 = new User2('User 2', chatRoom);
        const user3 = new User3('User 3', chatRoom);
      
        user1.send('Hola a todos!');
      
        expect(user2.mensajes[0]).toBe('Hola a todos!');
        expect(user3.mensajes[0]).toBe('Hola a todos!');
      
      });

      test('El usuario 2 envía un mensaje al ChatRoom y los usuarios 1 y 3 reciben el mensaje', () => {
        // Crea una instancia de la sala de chat
        const chatRoom = new ChatRoom();
      
        // Crea usuarios y añádelos a la sala de chat
        const user1 = new User1('User 1', chatRoom);
        const user2 = new User2('User 2', chatRoom);
        const user3 = new User3('User 3', chatRoom);
      
        user2.send('Hola a todos!');
      
        expect(user1.mensajes[0]).toBe('Hola a todos!');
        expect(user3.mensajes[0]).toBe('Hola a todos!');
      
      });

      test('El usuario 3 envía un mensaje al ChatRoom y los usuarios 1 y 2 reciben el mensaje', () => {
        // Crea una instancia de la sala de chat
        const chatRoom = new ChatRoom();
      
        // Crea usuarios y añádelos a la sala de chat
        const user1 = new User1('User 1', chatRoom);
        const user2 = new User2('User 2', chatRoom);
        const user3 = new User3('User 3', chatRoom);
      
        user3.send('Hola a todos!');
      
        expect(user1.mensajes[0]).toBe('Hola a todos!');
        expect(user2.mensajes[0]).toBe('Hola a todos!');
      
      });

      test('Cada usuario envia un mensaje al chat room y cada usuario recibe el mensaje enviado por los 2 otros usuarios:', () => {
        // Crea una instancia de la sala de chat
        const chatRoom = new ChatRoom();
      
        // Crea usuarios y añádelos a la sala de chat
        const user1 = new User1('User 1', chatRoom);
        const user2 = new User2('User 2', chatRoom);
        const user3 = new User3('User 3', chatRoom);
      
        user1.send('Hola soy usuario1');
        user2.send('Hola soy usuario2');
        user3.send('Hola soy usuario3');
      
        expect(user1.mensajes[0]).toBe('Hola soy usuario2');
        expect(user1.mensajes[1]).toBe('Hola soy usuario3');

        expect(user2.mensajes[0]).toBe('Hola soy usuario1');
        expect(user2.mensajes[1]).toBe('Hola soy usuario3');

        expect(user3.mensajes[0]).toBe('Hola soy usuario1');
        expect(user3.mensajes[1]).toBe('Hola soy usuario2');
      
      });