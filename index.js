document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
  
    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Dirección:", direccion);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);
  
    alert("Gracias por contactarnos, " + nombre + ". Nos comunicaremos pronto.");
    document.getElementById("form-contacto").reset();
  });
  