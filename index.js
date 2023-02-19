const formulario = document.getElementById("formulario");

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let nombre=id("nombre"),
email=id("email"),
clave1=id("clave1"),
clave2=id("clave2"),
errorMsg = classes("formulario_input_error");

//creamos una funcion para comprobar que la clave introducida por el usuario coincida con la confirmacion de la clave
function comprobarClaves(){
    const claveUsuario = document.getElementById("clave1").value;
    const claveCheck = document.getElementById("clave2").value;
    const mensajeclaves = document.getElementById("msgclave");
    if(claveUsuario == claveCheck){
        //si las claves coinciden
        mensajeclaves.style.visibility="hidden"; //no muestra el mensaje
        return true;  
    }
    else{  
        //si las claves no coinciden se muestra el label hidden mensajeclaves
        mensajeclaves.style.visibility="visible";
        return false;
    }
}

//comprobar que el usuario rellena todos los campos
formulario.addEventListener("submit",(e) => {
    e.preventDefault();

    engine(nombre, 0, "Rellene este campo");
    engine(email, 1, "Rellene este campo");
    engine(clave1, 2, "Rellene este campo");
    engine(clave2, 3, "Rellene este campo");
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
    }
};

//VALIDACION

function validacion(){
    var valido = true;
    if (comprobarClaves()==true){
        return valido;
    }
    if(comprobarClaves()==false){
        valido=false;
    }
    return valido;

}


//funcion que al pulsar el btn enviar sale un alert confirmando la inscripcion
function enviarDatos(){
    if (validacion()==true){
        alert("La inscripción se ha realizado correctamente");
        formulario.reset();
    }else{
        alert("Rellene los datos correctamente");
        
    }
}

