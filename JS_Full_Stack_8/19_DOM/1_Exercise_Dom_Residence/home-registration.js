
function saveHouse() {
    let area = document.querySelector("input[id='area']").value
    let number = document.querySelector("input[id='number']").value
    let neighborhood = document.querySelector("input[id='neighborhood']").value
    let city = document.querySelector("input[id='city']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número " + number + " (" +  neighborhood + " - " + city + ")"
    
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
    
}