//Iniciamos el sistema de logeo y verificación de su password


let enterUser = prompt("Ingrese su usuario")
while (true) {
    let enterPassword = prompt("Ingrese su contraseña")
    let passwordx2 = prompt("Vuelva a ingresar su contraseña")
    if(passwordx2 != enterPassword) {
        alert("Ingreso una contraseña incorrecta.")
    } else {
        alert(`Bienvenido ${enterUser}`)
        break;
    }
}

// Fin

// Variables

let precios = {
    remeraPrice: "2500",
    pantalonPrice: "5000",
    buzoPrice: "10000"
}

let remera = "Remera";
let pantalon = "Pantalon";
let buzo = "Buzo";
let compra = confirm("Desea comprar este objeto?")

// Fin


//Bucle para selecciónar producto, obtener su nombre y precio, en caso de selecciónar un incorrecto un mensaje de error y volver a cargar el bucle. Si sale true tira un breake.

while (true) {
    let ingresarProducto = prompt("Ingrese su producto elegido: remera, buzo, pantalon")
    if (ingresarProducto === remera) {
        alert(`Su producto elegido es ${ingresarProducto} y su precio es ${precios.remeraPrice}`);
        if (compra === true) {
            console.log(`${enterUser} hizo la compra de ${ingresarProducto} por un total de ${precios.remeraPrice}`)
        }
        break;
    } else if (ingresarProducto === pantalon) {
        alert(`Su producto elegido es ${ingresarProducto} y su precio es ${precios.pantalonPrice}`);
        if (compra === true) {
            console.log(`${enterUser} hizo la compra de ${ingresarProducto} por un total de ${precios.pantalonPrice}`)
        }
        break;
    } else if (ingresarProducto === buzo) {
        alert(`Su producto elegido es ${ingresarProducto} y su precio es ${precios.buzoPrice}`);
        if (compra === true) {
            console.log(`${enterUser} hizo la compra de ${ingresarProducto} por un total de ${precios.buzoPrice}`)
        }
        break;
    } else {
        alert("Producto no encontrado");
    }
}

// Fin