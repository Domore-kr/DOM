const reveals = Array.from(document.querySelectorAll('.reveal'))

function isVisible(el) {
    el.forEach((e) => {
        const { bottom, top } = e.getBoundingClientRect()
        if (bottom < 0 || top < window.innerHeight) {
            e.classList.add('reveal_active')
        }
    });
}


setInterval(() => {
    isVisible(reveals)
}, 1000)