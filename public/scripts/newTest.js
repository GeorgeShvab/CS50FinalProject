window.onload = () => {
    const formEl = document.getElementsByClassName('new-test__form')[0]

    const newQueBtn = document.getElementsByClassName('new-test__new-que')[0]

    newQueBtn.addEventListener('click', () => {
        const formItem = document.createElement('div')
        svg =
            '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_45_58)"><g filter="url(#filter0_d_45_58)"><rect x="-2" y="-43" width="26" height="74" rx="13" fill="#FBFBFB"></rect></g><path d="M16.5 21.3125H5.5C4.95299 21.3125 4.42839 21.0952 4.04159 20.7084C3.6548 20.3216 3.4375 19.797 3.4375 19.25V6.1875C3.4375 6.00516 3.50993 5.8303 3.63886 5.70136C3.7678 5.57243 3.94266 5.5 4.125 5.5C4.30734 5.5 4.4822 5.57243 4.61114 5.70136C4.74007 5.8303 4.8125 6.00516 4.8125 6.1875V19.25C4.8125 19.4323 4.88493 19.6072 5.01386 19.7361C5.1428 19.8651 5.31766 19.9375 5.5 19.9375H16.5C16.6823 19.9375 16.8572 19.8651 16.9861 19.7361C17.1151 19.6072 17.1875 19.4323 17.1875 19.25V6.1875C17.1875 6.00516 17.2599 5.8303 17.3889 5.70136C17.5178 5.57243 17.6927 5.5 17.875 5.5C18.0573 5.5 18.2322 5.57243 18.3611 5.70136C18.4901 5.8303 18.5625 6.00516 18.5625 6.1875V19.25C18.5625 19.797 18.3452 20.3216 17.9584 20.7084C17.5716 21.0952 17.047 21.3125 16.5 21.3125V21.3125Z" fill="#101820"></path><path d="M19.25 4.8125H2.75C2.56766 4.8125 2.3928 4.74007 2.26386 4.61114C2.13493 4.4822 2.0625 4.30734 2.0625 4.125C2.0625 3.94266 2.13493 3.7678 2.26386 3.63886C2.3928 3.50993 2.56766 3.4375 2.75 3.4375H19.25C19.4323 3.4375 19.6072 3.50993 19.7361 3.63886C19.8651 3.7678 19.9375 3.94266 19.9375 4.125C19.9375 4.30734 19.8651 4.4822 19.7361 4.61114C19.6072 4.74007 19.4323 4.8125 19.25 4.8125Z" fill="#101820"></path><path d="M13.75 4.8125C13.5677 4.8125 13.3928 4.74007 13.2639 4.61114C13.1349 4.4822 13.0625 4.30734 13.0625 4.125V2.0625H8.9375V4.125C8.9375 4.30734 8.86507 4.4822 8.73614 4.61114C8.6072 4.74007 8.43234 4.8125 8.25 4.8125C8.06766 4.8125 7.8928 4.74007 7.76386 4.61114C7.63493 4.4822 7.5625 4.30734 7.5625 4.125V1.375C7.5625 1.19266 7.63493 1.0178 7.76386 0.888864C7.8928 0.759933 8.06766 0.6875 8.25 0.6875H13.75C13.9323 0.6875 14.1072 0.759933 14.2361 0.888864C14.3651 1.0178 14.4375 1.19266 14.4375 1.375V4.125C14.4375 4.30734 14.3651 4.4822 14.2361 4.61114C14.1072 4.74007 13.9323 4.8125 13.75 4.8125Z" fill="#101820"></path><path d="M11 17.875C10.8177 17.875 10.6428 17.8026 10.5139 17.6736C10.3849 17.5447 10.3125 17.3698 10.3125 17.1875V7.5625C10.3125 7.38016 10.3849 7.2053 10.5139 7.07636C10.6428 6.94743 10.8177 6.875 11 6.875C11.1823 6.875 11.3572 6.94743 11.4861 7.07636C11.6151 7.2053 11.6875 7.38016 11.6875 7.5625V17.1875C11.6875 17.3698 11.6151 17.5447 11.4861 17.6736C11.3572 17.8026 11.1823 17.875 11 17.875Z" fill="#101820"></path><path d="M14.4375 16.5C14.2552 16.5 14.0803 16.4276 13.9514 16.2986C13.8224 16.1697 13.75 15.9948 13.75 15.8125V8.9375C13.75 8.75516 13.8224 8.5803 13.9514 8.45136C14.0803 8.32243 14.2552 8.25 14.4375 8.25C14.6198 8.25 14.7947 8.32243 14.9236 8.45136C15.0526 8.5803 15.125 8.75516 15.125 8.9375V15.8125C15.125 15.9948 15.0526 16.1697 14.9236 16.2986C14.7947 16.4276 14.6198 16.5 14.4375 16.5Z" fill="#101820"></path><path d="M7.5625 16.5C7.38016 16.5 7.2053 16.4276 7.07636 16.2986C6.94743 16.1697 6.875 15.9948 6.875 15.8125V8.9375C6.875 8.75516 6.94743 8.5803 7.07636 8.45136C7.2053 8.32243 7.38016 8.25 7.5625 8.25C7.74484 8.25 7.9197 8.32243 8.04864 8.45136C8.17757 8.5803 8.25 8.75516 8.25 8.9375V15.8125C8.25 15.9948 8.17757 16.1697 8.04864 16.2986C7.9197 16.4276 7.74484 16.5 7.5625 16.5Z" fill="#101820"></path></g><defs><filter id="filter0_d_45_58" x="-7" y="-48" width="36" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_58"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_58" result="shape"></feBlend></filter><clipPath id="clip0_45_58"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>'
        formItem.className = 'new-test__que'
        formItem.innerHTML = `<input type="text" name="queTitle${
            formEl.childElementCount - 2
        }" autocomplete="off" spellcheck="false" class="new-test__que-title" placeholder="Питання" /><div class="new-test__settings"><button type="button" class="new-test__settings-delete">${svg}</button></div>`
        formEl.insertBefore(formItem, newQueBtn)

        setDeleteBtns()
    })

    const setDeleteBtns = () => {
        const settingsToggler = document.getElementsByClassName(
            'new-test__settings-delete'
        )

        Array.from(settingsToggler).forEach((element) => {
            element.addEventListener('click', (e) => {
                Array.from(e.path)
                    .find((el) => el.classList.contains('new-test__que'))
                    .remove()
            })
        })
    }

    setDeleteBtns()
}
