(function () {
    new WOW().init();
    const menuBurger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const headerTop = document.querySelector('.header-top');

    menuBurger.addEventListener('click', () => {
        if(menu.style.display === 'block'){
            menu.style.display = 'none';
            menuBurger.classList.remove('menu-burger--active')
        } else {
            headerTop.classList.remove('animate__animated', 'animate__fadeInDown')
            menu.style.display = 'block';
            menuBurger.classList.add('menu-burger--active')
        }
    })

    window.addEventListener('scroll', () => {
        if(menu.style.display === 'block' || document.documentElement.clientWidth < 800){
            if(document.documentElement.scrollTop > 700) {
                menu.style.display = 'none';
                menuBurger.classList.remove('menu-burger--active')
            }
        }
    })
})()