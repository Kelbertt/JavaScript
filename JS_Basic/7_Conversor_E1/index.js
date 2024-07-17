let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km) \n\n(Digite o número da opção desejada)")

let chosenUnity
let converterDistance

// usar o switch para as opções

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        converterDistance = distanceInLY * 0.306601
        break
     case "2":
        chosenUnity = "Unidade Astronômica"
        converterDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        converterDistance = distanceInLY * 9.5 * Math.pow(10,12)     // basicamente é 9 * 10^12
        break
    default:
        chosenUnity = "Unidade não identificada"
        converterDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + converterDistance)