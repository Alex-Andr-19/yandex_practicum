import Handlebars from "handlebars";
import template from "./template.js";

function render() {
    const delegate = Handlebars.compile(template);

    const html = delegate({
        someStaff: "HuiPizda",
    });

    const app = document.querySelector("#app");
    app.innerHtml = html;
}

window.addEventListener("DOMContentLoaded", () => {
    render();
});
