//trayendodatos de la memoria 

//1.debo crear una variable para cada dato que quiero extraer de la memoria 
let nombre=sessionStorage.getItem("nombre")
console.log(nombre)                // consoloe log es como print 

// traigo la etiqueta que quiero controlar 
let etiquetaNombre=document.getElementById("nombreMenu")

// Modifico el contenio de texto de una etiqueta
etiquetaNombre.textContent="Hola "+nombre
