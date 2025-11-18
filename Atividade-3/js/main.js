import { validarFormulario } from "./validation.js";
import { Templates } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {

    validarFormulario();

    if (document.body.contains(document.querySelector("main")) && window.location.pathname.includes("index")) {

        const modalHTML = Templates.modal(
            "Bem-vindo!",
            "Obrigado por visitar a ONG Meu Aumigo ❤️"
        );

        document.body.insertAdjacentHTML("beforeend", modalHTML);

        const modal = document.querySelector(".modal");
        const fechar = document.getElementById("fecharModal");

        fechar.addEventListener("click", () => {
            modal.remove();
        });
    }

});
