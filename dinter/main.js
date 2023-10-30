// Primer Entrega:

// let nombre = prompt("Ingrese su nombre")

// let contraseña = prompt(nombre + " Ingrese su contraseña")

// if (contraseña === "Muñeco") {
//     alert("Bienvenido " + nombre);
//     let opcion = prompt(`Elija una opcion:
//         1- Controladores de Temperatura
//         2- Temporizadores         
//         3- Dosificadores de Agua
//         Salir`);

//     while (opcion != "salir") {

//         switch (opcion) {
//             case "1":
//                 alert(`
//                  1- NG-2
//                  2- NF-2
//                  3- NL-2
//                 `);
//                 break;
//             case "2":
//                 alert(`
//                  1- TL-2
//                  2- TG-2
//                  3- TW-2`);
//                 break;
//             case "3":
//                 alert(`
//                  1- LF-19
//                  2- CRD`);
//                 break;
//             case "Salir":
//                 alert(`Hasta pronto` +" "+ nombre);
//                 break;
//             default:
//                 alert("Opcion incorrecta, elija nuevamente");
//                 break;
//         }
//         opcion = prompt(`Elija una opcion:
//         1- Controladores de Temperatura
//         2- Temporizadores
//         3- Dosificadores de Agua
//         Salir`);
//     }

// }
// else { alert("Contraseña incorrecta, intente nuevamente"); }




// Segunda Entrega:

let nombre = prompt("Ingrese su nombre");
let contraseña = prompt(nombre + " Ingrese su contraseña");

const productos = {
    "NG-2": {
        nombre: "NG-2",
        funcion: "Control de Temperatura",
        marca: "Dinter",
        precio: 200.00,
        id: 1
    },
    "NF-2": {
        nombre: "NF-2",
        funcion: "Control de Temperatura",
        marca: "Dinter",
        precio: 200.00,
        id: 2
    },
    "NL-2": {
        nombre: "NL-2",
        funcion: "Control de Temperatura",
        marca: "Dinter",
        precio: 200.00,
        id: 3
    },
    "TL-2": {
        nombre: "TL-2",
        funcion: "Temporizador",
        marca: "Dinter",
        precio: 200.00,
        id: 4
    },
    "TG-2": {
        nombre: "TG-2",
        funcion: "Temporizador",
        marca: "Dinter",
        precio: 250.00,
        id: 5
    },
    "TW-2": {
        nombre: "TW-2",
        funcion: "Temporizador",
        marca: "Dinter",
        precio: 250.00,
        id: 6
    },
    "LF-19": {
        nombre: "LF-19",
        funcion: "Dosificador de Agua",
        marca: "Dinter",
        precio: 2000.00,
        id: 7
    },
    "CR-D": {
        nombre: "CR-D",
        funcion: "Dosificador de Agua",
        marca: "Dinter",
        precio: 1500.00,
        id: 8
    }
};



if (contraseña === "neri") {
    alert("Bienvenido " + nombre);

    let carrito = []; // Array para almacenar los productos en el carrito
    let total = 0;
    let contadorItem = 0; // Inicializamos el contador de item

    let opcion = prompt(`Elija una opción:
        1- Controladores de Temperatura
        2- Temporizadores         
        3- Dosificadores de Agua
        4- Ver Carrito
        Salir`);

    while (opcion.toLowerCase() !== "salir") {
        switch (opcion) {
            case "1":
                let productoControlTemperatura = prompt(`Seleccione un producto:
                  NG-2
                  NF-2
                  NL-2
                `);
                switch (productoControlTemperatura) {
                    case "NG-2":
                        carrito.push(`Control de Temperatura: ` + productoControlTemperatura);
                        contadorItem++; // Incrementamos el contador
                        break;
                    case "NF-2":
                        carrito.push(`Control de Temperatura: ` + productoControlTemperatura +" "+ productos.precio);
                        contadorItem++;
                        break;
                    case "NL-2":
                        carrito.push(`Control de Temperatura: ` + productoControlTemperatura);
                        contadorItem++;
                        break;

                    default:
                        alert("El producto no existe")
                        break;
                }
                break;

            case "2":
                let productoTemporizador = prompt(`Seleccione un producto:
                  TL-2
                  TG-2
                  TW-2
                `);
                switch (productoTemporizador) {
                    case "TL-2":
                        carrito.push(`Temporizador: ` + productoTemporizador);
                        contadorItem++;
                        break;

                    case "TG-2":
                        carrito.push(`Temporizador: ` + productoTemporizador);
                        contadorItem++;
                        break;

                    case "TW-2":
                        carrito.push(`Temporizador: ` + productoTemporizador);
                        contadorItem++;
                        break;

                    default:
                        alert("El producto no existe")
                        break;
                }
                break;

            case "3":
                let productoDosificador = prompt(`Seleccione un producto:
                  LF-19
                  CR-D
                `);
                switch (productoDosificador) {
                    case "LF-19":
                        carrito.push(`Dosificador de Agua: ` + productoDosificador);
                        contadorItem++;
                        break;
                    case "CR-D":
                        carrito.push(`Dosificador de Agua: ` + productoDosificador);
                        contadorItem++;
                        break;

                    default:
                        alert("El producto no existe")
                        break;
                }
                break;
            case "4":
                if (carrito.length === 0) {
                    alert("El carrito está vacío.");
                } else {
                    alert(`Productos en el carrito (${contadorItem} item):\n${carrito.join("\n")}`);
                }
                break;
            default:
                alert("Opción incorrecta, elija nuevamente");
                break;
        }
        opcion = prompt(`Elija una opción:
        1- Controladores de Temperatura
        2- Temporizadores
        3- Dosificadores de Agua
        4- Ver Carrito
        Salir`);
    }

    alert(`Gracias por su compra, ${nombre}.\nProductos en su carrito (${contadorItem} item):\n${carrito.join("\n")}`);
} else {
    alert("Contraseña incorrecta, intente nuevamente");
}





