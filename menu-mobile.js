let buttonMenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')
let overMenu = document.getElementById('over-menu')

buttonMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



  