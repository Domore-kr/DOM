const reveal = document.querySelector('.reveal')

function isVisible(el) {
    const { bottom, top } = reveal.getBoundingClientRect()

    if (bottom < 0 || top < window.innerHeight) {
        el.classList.add('reveal_active')
    }
}

setInterval(() => {
    isVisible(reveal)
}, 1000)