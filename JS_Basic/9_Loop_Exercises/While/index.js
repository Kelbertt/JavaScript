let warpcount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave?")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não" )

while(chosenOption == "1"){
    warpcount += 1
    chosenOption = prompt("Deseja reaalizar a próxima dobra?\n1- Sim \n2- Não")

}

alert("Nave: " + spaceship + "\nForam feitas " + warpcount + "dobras espaciais.")