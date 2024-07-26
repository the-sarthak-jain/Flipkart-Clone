// Multiple Items Image Carousel Script ------------------------------------

let items = document.querySelectorAll('.carousel1 .carousel-item1')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// Multiple Items Image Carousel Script 2 ------------------------------------

let items1 = document.querySelectorAll('.carousel2 .carousel-item2')

items1.forEach((el) => {
    const minPerSlide = 4
    let next1 = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next1) {
            // wrap carousel by using first child
            next1 = items1[0]
        }
        let cloneChild = next1.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next1 = next1.nextElementSibling
    }
})