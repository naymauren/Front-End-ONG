export const Templates = {
    alert: (mensagem) => `
        <div class="alert">${mensagem}</div>
    `,

    success: (mensagem) => `
        <div class="alert success">${mensagem}</div>
    `,

    modal: (titulo, texto) => `
        <div class="modal">
            <div class="modal-content">
                <h3>${titulo}</h3>
                <p>${texto}</p>
                <button id="fecharModal">Fechar</button>
            </div>
        </div>
    `
};
