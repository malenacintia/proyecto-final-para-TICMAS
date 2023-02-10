$(document).ready(function() {
    $("#boton_ver0").click(function() {
        $(this).hide();
        $("#contenido0").show(1000);
        $("#boton_ocultar0").show();
        console.log("Mostrar experiencia");
    });
});

$(document).ready(function () {
    $("#boton_ocultar0").click(function () {
        $(this).hide();
        $("#contenido0").hide(500);
        $("#boton_ver0").show();
        console.log("Ocultar experiencia");
    });
});

$(document).ready(function() {
    $("#boton_ver1").click(function() {
        $(this).hide();
        $("#contenido1").show(1000);
        $("#boton_ocultar1").show();
        console.log("Mostrar experiencia");
    });
});

$(document).ready(function () {
    $("#boton_ocultar1").click(function () {
        $(this).hide();
        $("#contenido1").hide(500);
        $("#boton_ver1").show();
        console.log("Ocultar experiencia");
    });
});

$(document).ready(function() {
    $("#boton_ver2").click(function() {
        $(this).hide();
        $("#contenido2").show(1000);
        $("#boton_ocultar2").show();
        console.log("Mostrar experiencia");
    });
});

$(document).ready(function () {
    $("#boton_ocultar2").click(function () {
        $(this).hide();
        $("#contenido2").hide(500);
        $("#boton_ver2").show();
        console.log("Ocultar experiencia");
    });
});

$(document).ready(function() {
    $("#boton_ver3").click(function() {
        $(this).hide();
        $("#contenido3").show(1000);
        $("#boton_ocultar3").show();
        console.log("Mostrar experiencia");
    });
});

$(document).ready(function () {
    $("#boton_ocultar3").click(function () {
        $(this).hide();
        $("#contenido3").hide(500);
        $("#boton_ver3").show();
        console.log("Ocultar experiencia");
    });
});

$(document).ready(function() {
    $("#boton_animacion").click(function() {
        $('html, body').animate({
        scrollTop: $("#franja_inf").offset().top
        }, 200);
        console.log("Hacer scroll hacia abajo");
       });
});

/*document.getElementById("boton_enviar").addEventListener("click", function() {   
    console.log("Se envió el mensaje")                          
    document.getElementById("chequeo").innerHTML = "¡Se envió tu mensaje!";
});*/

$(document).ready(function () {
    $("#boton_enviar").click(function () {
        $(alert("Tu mensaje ha sido enviado"));
    })
})

  /**  
   * CODIGO DE JAVASCRIPT QUE FUNCIONA SIEMPRE Y CUANDO 
SE MODIFIQUE EN CSS LA CLASE BOTON_OCULTAR, QUEDANDO ".boton_ocultar { display: block}; ".
CON JS FUNCIONA PERO NO PUEDO REALIZAR LAS ACCIONES SOBRE LOS BOTONES QUE SÍ LOGRÉ CON JQUERY.
DEJO EL CODIGO EMPLEADO USANDO IF, ONCLICK Y ADDEVENTLISTENER, PARA PROBAR LAS HERRAMIENTAS BRINDADAS EN EL CURSO.

document.getElementById("boton_ver1").onclick = function() {
    if (document.getElementById("contenido1").style.display = "none") {
        document.getElementById("contenido1").style.display = "block" 
        console.log("Ver experiencia en Hospital Británico")
    }
}

document.getElementById("boton_ocultar1").onclick = function() {
    document.getElementById("contenido1").style.display = "none"
    console.log("Ocultar experiencia");

document.getElementById("boton_ver2").addEventListener("click", function() {
    console.log("Ver experiencia como docente de trabajos prácticos")
    document.getElementById("contenido2").style.display = "block";
})

document.getElementById("boton_ocultar2").onclick = function() {
    document.getElementById("contenido2").style.display = "none"
    console.log("Ocultar experiencia");
}

document.getElementById("boton_ver3").addEventListener("click", function() {
    console.log("Ver experiencia de kinesióloga en hidroterapia")
   document.getElementById("contenido3").style.display = "block";
})

document.getElementById("boton_ocultar3").onclick = function() {
    document.getElementById("contenido3").style.display = "none"
    console.log("Ocultar experiencia");
}
*/



