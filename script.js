const btnAdd = document.querySelectorAll('.add-produto');

btnAdd.forEach(botao => {
    botao.addEventListener('click', function() {
        if (botao.classList.contains('add-produto-inverso')) {
            botao.classList.remove('add-produto-inverso');
            botao.textContent = "+";
        } else {
            botao.classList.add('jello-horizontal');
            botao.classList.add('add-produto-inverso');
            botao.textContent = "-";
            setTimeout(() => {
                botao.classList.remove('jello-horizontal');
            }, 1000);
        }
    });
});