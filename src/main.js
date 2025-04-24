document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM carregado"); // teste
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const abaAlvo = event.currentTarget.dataset.tabButton;
            console.log("Botão clicado:", abaAlvo); // teste

            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            if (!aba) {
                console.error("Aba não encontrada:", abaAlvo); // teste
                return;
            }

            escondeTodasAbas();
            removeAtivoDosBotoes();

            aba.classList.add('shows__list--is-active');
            event.currentTarget.classList.add('shows__tabs__button--is-active');
        });
    });
});

function escondeTodasAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');
    abas.forEach(function (aba) {
        aba.classList.remove('shows__list--is-active');
    });
}

function removeAtivoDosBotoes() {
    const botoes = document.querySelectorAll('[data-tab-button]');
    botoes.forEach(function (botao) {
        botao.classList.remove('shows__tabs__button--is-active');
    });
}
