
let pilotname = prompt("Qual o seu nome?")

let velocity = 0

let newvelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmvelocity = confirm("Estamos acelerando para " + newvelocity + "km/s")

if (confirmvelocity) {
    velocity = newvelocity
}

if (velocity <= 0){
   alert("Nave está parada. Considere partir e aumentar a velocidade.") 
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if (velocity < 80 ) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
