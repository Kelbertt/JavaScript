let velocity = 80

switch(velocity){
  case 80:
    console.log("Velocidade mínima")
    break
  case 90:
  case 100:
     console.log("Velocidade Aceitável")
    break
  case 110:
    console.log("Velocida Alta, mas aceitável")
    break
  default:
    console.log("Velocidade não identifcada")
}