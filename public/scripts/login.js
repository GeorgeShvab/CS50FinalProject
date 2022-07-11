window.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input')

    const formEl = document.getElementsByClassName('log-reg__form')[0]

    formEl.addEventListener('submit', (e) => {
        e.preventDefault()

        e.target.password.value = md5(passwordInput.value)

        passwordInput.setAttribute('disabled', 'true')

        e.target.submit()
    })
})
