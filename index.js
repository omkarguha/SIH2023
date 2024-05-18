const slide = document.querySelectorAll(".slides");
var count = 0;
slide.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    count--;
    if (count < 0) {
        count = 3;
    }
    slideImage();
}
const goNext = () => {
    count++;
    if (count > 3) {
        count = 0;
    }
    slideImage();
}
const slideImage = () => {
    slide.forEach(
        (slides) => {
            slides.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
setInterval(()=>{
    count++;
    if (count > 3) {
        count = 0;
    }
    slideImage();
},3500)