let spaceship = {
    name: "Demeter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
      alert("Preparando Propulsão")
      alert("Ligando computador de bordo")
    }
  }
  
  spaceship.velocity = 0 // add propriedade to the object spaceship
  spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
    this.velocity += acceleration
  }
  
  console.log(spaceship)
  
  spaceship.speedUp(spaceship, 10)
  
  console.log(spaceship)