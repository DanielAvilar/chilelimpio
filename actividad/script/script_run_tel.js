var form = document.getElementById('formulario');
var error = document.getElementById('error');
error.style.color = 'red';
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        //aca van las validaciones IF
            if(edad.value<18 || edad.value>35 || edad.length === null){
                mensajesError.push("Ingrese edad mayor a 18 años y menor a 35");
                console.log('menor de edad');
            
  
        }
        else{
            mensajesError.push("Edad ingresada correctamente");
            console.log('edad correcta');
        }
        if(tel.value< 9 || tel.value>12 ){
            mensajesError.push("Su numero debe tener entre 9 a 12 digitos y seguir el formato correcto");
            console.log('numero incorrecto');
        }
        else{
            mensajesError.push("numero almacenado correctamente");
            console.log('numero correcto');
        }
        //---------------------

        error.innerHTML = mensajesError.join(' , ');
        
        

    });