import "./app.scss";

export class App {
    test() {
        console.log("fn test 2");
        let el = document.createElement("div");
        el.classList.add("main-nav");
        document.body.appendChild(el);
    }
}

let x = new App();
x.test();
