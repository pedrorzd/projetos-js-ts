let varA = 'A';
let varB = 'B';
let varC = 'C';

const saveA = varA
varA = varB;
varB = varC;
varC = varA;

console.log(varA, varB, saveA);