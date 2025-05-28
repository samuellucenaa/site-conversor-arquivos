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

function verificacaoInputs1(){
    const inputEmail1 = document.querySelector('.input-email1');
    const avisoEmail1 = document.querySelector('.aviso-email1');
    const inputSenha1 = document.querySelector('.input-senha1');
    const avisoSenha1 = document.querySelector('.aviso-senha1');

    if(!inputEmail1.value.trim()){
        inputEmail1.classList.add('border-red-600');
        avisoEmail1.classList.remove('hidden');
    } else{
        inputEmail1.classList.remove('border-red-600');
        avisoEmail1.classList.add('hidden');
    }

    if(!inputSenha1.value.trim()){
        inputSenha1.classList.add('border-red-600');
        avisoSenha1.classList.remove('hidden');
    } else{
        inputSenha1.classList.remove('border-red-600');
        avisoSenha1.classList.add('hidden');
    }
}

function verificacaoInputs2(){
    const inputEmail2 = document.querySelector('.input-email2');
    const avisoEmail2 = document.querySelector('.aviso-email2');
    const inputSenha2 = document.querySelector('.input-senha2');
    const avisoSenha2 = document.querySelector('.aviso-senha2');

    if(!inputEmail2.value.trim()){
        inputEmail2.classList.add('border-red-600');
        avisoEmail2.classList.remove('hidden');
    } else{
        inputEmail2.classList.remove('border-red-600');
        avisoEmail2.classList.add('hidden');
    }

    if(!inputSenha2.value.trim()){
        inputSenha2.classList.add('border-red-600');
        avisoSenha2.classList.remove('hidden');
    } else{
        inputSenha2.classList.remove('border-red-600');
        avisoSenha2.classList.add('hidden');
    }
}

function verificacaoRecSenha(){
    const inputEmailRec = document.querySelector('.input-email-rec');
    const avisoEmailRec = document.querySelector('.aviso-email-rec')

    if(!inputEmailRec.value.trim()){
        inputEmailRec.classList.add('border-red-600');
        avisoEmailRec.classList.remove('hidden');
    } else{
        inputEmailRec.classList.remove('border-red-600');
        avisoEmailRec.classList.add('hidden');
    }
}