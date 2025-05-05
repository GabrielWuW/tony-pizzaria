const btnAdd = document.querySelectorAll('.add-produto');


btnAdd.forEach(botao => {
    botao.addEventListener('click', function() {
        botao.classList.add('jello-horizontal');
        botao.classList.add('add-produto-inverso');
        botao.textContent = "-";
        setTimeout(() => {
            botao.classList.remove('jello-horizontal');
          }, 1000);
    })
})