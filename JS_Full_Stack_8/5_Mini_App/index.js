let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");  //Conversão da string para o formado Date do JavaScript

let today = moment()

let datediff = today - departureDate

