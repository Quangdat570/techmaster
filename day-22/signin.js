import { login } from "./api.js";

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    try {
        const { data, headers } = await login({ username, password });

        const [_, token] = headers.authorization.split(" ");

        localStorage.setItem("token", token);

        alert("Login successfully, redirect to homepage!");

        window.location.href = "index.html";
    } catch ({ response }) {
        alert(response.data.error);
    }
});

const btn = document.querySelector(".btn-change");
