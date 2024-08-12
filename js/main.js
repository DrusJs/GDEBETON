document.addEventListener("DOMContentLoaded", () => {
    const mapTabs = document.querySelectorAll('.map-section .tab-button')
    let activeMapTab = document.querySelector('.map-section .tab-button.tab-button--active')

    if (mapTabs.length) {
        mapTabs.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                activeMapTab.classList.remove('tab-button--active')
                e.currentTarget.classList.add('tab-button--active')
                activeMapTab = e.currentTarget
            })
        })
    }

    const burgerButton = document.querySelector('.burger__button')
    const navMenu = document.querySelector('.nav-menu ')

    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('active')
    })
});
