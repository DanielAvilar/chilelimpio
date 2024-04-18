
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
var form = document.getElementById('formulario');
    form.addEventlistener('submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        //aca van las validaciones IF
        

        if(apellido_pat.value === null || apellido_pat.length < 3 || apellido_pat.length > 20){
            mensajesError.push("Ingresa tu apellido paterno correctamente")
        }

        if(apellido_mat.value === null || apellido_mat.length < 3 || apellido_mat.length > 20){
            mensajesError.push("Ingresa tu apellido materno correctamente")
        }
        //---------------------

        error.innerHTML = mensajesError.join(' , ');

    });

