let peso = 50;
let altura = 1.70;
let imc = peso/ (altura*altura);

console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc > 18.5 && imc < 25) {
    console.log("Dentro do peso normal")
} else if (imc > 25 && imc < 30) {
    console.log(" Esta com sobrepeso")
} else if (imc > 30) {
    console.log(" Esta acima do peso")
}