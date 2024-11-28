// Mostrar el formulario de registro
document.getElementById("show-register").addEventListener("click", function () {
  document.getElementById("login-form").classList.add("d-none");
  document.getElementById("register-form").classList.remove("d-none");
});

// Regresar al login
document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("register-form").classList.add("d-none");
  document.getElementById("login-form").classList.remove("d-none");
});

// Habilitar el botón "Siguiente" solo si se selecciona un rol
document.getElementById("role").addEventListener("change", function () {
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = !this.value;
});

// Redirigir al formulario correspondiente según el rol seleccionado
document.getElementById("next-button").addEventListener("click", function () {
  const selectedRole = document.getElementById("role").value;

  if (selectedRole === "student") {
    window.location.href = "student-register.html";
  } else if (selectedRole === "teacher") {
    window.location.href = "teacher-register.html";
  } else if (selectedRole === "company") {
    window.location.href = "company-register.html";
  } else {
    alert("Por favor selecciona un rol válido.");
  }
});

