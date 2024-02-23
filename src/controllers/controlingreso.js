//declarando variables con JS desde el DOM

let usuarioBaseDatos="wilsonFJ"
let contrasenaBaseDatos="wilson2024"
let correoBaseDatos="exomecatronica@gmail.com"

let botonFormulario=document.getElementById("botoningreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaformularioEmail=document.getElementById("email")
let cajaFormularioPasword=document.getElementById("pasword")

// Detectando eventos con JS
botonFormulario.addEventListener("click" ,function(evento){

     evento.preventDefault()   
    //("estas intentando ingresar ")
    //*capturamos la infomracion del formulario

    let nombreUsuario=cajaFormularioNombre.value
    
    let correoUsuario=cajaformularioEmail.value
  
    let contrasenaUsuario=cajaFormularioPasword.value
    
    // validando los datos del usuario
    if(usuarioBaseDatos==nombreUsuario && contrasenaBaseDatos==contrasenaUsuario && correoBaseDatos==correoUsuario){
        Swal.fire({
            title: "bienvenido"+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
          });
        

          setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            sessionStorage.setItem("email",correoUsuario)
            sessionStorage.setItem("pasword",contrasenaUsuario)
            window.location.href="./src/views/home.html"

          },3000)

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops..."+nombreUsuario,
            text: "verifica tus credenciales ",
            
          });
        }
    
    

})

/*cajaFormularioNombre.addEventListener("click",function(){
    alert("ingresa tu nombre")
})
cajaformularioEmail.addEventListener("click",function(){
    alert("ingresa tu nombre")
})
cajaFormularioPasword.addEventListener("click",function(){
    alert("ingresa tu nombre")
})*/