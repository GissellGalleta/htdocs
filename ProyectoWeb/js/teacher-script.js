// Funciones para manejar la validación de contraseñas y mostrar/ocultar
function handlePasswordValidation() {
    const passwordInput = document.getElementById("teacher-password");
    const confirmPasswordInput = document.getElementById("teacher-password-confirm");
    const showPasswordsCheckbox = document.getElementById("show-passwords");
    const passwordStatus = document.getElementById("password-status");
  
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
  
  // Inicializar la validación de contraseñas para el formulario de Profesores
  handlePasswordValidation();
  