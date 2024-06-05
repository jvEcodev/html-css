const form = document.getElementsByClassName('conteudo');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function namevalidate(){
    if (campos[0].value.lenght < 3 ){
        console.log('Nome deve ter mais de 3 caracteres');
    }
    else{
        console.log('Nome válido');
    }

}
