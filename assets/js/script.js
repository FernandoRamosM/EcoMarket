const db = require('./db'); // Importar la conexión
function handleLogin(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const _user = document.getElementById('username').value.trim();
    const _pass = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none'; // Resetear el mensaje de error

    // Validar campos vacíos
    if (!_user) {
        errorMessage.textContent = 'Ingrese Usuario';
        errorMessage.style.display = 'block';
        return;
    }else if (!_pass){
        errorMessage.textContent = 'Ingrese contraseña';
        errorMessage.style.display = 'block';
        return;
    }

    // login
    if (_user === 'admin' && _pass === '1234') {
        sessionStorage.setItem('loggedInUser', _user);   // Guardar información de sesión

        // Redirigir 
        window.location.href = "dashboard.html";
    } else {    // Mostrar error si la validación falla
        errorMessage.textContent = 'Credenciales incorrectas.';
        errorMessage.style.display = 'block';
    }
}

// Asignar la función al evento 'submit' del formulario
document.getElementById('loginForm').addEventListener('submit', handleLogin);
