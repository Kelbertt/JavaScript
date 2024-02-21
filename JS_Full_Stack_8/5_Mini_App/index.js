let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");  //Conversão da string para o formado Date do JavaScript

let today = moment()

let datediff = today - departureDate

let chosenoption = prompt("Escolha como gostaria de exibir o tempo de partida \n 1- Segundos \n 2- Minutos \n 3- Horas \n 4- Dias")

if (chosenoption == "1") {
    let secondsofdeparture = Math.round(datediff / 1000)
    alert("Tempo de vôo: " + secondsofdeparture + " segundos")
} else if(chosenoption == "2"){
    let minutesofdeparture = Math.round(datediff / 1000 / 60)
    alert("Tempo de vôo: " + minutesofdeparture + " minutos")
}else if(chosenoption == "3"){
    let hoursofdeparture = Math.round(datediff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursofdeparture + " horas")
}else if(chosenoption == "4"){
    let daysofdeparture = Math.round(datediff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysofdeparture + " dias")
}else {
    alert("Opção inválida")
}