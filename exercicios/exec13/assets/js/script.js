const paragrafoConteiner = document.querySelector(".container");
const paragrafosUnitarios = paragrafoConteiner.querySelectorAll("p");

const bodyStyles = getComputedStyle(document.body);
const backgroundColor = bodyStyles.backgroundImage;

for (let p of paragrafosUnitarios) {
  p.style.backgroundImage = backgroundColor;
  p.style.color = "white";
};