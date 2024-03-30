class Captain {
    constructor(name,age, flightHours) {
      this.name = name
      this.age = age
      this.flightHours = flightHours
    }
  }
  
  class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainflightHours) {
      this.name = name
      this.crewQuantity = crewQuantity
      this.captain = new Captain(captainName, captainAge, captainflightHours)
    }
  }
  
  let spaceship = new Spaceship("Artemis", 13, "Will Grey", 45, 15000)
  
  console.log(spaceship)