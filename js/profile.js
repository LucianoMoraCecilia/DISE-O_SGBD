  function mostrarFormularioRegistro() {
    document.getElementById("formularioRegistro").style.display = "block";
  }

  function insertarDatos() {
    // Obtener datos del formulario de registro
    var nombre = document.getElementById("campoNombre").value;
    var edad = document.getElementById("campoEdad").value;
    var sexo = document.getElementById("campoSexo").value;

    // Insertar datos en la tabla del primer formulario (miTabla)
    var tabla = document.getElementById("miTabla");
    var row = tabla.insertRow(1); // Insertar en la segunda fila (después de encabezados).
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Asignar valores a las celdas
    cell1.innerHTML = tabla.rows.length - 1; // ID autoincremental
    cell2.innerHTML = nombre;
    cell3.innerHTML = edad;
    cell4.innerHTML = sexo;

    // Limpiar el formulario de registro
    document.getElementById("registroForm").reset();

    // Ocultar el formulario de registro después de la inserción.
    document.getElementById("formularioRegistro").style.display = "none";

     // Insertar texto en la casilla de "Consulta"
     document.getElementById("consultaInput").value = "INSERT INTO tabla VALUES ('4', ' ', ' ', ' ');";
  }


  function mostrarFormularioEdicion() {
    document.getElementById("formularioEdicion").style.display = "block";
}

function modificarDatos() {
    // Aquí puedes realizar acciones si es necesario
    // ...

    // Limpiar el formulario de edición
    document.getElementById("edicionForm").reset();

    // Ocultar el formulario de edición después de la modificación.
    document.getElementById("formularioEdicion").style.display = "none";

     // Insertar texto en la casilla de "Consulta"
     document.getElementById("consultaInput").value = "UPDATE INTO tabla VALUES ('4', ' ', ' ', ' ');";
}

function mostrarFormularioEliminar() {
  document.getElementById("formularioEliminar").style.display = "block";
}

function eliminarDatos() {
  // Aquí puedes realizar acciones si es necesario
  // ...

  // Limpiar el formulario de eliminación
  document.getElementById("eliminacionForm").reset();

  // Ocultar el formulario de eliminación después de la eliminación.
  document.getElementById("formularioEliminar").style.display = "none";

  
     // Insertar texto en la casilla de "Consulta"
     document.getElementById("consultaInput").value = "DELETE tabla FROM ejemplo;";

}
