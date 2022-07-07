window.onload = () => {
    const passwordInput = document.getElementById('password-input')
    const passwordConfiramtionInput = document.getElementById(
        'password-confirmation-input'
    )
    const passwordInputHidden = document.querySelector('[name=password]')
    const passwordConfiramtionInputHidden = document.querySelector(
        '[name=passwordConfirmation]'
    )
    const formEl = document.getElementsByClassName('log-reg__form')[0]

    formEl.addEventListener('submit', (e) => {
        e.preventDefault()

        e.target.password.value = md5(passwordConfiramtionInput.value)
        e.target.passwordConfirmation.value = md5(passwordInput.value)

        passwordInput.setAttribute('disabled', 'true')
        passwordConfiramtionInput.setAttribute('disabled', 'true')

        e.target.submit()
    })
}
