// Funciones para manejar la validación de contraseñas y mostrar/ocultar
function handlePasswordValidation() {
    const passwordInput = document.getElementById("student-password");
    const confirmPasswordInput = document.getElementById("student-password-confirm");
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
  handleDynamicInput();
  