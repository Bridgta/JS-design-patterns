# The Mediator Pattern

---

### The mediator pattern is a behavioural pattern, an interface for communicating with colleagues (mediated objects).

![Mediator-Pattern](/img/jsM.jpg)

### An example

```js
const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    },
};

const Chatroom = function () {
    let users = {}; //list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                to.recieve(message, from);
            } else {
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        },
    };
};

const bridget = new User("Bridget");
const bridgette = new User("Bridgette");
const brigit = new User("Brigit");
const brigid = new User("Brigid");

const chatroom = new Chatroom();

chatroom.register(bridget);
chatroom.register(bridgette);
chatroom.register(brigit);
chatroom.register(brigid);

bridget.send("Hello, nice name", bridgette);
bridgette.send("What is up", brigid);
brigit.send(`yooooo`); //will send all chatroom
```
