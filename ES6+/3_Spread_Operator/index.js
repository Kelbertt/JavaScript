let spaceships = ["Colossus", "Fenix", "Puller"]

let newSpaceships = [...spaceships, "Artemis"]

console.log(newSpaceships)

function speedUp(velocity, acceleration) {
  return velocity + acceleration
}

let spaceshipAcceleration = [60,10]

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)