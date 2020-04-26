# The Singleton Pattern

---

### Similar to module pattern, a singleton object is an immediate anon. function that can only return one instance of an object at a time (repated calls to the constructor will recall same refrence). Nohting from the outside can access.

### Global point of access vs. encapsulation

```js
const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object("Object instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
```
