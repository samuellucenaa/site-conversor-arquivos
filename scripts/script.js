function abrirCriar(){
    document.querySelector('.modal-criar').classList.remove('hidden');
    document.querySelector('.modal-entrar').classList.add('hidden');
    document.body.classList.add('overflow-hidden');
}

function abrirEntrar(){
    document.querySelector('.modal-entrar').classList.remove('hidden');
    document.querySelector('.modal-criar').classList.add('hidden');
    document.querySelector('.modal-senha').classList.add('hidden')
    document.body.classList.add('overflow-hidden');
}

function abrirSenha(){
    document.querySelector('.modal-senha').classList.remove('hidden');
    document.querySelector('.modal-entrar').classList.add('hidden')
    document.body.classList.add('overflow-hidden');
}

function fecharModal(){
    document.querySelector('.modal-criar').classList.add('hidden');
    document.querySelector('.modal-entrar').classList.add('hidden');
    document.querySelector('.modal-senha').classList.add('hidden');
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
    } else {
        input.type = 'password';
        img.src = 'images/eye-on-icon.svg';
    }
}

function verificacaoInput(){
    const inputEmail = document.querySelector('.input-email');
    const avisoEmail = document.querySelector('.aviso-email');
    const inputSenha = document.querySelector('.input-senha');
    const avisoSenha = document.querySelector('.aviso-senha');

    if(!inputEmail.value.trim()){
        inputEmail.classList.add('border-red-600');
        avisoEmail.classList.remove('hidden');
    } else{
        inputEmail.classList.remove('border-red-600');
        avisoEmail.classList.add('hidden');
    }

    if(!inputSenha.value.trim()){
        inputSenha.classList.add('border-red-600');
        avisoSenha.classList.remove('hidden');
    } else{
        inputSenha.classList.remove('border-red-600');
        avisoSenha.classList.add('hidden');
    }
}