
function slowDown(velocity) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleracion
    }

    alert("Nave parada. As comportas podem ser abertas.")

}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade Atual:  " + velocity)
})