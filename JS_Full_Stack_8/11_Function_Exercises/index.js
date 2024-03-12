let velocity = "150 km/s"

function slowDown(velocity) {
    let desaceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= desaceleracion
    }

    alert("Nave parada. As comportas podem ser abertas.")

}

let spaceshipVelocity = 150

slowDown(spaceshipVelcity, function(velocity){
    console.log("Velocidade Atual:  " + velocity)
})