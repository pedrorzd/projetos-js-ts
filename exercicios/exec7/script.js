const userNumber = Number(prompt('Digite um número:'));

const titleNumber = document.getElementById("user-number");
const textNumber = document.getElementById('text');

titleNumber.innerHTML = userNumber;
textNumber.innerHTML += `<p> A raiz do numero digitado é ${Math.sqrt(userNumber)}</p>`;
textNumber.innerHTML += `<p> O número ${userNumber} é inteiro? ${Number.isInteger(userNumber)}</p>`;
textNumber.innerHTML += `<p> O número ${userNumber} é NaN? ${Number.isNaN(userNumber)}</p>`;
textNumber.innerHTML += `<p> O número ${userNumber} arrendodado para cima ${Math.ceil(userNumber)}</p>`;
textNumber.innerHTML += `<p> O número ${userNumber} arrendodado para baixo ${Math.floor(userNumber)}</p>`;
textNumber.innerHTML += `<p> O número ${userNumber} com duas casas decimais ${userNumber.toFixed(2)}</p>`;