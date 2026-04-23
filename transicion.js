let fondo = document.querySelector('.fondo');
let animacion = false;
let fondo2 = document.querySelector('.fondo2');
const puntoDeInicio2 = fondo2.offsetTop - window.innerHeight;

function updatefondo(){
    let movY = window.scrollY;
    let maxScroll = 400;
    let movimiento = Math.min(movY / maxScroll, 1);
    let escala = 1 + movimiento * 5
    let opacidad = 1 - movimiento;

    fondo.style.transform = `scale(${escala})`;
    fondo.style.opacity = opacidad;



    let animacion2 = (movY - puntoDeInicio2) / maxScroll;
    animacion2 = Math.min(Math.max(animacion2, 0), 1);
    let escala2 = 0.5 + animacion2 * 0.5
    fondo2.style.transform = `scale(${escala2})`;
    fondo2.style.opacity = animacion2;

     animacion = false;

}

window.addEventListener('scroll', () => {


    if (!animacion) {
        animacion = true;
        requestAnimationFrame(updatefondo);
    }  
});

