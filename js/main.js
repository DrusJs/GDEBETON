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

    
    const selectButtons = document.querySelectorAll('.select-button')

    selectButtons.forEach((select) => {
        select.addEventListener('click', (e) => {
            e.currentTarget.closest('.select-wrapper').classList.toggle('active')
        })

        const selectItems = select.closest('.select-wrapper').querySelectorAll('.select-dropdown__item')

        selectItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                select.querySelector('.select-value').innerHTML = e.currentTarget.innerHTML
                e.currentTarget.closest('.select-wrapper').classList.toggle('active')
            })
        })
    })

    
});
