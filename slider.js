const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.slider-btn');
const items = document.querySelectorAll('.slider__item');

const sliderTransform = (to) => {
    const sliderWidth = slider.offsetWidth;
    const currentPosition = +slider.style.left.replace('px', '').replace('-', '')

    let i = 0

    if (to === 'right') {
        if (currentPosition === 0) {
            i++
            
        } else if (currentPosition > 0 && currentPosition < sliderWidth * (items.length - 1)) {
            i = currentPosition / sliderWidth + 1
        }
        
    } else {
        if (currentPosition === 0) {
            i = items.length - 1
        } else if (currentPosition > 0) {
            i = currentPosition / sliderWidth - 1
        }
    }

    slider.style.left = `-${sliderWidth * i}px`
}

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (button.classList.contains('slider-btn--left')) {
            sliderTransform('left')
        } else {
            sliderTransform('right')
        }
    })
    
}