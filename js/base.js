
 // Obtén la referencia al elemento ul donde mostrarás la lista de clientes
 const clientesLista = document.getElementById("clientesLista");

 // Verifica si hay clientes almacenados en el localStorage
 if (localStorage.getItem("clientes")) {
     // Obtenemos los clientes del localStorage y los convertimos a un array
     const clientes = JSON.parse(localStorage.getItem("clientes"));

     // Recorremos la lista de clientes y creamos elementos li para mostrarlos en la lista
     clientes.forEach((cliente) => {
         const li = document.createElement("li");
         li.textContent = cliente;
         clientesLista.appendChild(li);
     });
 } else {
     // Si no hay clientes almacenados, muestra un mensaje indicando que no hay clientes.
     const mensaje = document.createElement("p");
     mensaje.textContent = "No hay clientes almacenados en el localStorage.";
     clientesLista.appendChild(mensaje);
 }

 function guardarUsuario(event) {
     if (event.key === "Enter") {
         event.preventDefault(); // Prevenir el envío del formulario por defecto

         const nombreUsuario = document.getElementById("name").value;
         if (nombreUsuario) {
             // Verificar si el campo no está vacío
             let usuarios = [];

             // Verificar si ya hay datos en el localStorage
             if (localStorage.getItem("clientes")) {
                 usuarios = JSON.parse(localStorage.getItem("clientes"));
             }

             usuarios.push(nombreUsuario);

             // Guardar la lista de usuarios en el localStorage
             localStorage.setItem("clientes", JSON.stringify(usuarios));

             // Limpiar el campo de entrada
             document.getElementById("name").value = "";

             // Actualizar la lista de clientes mostrada en la página
             actualizarListaClientes();
         }
     }
 }

 // Función para actualizar la lista de clientes en la página


 // Llama a la función para actualizar la lista de clientes al cargar la página

 document.getElementById("eliminarForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const nombreUsuario = document.getElementById("removeName").value;
    eliminarUsuarioDelLocalStorage("clientes", nombreUsuario);

    // Limpiar el campo de entrada
    document.getElementById("removeName").value = "";
});

function eliminarUsuarioDelLocalStorage(claveLocalStorage, nombre) {
    if (nombre) {
        let datosEnLocalStorage = JSON.parse(localStorage.getItem(claveLocalStorage)) || [];
        const index = datosEnLocalStorage.indexOf(nombre);
        if (index !== -1) {
            datosEnLocalStorage.splice(index, 1);
            localStorage.setItem(claveLocalStorage, JSON.stringify(datosEnLocalStorage));

            // Después de eliminar el usuario, actualiza la lista de clientes
            actualizarListaClientes();
        }
    }
}

function actualizarListaClientes() {
    const clientesLista = document.getElementById("clientesLista");
    const clientes = JSON.parse(localStorage.getItem("clientes"));

    if (clientes && clientes.length > 0) {
        // Limpiar la lista anterior
        clientesLista.innerHTML = "";

        // Crear una lista de elementos li para mostrar los clientes
        clientes.forEach((cliente) => {
            const li = document.createElement("li");
            li.textContent = cliente;
            clientesLista.appendChild(li);
        });
    }
}
