const name = prompt("Digite seu nome completo!");

document.body.innerHTML += `Seu nome é ${name}<br/>`;
document.body.innerHTML += `Seu nome tem ${name.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome eh: ${name[1]}<br/>`;
document.body.innerHTML += `O primeiro índice da letra E no seu nome é: ${name.indexOf("e")} <br/>`;
document.body.innerHTML += `O último índice da letra E no seu nome é: ${name.lastIndexOf("e")}<br/>`;
document.body.innerHTML += `As últimas três letras do seu nome são:  ${name.slice(-3)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são:  ${name.split(' ')}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()}<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()}<br/>`;
