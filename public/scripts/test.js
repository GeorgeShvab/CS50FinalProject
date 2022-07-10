window.onload = () => {
    const textareaEl = document.getElementsByClassName('test__que-textarea')

    Array.from(textareaEl).forEach((element) => {
        element.addEventListener('input', (e) => {
            e.target.style.height = e.target.scrollHeight + 'px'
        })
    })
}
