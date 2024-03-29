function save() {
    let name = document.querySelector("input['name']").nodeValue;
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}