const form = document.querySelector("#form");
const largura = form.querySelector("#inumberX");
const altura = form.querySelector("#inumberY");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const resultado = form.querySelector(".resultado");
  const awnser = ePaisagem(largura, altura);

  resultado.innerHTML = awnser;
});

function ePaisagem(largura, altura) {
  if (altura.value > largura.value) {
    return `A imagem está em modo retrato`;
  }
  if (altura.value < largura.value) {
    return `A imagem está em modo paisagem`;
  }
}
