$(document).ready(function(){
    $("#Enviar").click(function(){
        var nombre = $("#nombre").val();
        var rut = $("#rut").val();
        var appaterno = $("#apellido_pat").val();
        var apmaterno =$("#apellido_mat").val();
        var age = $("#edad").val();
        var telefono = $("#tel").val();
        var email = $("#mail").val();
        var profesion = $("#prof").val();
        var rutRegex = /^\d{2}\.\d{3}\.\d{3}\-\d{1}|\d{1}\.\d{3}\.\d{3}\-\d{1}$/;
        var telRegex = /^\+569\d{8}|^9\d{8}$/;
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var motivacion = $("#moti").val();
        var validacionGender = $('input[name="flexRadioDefault"]:checked').val();

        

        if(!rutRegex.test(rut)){
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
                if(appaterno == ""){
                    $("#mensaje2").fadeIn();
                    return false;

                }
                else{
                    $("#mensaje2").fadeOut();
                    if(apmaterno == ""){
                        $("#mensaje3").fadeIn();
                        return false;

                    }
                    else{
                        $("#mensaje3").fadeOut();
                        if(age < 18 || age > 35 || age == null){
                            $("#mensaje4").fadeIn();
                            return false;
                        }
                        else {
                            $("#mensaje4").fadeOut();
                            if(!telRegex.test(telefono)){
                                $("#mensaje5").fadeIn();
                                return false;
                            }
                            else{
                                $("#mensaje5").fadeOut();
                                if(!emailRegex.test(email)){
                                    $("#email").fadeIn();
                                    return false;
                                }
                                else{
                                    $("#email").fadeOut();
                                    if(profesion == ""){
                                        $("#mensaje6").fadeIn();
                                        return false;
                                    }
                                    else{
                                        $("#mensaje6").fadeOut();

                                        if(motivacion == ""){
                                            $("#mensaje7").fadeIn();
                                            return false;

                                        }
                                        else{
                                            $("#mensaje7").fadeOut();
                                            
                                            var carta = "Mi nombre es: " + nombre + "\n" +
                                            "Apellido Paterno: " + appaterno + "\n" +
                                            "Apellido Materno: " + apmaterno + "\n" +
                                            "Edad: " + age + "\n" +
                                            "Género: " + validacionGender + "\n" +
                                            "Rut: " + rut + "\n" +
                                            "Teléfono: " + telefono + "\n" +
                                            "Email: " + email + "\n" +
                                            "Profesión: " + profesion + "\n" +
                                            "Motivación para postular: " + motivacion;
                                            
                                            $("#carta").val(carta)
                                            alert(carta)
                                            
                                        }
                                    }
                                }
                            }
                           
                        }
                    }

                    
                }
                
                
            }



        }
        
    })

});
