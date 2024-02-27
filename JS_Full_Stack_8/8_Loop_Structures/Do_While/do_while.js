let velocity = 50
let acceleration = 5

do {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity += acceleration                           // To don't be a infinity loop
} while(velocity <= 100)