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
  
  // Ir al registro completo
  document.getElementById("next-button").addEventListener("click", function () {
    const selectedRole = document.getElementById("role").value;
    if (selectedRole === "student") {
      document.getElementById("register-form").classList.add("d-none");
      document.getElementById("student-register").classList.remove("d-none");
    }
  });

// Elementos de las contraseñas
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

