# The Observer Pattern

---

### The observer pattern allows us to subscribe or unsubscribe from certain events or functionalities.

![observer-Pattern](/img/jsO.jpg)

### An example

### HTML

```js

<button class="sub-ms">Subscribe to Milliseconds</button>
  <button class="unsub-ms">Unsubscribe from Milliseconds</button>
  <br><br>
  <button class="sub-s">Subscribe to Seconds</button>
  <button class="unsub-s">Unsubscribe from Seconds</button>
  <br><br>
  <button class="fire">Fire</button>
```

```js
function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function () {
        this.observers.forEach(function (item) {
            item.call();
        });
    },
};

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
    click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
    click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
    click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
```

### With ES6 classes

```js
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
    click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
    click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
    click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
```
