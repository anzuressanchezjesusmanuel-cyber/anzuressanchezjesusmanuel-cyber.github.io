function saludarUsuario(nombre) {
    const hora = new Date().getHours();
    let prefijo;

    if (hora < 12) {
        prefijo = "Buenos dias";
    } else if (hora < 19) {
        prefijo = "Buenas tardes";
    }else {
        prefijo = "Buenas noches";
    }

    const mensaje = `${prefijo},${nombre}. !Bienvenido¡`;

    document.getElementById('resultado').textContent = mensaje;
} 