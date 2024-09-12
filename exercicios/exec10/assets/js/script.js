function getDate(date) {
  const weekDay = setWeekDay(date.getDay());
  const day = date.getDate();
  const month = setMonthName(date.getMonth());
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${weekDay} ${day} ${month} ${year} <br> ${hour}:${minute}`;
}
function setWeekDay(weekDay) {
  switch (weekDay) {
    case 0:
      return `Domingo,`;
    case 1:
      return `Segunda-feira,`;
    case 2:
      return `Terça-feira,`;
    case 3:
      return `Quarta-feira,`;
    case 4:
      return `Quinta-feira,`;
    case 5:
      return `Sexta-feira,`;
    case 6:
      return `Sábado, `;
  }
}
function setMonthName(month) {
  switch (month) {
    case 0:
      return `de Janeiro de`;
    case 1:
      return `de Fevereiro de`;
    case 2:
      return `de Março de`;
    case 3:
      return `de Abril de`;
    case 4:
      return `de Maio de`;
    case 5:
      return `de Junho de`;
    case 6:
      return `de Julho de`;
    case 7:
      return `de Agosto de`;
    case 8:
      return `de Setembro de`;
    case 9:
      return `de Outubro de`;
    case 10:
      return `de Novembro de`;
    case 11:
      return `de Dezembro de`;
  }
}
function criateParagraf() {
  const p = document.createElement("p");
  return p;
}

const today = new Date();
const atualDate = getDate(today);

const resultado = document.querySelector("#date-result");
resultado.innerHTML = " ";
resultado.innerHTML = atualDate;
