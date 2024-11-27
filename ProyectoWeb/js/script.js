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

// Mostrar el formulario correspondiente según el rol seleccionado
document.getElementById("next-button").addEventListener("click", function () {
  const selectedRole = document.getElementById("role").value;

  // Ocultar el selector de roles
  document.getElementById("register-form").classList.add("d-none");

  // Mostrar el formulario correspondiente al rol seleccionado
  if (selectedRole === "student") {
    document.getElementById("student-register").classList.remove("d-none");
  } else if (selectedRole === "teacher") {
    document.getElementById("teacher-register").classList.remove("d-none");
  } else if (selectedRole === "company") {
    document.getElementById("company-register").classList.remove("d-none");
  } else {
    alert("Por favor selecciona un rol válido.");
  }
});

// Funciones para manejar la validación de contraseñas y mostrar/ocultar
function handlePasswordValidation(passwordId, confirmPasswordId, showPasswordId, statusId) {
  const passwordInput = document.getElementById(passwordId);
  const confirmPasswordInput = document.getElementById(confirmPasswordId);
  const showPasswordsCheckbox = document.getElementById(showPasswordId);
  const passwordStatus = document.getElementById(statusId);

  // Validar que ambas contraseñas coincidan y cumplan con los requisitos
  function validatePasswords() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validar requisitos mínimos de la contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      passwordStatus.textContent =
        "Debe tener al menos 8 caracteres, una letra mayúscula y un número.";
      passwordStatus.style.color = "red";
      return false;
    } else {
      passwordStatus.textContent = "Contraseña segura";
      passwordStatus.style.color = "green";
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword && confirmPassword) {
      passwordStatus.textContent = "Las contraseñas no coinciden.";
      passwordStatus.style.color = "red";
      return false;
    }
    return true;
  }

  // Mostrar/ocultar contraseñas
  showPasswordsCheckbox.addEventListener("change", function () {
    const type = this.checked ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;
  });

  // Validar las contraseñas al escribir
  passwordInput.addEventListener("input", validatePasswords);
  confirmPasswordInput.addEventListener("input", validatePasswords);
}

// Inicializar la validación de contraseñas para el formulario de Estudiantes
handlePasswordValidation("student-password", "student-password-confirm", "show-passwords", "password-status");

// Inicializar la validación de contraseñas para el formulario de Maestros
handlePasswordValidation("teacher-password", "teacher-password-confirm", "teacher-show-passwords", "teacher-password-status");

// Funciones para regresar al selector de roles desde los formularios de registro
// Regresar desde el formulario de estudiante al selector de roles
document.getElementById("back-to-role-selection-student").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("student-register").classList.add("d-none");
  document.getElementById("register-form").classList.remove("d-none");
});

// Regresar desde el formulario de maestro al selector de roles
document.getElementById("back-to-role-selection-teacher").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("teacher-register").classList.add("d-none");
  document.getElementById("register-form").classList.remove("d-none");
});

// Regresar desde el formulario de empresa al selector de roles
document.getElementById("back-to-role-selection-company").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("company-register").classList.add("d-none");
  document.getElementById("register-form").classList.remove("d-none");
});

// Función para manejar los inputs dinámicos
function handleDynamicInput(inputId, containerId, addButtonId) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  const addButton = document.getElementById(addButtonId);

  // Función para añadir un elemento
  function addItem() {
    const value = input.value.trim();
    if (value) {
      // Crear un chip para el valor ingresado
      const chip = document.createElement("div");
      chip.className = "selected-item";
      chip.innerHTML = `
        ${value}
        <button type="button">&times;</button>
      `;
      // Añadir funcionalidad para eliminar el chip
      chip.querySelector("button").addEventListener("click", () => {
        chip.remove();
      });

      container.appendChild(chip);
      input.value = ""; // Limpiar el input
    }
  }

  // Agregar al presionar Enter
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    }
  });

  // Agregar al presionar el botón
  addButton.addEventListener("click", addItem);
}

// Inicializar los inputs dinámicos
handleDynamicInput("titles-input", "titles-container", "add-title-btn");
handleDynamicInput("technologies-input", "technologies-container", "add-tech-btn");
handleDynamicInput("languages-input", "languages-container", "add-language-btn");
handleDynamicInput("teacher-titles-input", "teacher-titles-container", "add-teacher-title-btn");

// Modificar campo Título de egresado para aceptar hasta 5 PDFs
document.getElementById("teacher-degree").setAttribute("multiple", "");
document.getElementById("teacher-degree").setAttribute("max", "5");
