function mostrarMensaje(mensaje, redireccionar, imagen) {
  var overlay = document.createElement('div');
  overlay.className = 'overlay';

  if (imagen) {
     var img = document.createElement('img');
     img.src = imagen;
     overlay.appendChild(img);
  }

  var texto = document.createElement('div');
  texto.textContent = mensaje;
  overlay.appendChild(texto);

  document.body.appendChild(overlay);

  overlay.style.display = 'block';

  if (redireccionar) {
     setTimeout(function () {
        window.location.href = redireccionar;
     }, 2000);
  }

  setTimeout(function () {
     // Oculta el overlay
     overlay.style.display = 'none';
     document.body.removeChild(overlay);

     // Muestra la lista de nombres después de 2 segundos
     setTimeout(function () {
        document.getElementById('listaNombres').classList.remove('d-none');
     }, 1000);
  }, 2000);
}
