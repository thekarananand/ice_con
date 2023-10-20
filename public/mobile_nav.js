const nav = document.querySelector('#nav')
const nav_toggle = document.querySelector('#nav_toggle')
const blank_div = document.querySelector('#blank_div')

nav_toggle.addEventListener('click', () => {
    const Visible = nav.getAttribute('data-visible')

    if (Visible == "false") {
        nav.setAttribute('data-visible', 'true')
        blank_div.setAttribute('data-visible', 'true')
        nav_toggle.setAttribute('data-expanded', 'true')
    } else {
        nav.setAttribute('data-visible', 'false')
        blank_div.setAttribute('data-visible', 'false')
        nav_toggle.setAttribute('data-expanded', 'false')
    }
})

blank_div.addEventListener('click', () => {
    nav.setAttribute('data-visible', 'false')
    blank_div.setAttribute('data-visible', 'false')
})

