var nombre = document.getElementById('name1');
var password = document.getElementById('password1');
var error = document.getElementById('error');
function validar(evento) {//Esta funcion se encarga de determinar si lo que el usuario digita es una letra,
    //de no ser así entonces se le enviará un alert
    var letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghiklmnñopqrstuvwxyz ";
    var valor = evento.which || evento.keyCode;
    var txt = String.fromCharCode(valor);
    var pos = letras.indexOf(txt);
    if (pos === -1) {
        alert("Ingresa solo letras");
        return false;
    } else
        return true;
}
function validarFormulario(){
var form = document.editar;
if(editar.name1.value == 0){
    alert("El campo nombre esta vacio");
    editar.name1.value = "";
    editar.name1.focus();
    return false;
}
if(editar.surname1.value == 0){
    alert("El campo apellido esta vacio");
    editar.surname1.value = "";
    editar.surname1.focus();
    return false;
}
if(editar.password1.value == 0){
    alert("El campo contrasenia esta vacio");
    editar.password1.value = "";
    editar.password1.focus();
    return false;
}

}
function validarnumeros(evento) {//Aquí se valida que el usuario este ingresando unicamente numeros
    var letras = "1234567890 ";
    var valor = evento.which || evento.keyCode;
    var txt = String.fromCharCode(valor);
    var pos = letras.indexOf(txt);
    if (pos === -1) {
        alert("Ingresa solo numeros enteros");
        return false;
    } else {
        return true;
    }
}
function validarlimitecredito(evento) {//Se valida que en el limite de credito se admitan unicamente numeros y
    //punto decimal
    var letras = ".1234567890";
    var valor = evento.which || evento.keyCode;
    var txt = String.fromCharCode(valor);
    var pos = letras.indexOf(txt);
    if (pos === -1) {
        alert("Ingresa solo numeros décimales");
        return false;
    } else {
        return true;
    }
}
const iconEye = document.querySelector(".icono1");
console.log(iconEye);
iconEye.addEventListener("click", function(){
    const icon = this.querySelector("i");
    
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
});