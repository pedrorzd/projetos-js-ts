const form = document.querySelector("#form");
const numberX = form.querySelector("#inumberX");
const numberY = form.querySelector("#inumberY");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const resultado = form.querySelector(".resultado");
  const awnser = biggerNumber(numberX, numberY);

  resultado.innerHTML = awnser;
});

function biggerNumber(numberX, numberY) {
  if (numberX.value == numberY.value) {
    return "Os números são iguais";
  }
  if (numberX.value > numberY.value) {
    return numberX.value;
  }
  if (numberX.value < numberY.value) {
    return numberY.value;
  }
}
