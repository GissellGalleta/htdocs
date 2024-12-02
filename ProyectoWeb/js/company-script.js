// ProyectoWeb/js/company-script.js

// Funciones para manejar la validación de contraseñas y mostrar/ocultar
function handlePasswordValidation() {
  const passwordInput = document.getElementById("company-password");
  const confirmPasswordInput = document.getElementById("company-password-confirm");
  const showPasswordsCheckbox = document.getElementById("show-passwords");
  const passwordStatus = document.getElementById("password-status");
  const passwordError = document.getElementById("password-error");

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
      passwordError.classList.add("d-none");
      return false;
    } else {
      passwordStatus.textContent = "Contraseña segura";
      passwordStatus.style.color = "green";
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword && confirmPassword) {
      passwordError.classList.remove("d-none");
      passwordStatus.textContent = "";
      return false;
    } else {
      passwordError.classList.add("d-none");
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

// Inicializar la validación de contraseñas para el formulario de Empresas
handlePasswordValidation();

// Función para manejar el envío del formulario
function handleFormSubmission() {
  const form = document.getElementById("company-form");
  const passwordInput = document.getElementById("company-password");
  const confirmPasswordInput = document.getElementById("company-password-confirm");
  const passwordError = document.getElementById("password-error");
  const passwordStatus = document.getElementById("password-status");
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
      const email = document.getElementById("company-email").value.trim();
      const nombreEmpresa = document.getElementById("company-name").value.trim();
      const numeroTelefonico = document.getElementById("company-phone").value.trim();
      const fechaFundacion = document.getElementById("company-foundation").value;
      const rfc = document.getElementById("company-rfc").value.trim();
      const direccion = document.getElementById("company-address").value.trim();

      // Aquí puedes recopilar todos los datos y enviarlos al backend
      // Por ahora, solo simularemos el envío y redirigiremos al perfil

      // Simulación de envío al backend con un retraso para mostrar el spinner
      setTimeout(() => {
        // Ocultar el indicador de carga
        loadingIndicator.classList.add("d-none");

        // Mostrar mensaje de éxito
        alert("Cuenta creada exitosamente.");

        // Redirigir al perfil de la empresa
        window.location.href = "empresas/views/perfil.html";
      }, 2000); // 2 segundos de simulación
    } else {
      // Mostrar mensaje de error si las contraseñas no son válidas
      passwordError.classList.remove("d-none");
    }
  });
}

// Función para validar las contraseñas (reutiliza la lógica existente)
function validatePasswords() {
  const passwordInput = document.getElementById("company-password");
  const confirmPasswordInput = document.getElementById("company-password-confirm");
  const passwordStatus = document.getElementById("password-status");
  const passwordError = document.getElementById("password-error");

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validar requisitos mínimos de la contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordStatus.textContent =
      "Debe tener al menos 8 caracteres, una letra mayúscula y un número.";
    passwordStatus.style.color = "red";
    passwordError.classList.add("d-none");
    return false;
  } else {
    passwordStatus.textContent = "Contraseña segura";
    passwordStatus.style.color = "green";
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword && confirmPassword) {
    passwordError.classList.remove("d-none");
    passwordStatus.textContent = "";
    return false;
  } else {
    passwordError.classList.add("d-none");
  }
  return true;
}

// Inicializar el manejo del envío del formulario
handleFormSubmission();
