
$(document).ready(function(){

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 200){
      if(!flag){
        $(".main-menu").css({"background":"#0D0D45"});
        $(".main-link").css({"color":"white"});
        $(".main-pointer").css({"opacity":"1"});
        $(".main-menu__tokken").css({"color":"white"});

        flag = true;
      }
    }else{
      if(flag){
        $(".main-menu").css({"background":"transparent"});
        $(".main-link").css({"color":"#0D0D45"});
        $(".main-pointer").css({"opacity":"0"});
        $(".main-menu__tokken").css({"color":"#0D0D45"});
        flag = false;
      }
    }
  });
});
// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function() {

  var formulario = document.formulario_registro,
    elementos = formulario.elements;

  // Funcion que se ejecuta cuando el evento click es activado

  var validarInputs = function() {
    for (var i = 0; i < elementos.length; i++) {
      // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "tel" || textarea.type == "text") {
        // Si es tipo texto, email o password vamos a comprobar que esten completados los input
        if (elementos[i].value.length == 0) {
          console.log('El campo ' + elementos[i].name + ' esta incompleto');
          elementos[i].className = elementos[i].className + " error";
          return false;
        } else {
          elementos[i].className = elementos[i].className.replace(" error", "");
        }
        if (textarea.value.length == 0) {
          console.log('El campo ' + textarea.name + ' esta incompleto');
          textarea.className = textarea.className + " error";
          return false;
        } else {
          textarea.className = textarea.className.replace(" error", "");
        }
      }
    }

    // Comprobando que las contraseñas coincidan

    return true;
  };

  

  

  var enviar = function(e) {
    if (!validarInputs()) {
      console.log('Falto validar los Input');
      e.preventDefault();
    } else {
      console.log('Envia');
      e.preventDefault();
    }
  };

  var focusInput = function() {
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  var blurInput = function() {
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };

  // --- Eventos ---
  formulario.addEventListener("submit", enviar);

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "tel" ||textarea.type == "text") {
      elementos[i].addEventListener("focus", focusInput);
      elementos[i].addEventListener("blur", blurInput);
      textarea.addEventListener("focus", focusInput);
      textarea.addEventListener("blur", blurInput);
    }
  }

}())

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });

  window.onload =function()
  {
    var btnUnete;
    btnUnete = document.getElementById("boton_");
    btnUnete.onclick = apareceMenu;
  }
  function apareceMenu()
  {
    $(".main-list").toggleClass("active");
  }
});
