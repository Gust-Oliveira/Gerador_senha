const carac = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*()/*-+?|";
let saidaSenha = document.getElementById("saidaSenha");
let verificarCopia = false;

function randomNumber(valor){
    return Math.floor(Math.random()*valor);
}

function gerarSenha(){
    let rangeLen = document.getElementById("range").value;
    let rangValor = document.getElementById("rangValor").innerText = rangeLen;
    let senha = "";

    for(let i = 0; i < rangeLen; i++){
        let rn = randomNumber(carac.length);
        senha += carac.charAt(rn);
    }

    verificarCopia = false;
    return saidaSenha.value = senha;
}

function copiar(){
    saidaSenha.select();
    document.execCommand('copy');

    verificarCopia = true;
}


