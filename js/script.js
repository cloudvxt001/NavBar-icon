//slide show
let slides = document.querySelectorAll('.slide');
        let index = 0;
        function showSlide() {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }
        setInterval(showSlide, 5000);