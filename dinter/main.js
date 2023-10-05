let nombre = prompt("Ingrese su nombre")

let contraseña = prompt(nombre + " Ingrese su contraseña")

if (contraseña === "Muñeco") {
    alert("Bienvenido " + nombre);
    let opcion = prompt(`Elija una opcion:
        1-Controladores de Temperatura
        2-Temporizadores
        3-Dosificadores de Agua`);

    while (opcion != "salir") {

        switch (opcion) {
            case "1":
                console.log("Controladores de Temperatura");
                break;
            case "2":
                console.log("Temporizadores");
                break;
            case "3":
                console.log("Dosificadores de Agua");
                break;                              
            default:
                alert("Opcion incorrecta, elija nuevamente");
                break;         
        }
        opcion = prompt(`Elija una opcion:
        1-Controladores de Temperatura
        2-Temporizadores
        3-Dosificadores de Agua`);
    }

}
else {
    alert("Contraseña incorrecta, intente nuevamente");
}