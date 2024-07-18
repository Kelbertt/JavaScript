//Object

let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
  }
  
  let {name: spaceshipName, crewQuantity } = spaceship
  //let spaceshipName = spaceship.name
  //let crewQuantity = spaceship.crewQuantity
  
  console.log(spaceshipName, crewQuantity)
  
  //Array
  
  let spaceships = ["Colossus", "Ártemis", "Fênix"]
  
  let [colossus, artemis, fenix, puller] = spaceships
  //let colossus = spaceships[0]
  //let artemis = spaceships[1]
  
  console.log(colossus, artemis, fenix, puller)