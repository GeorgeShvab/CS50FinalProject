window.addEventListener('DOMContentLoaded', () => {
    const exitBtn = document.getElementsByClassName('account-leave')[0]

    if (exitBtn) {
        exitBtn.addEventListener('click', (e) => {
            document.cookie = 'Authorization='
            window.location = 'http://localhost:3000/'
        })
    }
})
