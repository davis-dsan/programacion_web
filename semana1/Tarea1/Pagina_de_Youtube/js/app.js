const contenedor = document.querySelector('#contenedor');
const menu = document.querySelector('#posicion');

document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
    menu.classList.toggle('posicionamiento');

    var a = document.querySelector('#link');
    var b = document.querySelector('#link2');
    a.classList.toggle('existente');
    b.classList.toggle('existente');
    
});

const comprobarAncho = () => {
    if(window.innerWidth <= 768){
        contenedor.classList.remove('active');
    }else{
        contenedor.classList.add('active');
    }
}

comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
})