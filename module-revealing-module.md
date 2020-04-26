# Module and Revealing Module Pattern

---

### Module pattern in ES5 allows us break up parts of our code into self contained modules with private properties, methods, variables, and functions.

## Blue print for the module pattern

```js
(function() {
     Declare private variables and functions

return {
    Declare public variables and functions
  }
})();
```

## An example

```js
const changeDisplay = (function () {
    let text = "Hello World";

    const changeText = function () {
        const element = document.querySelector("h1");
        element.textContent = text;
    };

    return {
        callChangeText: function () {
            changeText();
        },
    };
})();

changeDisplay.callChangeText();
```

### The revealing module pattern is similar, however you're returning an object literal that directly reveals methods that are inside of the module by mapping to priavte functions.

## An example

```js
const ItemDisplay = (function () {
    let data = [];

    function add(item) {
        data.push(item);
    }

    function get(id) {
        return data.find((item) => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get,
    };
})();

ItemDisplay.add({ id: 1, name: "Sara" });
ItemDisplay.add({ id: 2, name: "Lisa" });
console.log(ItemDisplay.get(2));
```
