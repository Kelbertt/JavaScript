let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caractere vocÊ deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""  // utilizado para verificar se o caracter atual é o que eu quero substituir

for (let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace ) {
        newSpaceship += replacementChar
    } else{
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship )

// Elemental
// e
// h

// pos = 0   E  e   newSpaceship = E
// pos = 0   l  e   newSpaceship = l
// pos = 0   e  e   newSpaceship = h