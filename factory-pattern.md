# The Factory Pattern

---

### The fctory method is creational pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate.

### An example

```js
function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        if (type === "simple") {
            member = new SimpleMembership(name);
        } else if (type === "standard") {
            member = new StandardMembership(name);
        } else if (type === "super") {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        };

        return member;
    };
}

const SimpleMembership = function (name) {
    this.name = name;
    this.cost = "$50";
};

const StandardMembership = function (name) {
    this.name = name;
    this.cost = "$150";
};

const SuperMembership = function (name) {
    this.name = name;
    this.cost = "$250";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Bridget Doe", "simple"));
members.push(factory.createMember("Sarah Jackson", "super"));
members.push(factory.createMember("Ben Williams", "simple"));
members.push(factory.createMember("Tom Anderson", "standard"));

members.forEach(function (member) {
    member.define();
});
```
