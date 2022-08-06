import { login } from "./appi.js";

const form = document.querySelector(".form-login");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    try {
        const { data, headers } = await login({ username, password });

        const [_, token] = headers.authorization.split(" ");

        localStorage.setItem("token", token);

        alert("Đăng nhập thành công!");

        window.location.href = "index.html";
    } catch ({ response }) {
        alert(response.data.error);
    }
});



