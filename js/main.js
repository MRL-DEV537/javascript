const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Guardar los datos en el localStorage
    localStorage.setItem("User", username);
    localStorage.setItem("Password", password);

    const contenido = document.getElementById("contenido");
    contenido.innerHTML = `<p>Datos guardados en el localStorage.</p>`;
});

// Comprobar si los datos ya están en el localStorage al cargar la página
const storedUsername = localStorage.getItem("User");
const storedPassword = localStorage.getItem("Password");

if (storedUsername && storedPassword) {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = `<p>Usuario: ${storedUsername}`;
}

