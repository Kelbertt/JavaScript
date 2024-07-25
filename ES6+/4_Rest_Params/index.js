function greetCrew(message, ...names) {
    console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`))
  }
  
  greetCrew("Seja Bem-vindo", "Arthur", "Jake", "Melissa")