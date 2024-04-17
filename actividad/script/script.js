var nombre = document.getElementById('nombre')
var error = document.getElementById('error')
error.style.color = 'red';


function enviarForm(){
    console.log('Enviando formulario...')
    
    var mensajeError = []

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingrese un nombre valido')
    }
}