const rotator = Array.from(document.querySelectorAll('.rotator__case'))
let activeIndex = 0

setInterval(() => {
    rotator.forEach((el, index) => {
        if (index === activeIndex) {
            el.classList.add('rotator__case_active')
        } else {
            el.classList.remove('rotator__case_active')
        }
    })

    activeIndex++
    if (activeIndex >= rotator.length) {
        activeIndex = 0
    }
}, 1000)
