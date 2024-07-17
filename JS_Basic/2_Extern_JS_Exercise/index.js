let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("igite a idade da pessoa mais velha")

let youngerPersonName = prompt("Digite o nome da pessoa mais nova ")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")

let ageDifference = olderPersonAge -  youngerPersonAge 

alert(
    "Pessoa mais velha:  "+ olderPersonName +" \n Idade: " + olderPersonAge +
    "\n\n Pessoa mais nova: "+ youngerPersonName + "\n Idade: " + youngerPersonAge +
    "\n\nDiferença de idade: " + ageDifference
)