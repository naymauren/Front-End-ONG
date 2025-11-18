export function validarFormulario() {

    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        const mensagem = document.createElement("div");
        mensagem.classList.add("alert");

        if (nome === "" || email === "" || telefone === "") {
            mensagem.textContent = "⚠ Preencha todos os campos corretamente.";
            form.appendChild(mensagem);
            return;
        }

        if (!email.includes("@")) {
            mensagem.textContent = "⚠ E-mail inválido!";
            form.appendChild(mensagem);
            return;
        }

        mensagem.classList.add("success");
        mensagem.textContent = "✔ Cadastro enviado com sucesso!";
        form.appendChild(mensagem);

        form.reset();
    });
}
