function obtenerDatos(){
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    // Mostrar los valores en el div con id "resultado"
    document.getElementById('resultado').innerHTML = 
    'Nombre: ' + nombre + '<br>Email: ' + email;

}


/**
 * document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var cel = document.getElementById('cel').value;
    var direccion = document.getElementById('direccion').value;

    // Mostrar los valores en el div con id "resultado"
    document.getElementById('resultado').innerHTML = 
        'Nombre: ' + nombre + '<br>' +
        'Correo electrónico: ' + email + '<br>' +
        'Número de telefono: ' + cel + '<br>' +
        'Dirección: ' + direccion;
 */