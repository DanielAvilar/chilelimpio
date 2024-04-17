var form = document.getElementById('formulario');
    form.addEventlistener('submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        //aca van las validaciones IF


        //---------------------

        error.innerHTML = mensajesError.join(' , ');

    });