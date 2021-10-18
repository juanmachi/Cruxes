
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies == 'true'){
      cajacookies.style.display = 'none';
    // cajacookies.style.display = 'yes';
    }
}
  
  /* guardo la variable de que se ha aceptado el uso de cookies así no muestro el mensaje de nuevo */
function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
}
  
$(document).ready(function () {
    compruebaAceptaCookies();
				
});




// function cambiarseccion(opcion){
//     if(opcion == 2){
//         console.log("hola");
//         $("#qs").classList.add(".secciones.texto-footer a:hover");
//     }
// }

$('.filter-basic').mdbFilter();

function seleccionpregunta(){

    if($("#sel_categoria option:selected").prop("value") == 0){
        $('#sel_consulta').prop("value",0);
        $('#sel_consulta option:selected').prop("value",0);
        $('#sel_consulta').prop("disabled",true);
        $('.sel_consulta_ong').hide();
        $('.sel_consulta_vol').hide();
        $('.sel_consulta_emp').hide();
    }else if($("#sel_categoria option:selected").prop("value") == 1){
        $('#sel_consulta').prop("disabled",false);
        $('.sel_consulta_ong').show();
        $('.sel_consulta_vol').hide();
        $('.sel_consulta_emp').hide();
    }else if($("#sel_categoria option:selected").prop("value") == 2){
        $('#sel_consulta').prop("disabled",false);
        $('.sel_consulta_ong').hide();
        $('.sel_consulta_vol').hide();
        $('.sel_consulta_emp').show();
    }else if($("#sel_categoria option:selected").prop("value") == 3){
        $('#sel_consulta').prop("disabled",false);
        $('.sel_consulta_ong').hide();
        $('.sel_consulta_vol').show();
        $('.sel_consulta_emp').hide();
    }
}

function enviarmail(){
    //chekear los campos
    //envio mail
    var nombre = $('#nombre').prop("value");
    var email = $("#email").prop("value");
    var telefono = $("#telefono").prop("value");
    var sel_categoria = $("#sel_categoria option:selected").prop("text");
    var sel_consulta = $("#sel_consulta option:selected").prop("text");
    var mensaje = $("#mensaje").prop("value");

    $("#nombre, #email, #telefono, #sel_categoria, #sel_consulta, #mensaje").closest('.form-group').removeClass('has-error');

    var error = "";
    if (nombre == '') {
      $("#nombre").closest('.form-group').addClass('has-error');
      error = error + "Ingresar el nombre<br>";
    };
    if (email == '') {
        $("#email").closest('.form-group').addClass('has-error');
        error = error + "Ingresar email<br>";
    };
    if (telefono == '') {
        $("#telefono").closest('.form-group').addClass('has-error');
        error = error + "Ingresar el teléfono<br>";
    };  
    if (sel_categoria == 0) {
        $("#sel_categoria").closest('.form-group').addClass('has-error');
        error = error + "Ingresar el área<br>";
    };
    if (sel_consulta == 0) {
        $("#sel_consulta").closest('.form-group').addClass('has-error');
        error = error + "Ingresar consulta<br>";
      };
      if (mensaje == '') {
        $("#mensaje").closest('.form-group').addClass('has-error');
        error = error + "Ingresar el mensaje<br>";
      };

    var datos = "&nombre=" + nombre + "&email=" + email + "&telefono=" + telefono + "&sel_categoria=" + sel_categoria + "&sel_consulta=" + sel_consulta + "&mensaje=" + mensaje ;

    $.ajax({
        beforeSend: function() {
          $('.spiner').show();
        },
        url: 'envia.php',
        cache: false,
        type: "POST",
        data: datos,
        success: function(datos) {$("#div_msgerror").html(datos);},
        complete: function(objeto, exito) {
          $('.spiner').hide();
          if (exito == "success") {
            var msg_error = $("#msg_error").val();
            if (msg_error != '') {
              alert(msg_error);
    
            } else {
              alert("Email enviado!");
            };
          }
        },
        error: function(objeto, quepaso, otroobj) {
          alert("Se produjo un error: " + quepaso);
        }
      });
}