const images = document.querySelectorAll('.preview');
let currentIndex = null;

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        if (img.classList.contains('enlarged')) {
            img.classList.remove('enlarged');
            currentIndex = null;
        } else {
            images.forEach(i => i.classList.remove('enlarged'));
            img.classList.add('enlarged');
            currentIndex = index;
        }
    });
});
document.addEventListener('keydown', function(e) {
    if (currentIndex !== null) {
        if (e.key === 'ArrowRight') {
            images[currentIndex].classList.remove('enlarged');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('enlarged');
        } else if (e.key === 'ArrowLeft') {
            images[currentIndex].classList.remove('enlarged');
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add('enlarged');
        }
    }
});
