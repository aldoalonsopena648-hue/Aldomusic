const form = document.getElementById("miFormulario");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let todoBien = true;

  let nombre = document.getElementById("nombre").value.trim();
  let paterno = document.getElementById("paterno").value.trim();
  let materno = document.getElementById("materno").value.trim();
  let edad = document.getElementById("edad").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let email = document.getElementById("email").value.trim();

  // Solo letras y espacios, permite los nombres y apellidos que queramos
  let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

  if (nombre === "" || !soloLetras.test(nombre)) {
    mostrarError("nombre", "errorNombre", "Error: El nombre solo debe tener letras, no números.");
    todoBien = false;
  } else { limpiarError("nombre", "errorNombre"); }

  if (paterno === "" || !soloLetras.test(paterno)) {
    mostrarError("paterno", "errorPaterno", "Error: El apellido paterno solo debe tener letras.");
    todoBien = false;
  } else { limpiarError("paterno", "errorPaterno"); }

  if (materno === "" || !soloLetras.test(materno)) {
    mostrarError("materno", "errorMaterno", "Error: El apellido materno solo debe tener letras.");
    todoBien = false;
  } else { limpiarError("materno", "errorMaterno"); }

  // Edad: Solo numérico, máximo 3 números, sin espacios ni letras
  let regexEdad = /^[0-9]{1,3}$/;
  if (!regexEdad.test(edad)) {
    mostrarError("edad", "errorEdad", "Edad incorrecta: Solo números, máximo 3 dígitos, sin letras ni espacios.");
    todoBien = false;
  } else { limpiarError("edad", "errorEdad"); }

  // Tel: Solo numérico, 10 números, NO acepta guion ni espacio
  let regexTel = /^[0-9]{10}$/;
  if (!regexTel.test(telefono)) {
    mostrarError("telefono", "errorTelefono", "Error: El teléfono solo acepta 10 números, sin guion, sin espacios ni letras.");
    todoBien = false;
  } else { limpiarError("telefono", "errorTelefono"); }

  // Email: A fuerza @ y .com
  let regexEmail = /^[^\s@]+@[^\s@]+\.com$/;
  if (!regexEmail.test(email)) {
    mostrarError("email", "errorEmail", "Error: El correo debe llevar @ y .com, ejemplo: ejemplo@gmail.com");
    todoBien = false;
  } else { limpiarError("email", "errorEmail"); }

  // Si todo está bien, crea plantilla "Datos Correctos"
  let resultado = document.getElementById("resultado");
  if (todoBien) {
    resultado.style.display = "block";
    resultado.innerHTML = "✅ Datos Correctos <br><br> Nombre: " + nombre + " " + paterno + " " + materno + "<br> Edad: " + edad + "<br> Tel: " + telefono + "<br> Email: " + email;
  } else {
    resultado.style.display = "none";
  }
});

function mostrarError(idInput, idError, mensaje) {
  document.getElementById(idError).textContent = mensaje;
  document.getElementById(idInput).classList.add("invalido");
  document.getElementById(idInput).classList.remove("valido");
}
function limpiarError(idInput, idError) {
  document.getElementById(idError).textContent = "";
  document.getElementById(idInput).classList.remove("invalido");
  document.getElementById(idInput).classList.add("valido");
}
