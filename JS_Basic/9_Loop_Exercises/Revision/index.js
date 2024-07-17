let spaceshipName = prompt("Qual é o nome da nave?")

let invertName = ""

// S u p e r n o v a

for(let i = spaceshipName.length - 1; i >= 0; i--){
    if(spaceshipName[i] == "e"){
        break
    }
    invertName += spaceshipName[i]
}

alert("Nome original da nave: "  + spaceshipName + "\nNome após ocultação: " + invertName) 