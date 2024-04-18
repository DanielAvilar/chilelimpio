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

        if(edad.value<18 || edad.value>35 || edad.length === null){
            mensajesError.push("Ingrese edad mayor a 18 años y menor a 35");
            console.log('menor de edad');
        

    }
    else{
        mensajesError.push("Edad ingresada correctamente");
        console.log('edad correcta');
    }
    if(tel.length< 9 || tel.length>12 ){
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