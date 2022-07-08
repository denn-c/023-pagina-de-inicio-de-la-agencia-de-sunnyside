const $boton = document.querySelector('.navegacion__menu')
const $menu = document.querySelector('.navegacion__lista')

$boton.addEventListener('click', e =>{
    $menu.classList.toggle('navegacion__lista--activo')
})