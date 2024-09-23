const frases = [
  { tag: "p", texto: "texto n1" },
  { tag: "div", texto: "texto n2" },
  { tag: "main", texto: "texto n3" },
  { tag: "footer", texto: "texto n4" },
];

const container = document.querySelector(".container"); // seleciona a classe container no html
const div = document.createElement("div"); // cria um elemento div com nome div no html

for (let i = 0; i < frases.length; i++) {
  // for para iteracao na array
  let { tag, texto } = frases[i]; // atribut via desestrutaraçao onde a tag e o texto viram variaveis
  let tagCriada = document.createElement(tag); // criacao do elemento tag
  tagCriada.innerHTML = texto; // a tag recebe a variavel texto
  div.appendChild(tagCriada); //appendChild serve para inserir um "filho" na tag parent que no caso é a div
}

container.appendChild(div);
