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
                alert(`
                 1- NG-2
                 2- NF-2
                 3- NL-2
                `);
                break;
            case "2":
                alert(`
                 1- TL-2
                 2- TG-2
                 3- TW-2`);
                break;
            case "3":
                alert(`
                 1- LF-19
                 2- CRD`);
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