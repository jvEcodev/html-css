const btn = document.getElementById('envio');
    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const celular = document.getElementById('celular');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    btn.addEventListener('click', function(event){
        if (nome.value == ""){
            event.preventDefault();
            alert('Preencha o campo nome');  
        }
        else if (cpf.value == ""){
            event.preventDefault();
            alert('Preencha o campo cpf');
        }
        else if (celular.value == ""){
            event.preventDefault();
            alert('Preencha o campo celular');
        }
        else if (email.value == ""|| email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1  ){
            event.preventDefault();
            alert('Preencha o campo email de forma correta');
        }
        else if (senha.value == ""){
            event.preventDefault();
            alert('Preencha o campo senha');
        }
        else{
            event.preventDefault();
            alert('Cadastro realizado com sucesso');
        }
    });
