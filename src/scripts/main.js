document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM carregado"); // teste
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-questions]');
    const heroSection = document.querySelector('.hero');

    const alturaHero = heroSection.clientHeight;
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibeElementoDoHeader();
        }
    })

    function ocultaElementosDoHeader(){
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    function exibeElementoDoHeader(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    //seção de atrações
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

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
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


    


function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe);
}