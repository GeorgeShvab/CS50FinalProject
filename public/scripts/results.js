window.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.getElementsByClassName('results__delete')[0]

    const testId = window.location.href.split('/').reverse()[1]

    deleteBtn.addEventListener('click', (e) => {
        try {
            fetch(`/api/delete-test/${testId}`).then((res) => {
                if (res.status == 200) {
                    window.location = 'http://localhost:3000/account'
                } else {
                    alert('Помилка')
                }
            })
        } catch (e) {
            alert('Помилка')
        }
    })
})
