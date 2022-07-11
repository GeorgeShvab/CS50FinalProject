window.addEventListener('DOMContentLoaded', () => {
    const exitBtn = document.getElementsByClassName('account-leave')[0]

    const menuBtn = document.getElementsByClassName('menu-btn')[0]
    const nav = document.getElementsByClassName('nav')[0]

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active')
    })

    if (exitBtn) {
        exitBtn.addEventListener('click', (e) => {
            document.cookie = 'Authorization='
            window.location = 'http://localhost:3000/'
        })
    }
})
