var form = document.getElementById('formulario');
var error = document.getElementById('error');
var rutRegex = /^\d{2}\.\d{3}\.\d{3}\-\d{1}|\d{1}\.\d{3}\.\d{3}\-\d{1}$/;
var telRegex = /^\+569\d{8}|^9\d{8}$/
var nper = "";
var appaterno = "";
var apmaterno = "";
var age = "";
var rutP = "";
var tele = "";

error.style.color = 'red';
    form.addEventListener('submit', function(evt){
        var rutPersona = document.getElementById('rut').value;
        var telPersona = document.getElementById('tel').value;
        var nomPersona = document.getElementById('nombre').value;
        var appaternoPersona = document.getElementById('apellido_pat').value;
        var apmaternoPersona = document.getElementById('apellido_mat').value;
        
        
        
        evt.preventDefault();
        var mensajesError = [];

        //aca van las validaciones IF
            if(nomPersona.length < 3 || nomPersona.length > 20 || nomPersona.length === null){
                mensajesError.push("Nombre incorrecto");
                console.log('Nombre incorrecto');
                
            }
            else{
                console.log('Nombre correcto');
                nper = nomPersona
            }
            
            if(appaternoPersona.length < 3 || appaternoPersona.length> 20 || appaternoPersona.length === null){
                console.log('paterno incorrecto');
            }
            else{
                console.log('paterno correcto');
                appaterno = appaternoPersona
            }

            if(apmaternoPersona.length < 3 || apmaternoPersona.length > 20 || apmaternoPersona.length === null){
                console.log('materno incorrecto');
            }
            else{
                console.log('materno correcto');
                apmaterno = apmaternoPersona
            }

            if(edad.value<18 || edad.value>35 || edad.length === null){
                console.log('menor de edad');
            
  
        }
        else{
            console.log('edad correcta');
            age = edad.value
        }
        if(!telRegex.test(telPersona)){
            console.log('numero incorrecto');
        }
        else{
            console.log('numero correcto');
            tele = telPersona

        }
        if(!rutRegex.test(rutPersona)){
            mensajesError.push("Use formato rut xx.xxx.xxx-x");
            console.log('Use formato rut xx.xxx.xxx-x');
        }
        else{
           
            console.log('Rut ingresado correctamente');
            rutP = rutPersona

        }
        //---------------------

        error.innerHTML = mensajesError.join(' , ');

        if(mensajesError.length === 0){
            carta();
        }

       
        
        

    });
function carta() {
    var gender = document.querySelector('input[name="flexRadioDefault"]:checked');
    var validacionGender = gender.value
    var rutP = document.getElementById('rut').value;
    var tele = document.getElementById('tel').value;
    var nper = document.getElementById('nombre').value;
    var appaterno = document.getElementById('apellido_pat').value;
    var apmaterno = document.getElementById('apellido_mat').value;
    var age = document.getElementById('edad').value;
    var emailPersona = document.getElementById("mail").value;
    var profesionPersona = document.getElementById("prof").value;
    var motPersona = document.getElementById("motivacion").value;

    var carta = "Mi nombre es: " + nper + "\n" +
                "Apellido Paterno: " + appaterno + "\n" +
                "Apellido Materno: " + apmaterno + "\n" +
                "Edad: " + age + "\n" +
                "Género: " + validacionGender + "\n" +
                "Rut: " + rutP + "\n" +
                "Teléfono: " + tele + "\n" +
                "Email: " + emailPersona + "\n" +
                "Profesión: " + profesionPersona + "\n" +
                "Motivación para postular: " + motPersona;

    document.getElementById("carta").value = carta;
} 