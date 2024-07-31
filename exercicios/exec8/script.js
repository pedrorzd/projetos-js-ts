function meuEscopo(){

    const form = document.querySelector('#form');
    const resultado = form.querySelector('#resultado');
    const listaPessoas = [];

    function eventReciever(evento){

        evento.preventDefault();

        const nome = form.querySelector('#inome');
        const segundoNome = form.querySelector('#isobrenome');
        const peso = form.querySelector('#iweight');
        const altura = form.querySelector('#iheight');

        function geradorObjetos(nome , segundoNome , peso , altura ){
            return{
                nome:nome.value+' ',
                sobrenome:segundoNome.value+' ',
                peso:peso.value+'kg ',
                altura:altura.value+'m '
            };
        };

        pessoaGerada = geradorObjetos(nome, segundoNome, peso, altura);
        listaPessoas.push(pessoaGerada);
        
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML += `<p>${pessoaGerada.nome + pessoaGerada.sobrenome + pessoaGerada.peso + pessoaGerada.altura}</p>`;
        console.log(listaPessoas);
        
    };
    form.addEventListener('submit',eventReciever);
};
meuEscopo();