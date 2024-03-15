let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
  }
  
  spaceship.crew.push("Ten. Fernanda")
  
  console.log(spaceship)
  
  
  
  let spaceships = [
    {name: "Elemental", crewQuantity: 10 },
    {name: "Colossus", crewQuantity: 8 },
    {name: "Helmete", crewQuantity: 15 }
  ]
  
  spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
  })  