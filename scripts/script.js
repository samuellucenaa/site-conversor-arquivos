function abrirModal(){
    document.querySelector('.modal-criar').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    document.querySelector('.modal-entrar').classList.add('hidden');
}

function abrirModal2(){
    document.querySelector('.modal-entrar').classList.remove('hidden');
    document.querySelector('.modal-criar').classList.add('hidden');
    document.body.classList.add('overflow-hidden');
}

function fecharModal(){
    document.querySelector('.modal-criar').classList.add('hidden');
    document.querySelector('.modal-entrar').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
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
