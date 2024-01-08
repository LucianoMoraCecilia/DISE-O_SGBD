$(document).ready(function() {
    $(".login_btn").click(function(e) {
      e.preventDefault();
  
      // Muestra el mensaje de "Inicio de sesión exitoso"
      $(".transition-message").fadeIn(500);
  
      // Espera 2 segundos antes de ocultar el mensaje y realizar la redirección
      setTimeout(function() {
        $(".transition-message").fadeOut(500, function() {
          window.location.href = "principal.html";
        });
      }, 2000);
    });
  });
  