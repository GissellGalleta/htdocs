// /js/student-script.js

// Función para validar las contraseñas
function validatePasswords() {
  const passwordInput = document.getElementById("student-password");
  const confirmPasswordInput = document.getElementById("student-password-confirm");
  const passwordStatus = document.getElementById("password-status");

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

// Funciones para manejar la validación de contraseñas y mostrar/ocultar
function handlePasswordValidation() {
  const passwordInput = document.getElementById("student-password");
  const confirmPasswordInput = document.getElementById("student-password-confirm");
  const showPasswordsCheckbox = document.getElementById("show-passwords");
  const passwordStatus = document.getElementById("password-status");

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
handlePasswordValidation();

// Función para manejar los inputs dinámicos
function handleDynamicInput() {
  const input = document.getElementById("technologies-input");
  const container = document.getElementById("technologies-container");
  const addButton = document.getElementById("add-tech-btn");

  // Función para añadir un elemento
  function addItem() {
    const value = input.value.trim();
    if (value) {
      // Crear un chip para el valor ingresado
      const chip = document.createElement("div");
      chip.className = "selected-item badge bg-secondary d-flex align-items-center";
      chip.innerHTML = `
        ${value}
        <button type="button" class="btn-close btn-close-white btn-sm ms-2" aria-label="Close"></button>
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
handleDynamicInput();

// Función para manejar el envío del formulario
function handleFormSubmission() {
  const form = document.getElementById("student-form");
  const passwordError = document.getElementById("password-error");
  const loadingIndicator = document.getElementById("loading-indicator");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Validar las contraseñas
    const isPasswordValid = validatePasswords();

    // Validar otros campos si es necesario (por ejemplo, email, teléfono, etc.)
    // Puedes agregar más validaciones aquí

    if (isPasswordValid) {
      // Ocultar cualquier mensaje de error previo
      passwordError.classList.add("d-none");

      // Mostrar el indicador de carga
      loadingIndicator.classList.remove("d-none");

      // Obtener los valores de los campos
      const email = document.getElementById("student-email").value.trim();
      const nombreCompleto = document.getElementById("student-name").value.trim();
      const numeroTelefonico = document.getElementById("student-phone").value.trim();
      const fechaNacimiento = document.getElementById("student-dob").value;
      const universidad = document.getElementById("student-university").value.trim();
      const semestre = document.getElementById("student-semester").value;

      // Obtener las habilidades
      const habilidades = Array.from(document.querySelectorAll("#technologies-container .selected-item"))
                                .map(item => item.firstChild.textContent.trim());

      // Aquí puedes recopilar todos los datos y enviarlos al backend
      // Por ahora, solo simularemos el envío y redirigiremos al perfil

      // Simulación de envío al backend con un retraso para mostrar el spinner
      setTimeout(() => {
        // Ocultar el indicador de carga
        loadingIndicator.classList.add("d-none");

        // Mostrar mensaje de éxito
        alert("Cuenta creada exitosamente.");

        // Redirigir al perfil del estudiante
        window.location.href = "estudiantes/views/perfil.html";
      }, 2000); // 2 segundos de simulación
    } else {
      // Mostrar mensaje de error si las contraseñas no son válidas
      passwordError.classList.remove("d-none");
    }
  });
}

// Inicializar el manejo del envío del formulario
handleFormSubmission();
