console.log('work')

window.addEventListener("load", () => {
    console.log("load")

    document.querySelector('.header__burger').addEventListener('click', () => {
        document.querySelector('.header__burger').classList.toggle('menu_active')
        document.querySelector('.header__menu').classList.toggle('menu_active')
        document.querySelector('body').classList.toggle('lock')
    })

    document.querySelector('.menu__button').addEventListener('click', () => {
        document.querySelector('.header__burger').classList.remove('menu_active')
        document.querySelector('.header__menu').classList.remove('menu_active')
        document.querySelector('body').classList.remove('lock')
    })
})