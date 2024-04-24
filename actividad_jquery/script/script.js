$(document).ready(function(){
    $("#Enviar").click(function(){
        var nombre = $("#nombre").val();
        var rut = $("#rut").val();
        if(rut == ""){
            $("#mensajerut").fadeIn();
            return false;
        }
        else{
            $("#mensajerut").fadeOut();
            if(nombre == ""){
                $("#mensaje1").fadeIn();
                return false;
            }
            else{
                $("#mensaje1").fadeOut();
                
                
            }



        }
        
    })

});
