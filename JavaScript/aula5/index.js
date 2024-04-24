const nome = 'Raphael';
const sobrenome = 'Soares Ferreira';
const idade = 13;
const peso = 42;
const alturaEmM = 1.61;
let imc;
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2024 - idade;   

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
