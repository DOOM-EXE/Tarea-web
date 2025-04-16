// Validación del formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validación básica
            if (!email || !password) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Simular inicio de sesión exitoso
            alert('Inicio de sesión exitoso. Redirigiendo al panel...');
            window.location.href = 'panel.html';
        });
    }
    
    // Validación del formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validaciones básicas
            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            // Simular registro exitoso
            alert('Registro exitoso. Redirigiendo al inicio de sesión...');
            window.location.href = 'index.html';
        });
    }
});