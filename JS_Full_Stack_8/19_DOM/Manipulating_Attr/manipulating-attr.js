function verifyEnablement() {
    let selectValue = document.querySelector("select").value
    if(selectValue == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "Desabilitado"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    } else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"
    }
}