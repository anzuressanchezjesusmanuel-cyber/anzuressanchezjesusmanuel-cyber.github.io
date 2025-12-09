// 1. Referencias a los elementos del DOM (document object Model)
// Buscamos los elementos en el HTML por su ID para poder manipularlos
const loginform = document.getElementById('loginform');
const usuarioinput = document.getElementById('username');
const passinput = document.getElementById('loginform');
const errorMsg = document.getElementById('mensajeError');

// 2. Escuchar al evento de envio (submit)
loginform.addEventListener('submit', function(evento) {
    // previene que el navegador recargue la pagina automaticamente
    evento.preventDefault();

    // 3. capturar los valores escritos por el usuario
    const usuario = usuarioinput.Value;
    const password = passinput.value;

    // 4. validacion (simuacion de Back End)
    // Comprobamos si coiciden los datos
    if(usuario=='alumno' && password=='1234') {
        // Guardamos una bandera del que el usuario entro
        localStorage.setItem('nombreUsuario', usuario);

        //Redireccionamos a la pagina de la aplicacion
        window.location.href = 'felicidades.html';
    } else {
        // Mostramos un mensaje de texto en el parrafo de error 
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
        passinput.value = '';
    }
});