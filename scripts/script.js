function abrirModal(){
    document.querySelector('.modal').classList.remove('hidden');
}

function fecharModal(){
    document.querySelector('.modal').classList.add('hidden');
}

function trocarImagem(id, novoSrc){
    document.getElementById(id).src = novoSrc;
}

function alternarSenha(){
    let input = document.getElementById('senha');
    let img = document.getElementById('alternarSenha');

    if(input.type === 'password'){
        input.type = 'text';
        img.src = 'images/eye-off-icon.svg';
        img.alt = 'Esconder senha';
    } else {
        input.type = 'password';
        img.src = 'images/eye-on-icon.svg';
        img.alt = 'Mostrar senha';
    }
}
