import{barcelona, roma, paris, londres} from './ciudades.js'

let enlaces = document.querySelectorAll('a') //consulta de todos los selectores 'a' guardados en la variable 'enlaces'
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
//Agregar evento click a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //Remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //Agregar active a la clase que corresponde
        this.classList.add('active');

        //Obtener el contenido
        let contenido = obtenerContenido(this.textContent)
        
        //Mostrar contenido
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo 
        parrafoElemento.innerHTML = contenido.parrafo 
        precioElemento.innerHTML = contenido.precio 
    });
});

//Traer la informacion
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Parìs' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}
