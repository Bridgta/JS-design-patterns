//The State Pattern - allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

const PageState = function () {
    let currentState = new homeState(this);

    this.init = function () {
        this.change(new homeState());
    };

    this.change = function (state) {
        currentState = state;
    };
};

// Home State
const homeState = function (page) {
    document.querySelector("#heading").textContent = null;
    document.querySelector("#content").innerHTML = `
        <div class="jumbotron">
        <h1 class="display-3">State Pattern</h1>
        <p class="lead">Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.</p>
        <hr class="my-4">
        <img src="img/js.jpg" alt="">
        <hr>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>
    `;
};

// About State
const aboutState = function (page) {
    document.querySelector("#heading").textContent = "About Us";
    document.querySelector("#content").innerHTML = `
        <p>This is the about page</p>
`;
};

// Contact State
const contactState = function (page) {
    document.querySelector("#heading").textContent = "Contact Us";
    document.querySelector("#content").innerHTML = `
    <form>
        <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
        </div>
        <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById("home"),
    about = document.getElementById("about"),
    contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
    page.change(new homeState());

    e.preventDefault();
});

about.addEventListener("click", (e) => {
    page.change(new aboutState());

    e.preventDefault();
});

contact.addEventListener("click", (e) => {
    page.change(new contactState());

    e.preventDefault();
});
