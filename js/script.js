const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

document.querySelectorAll('.hero-gallery').forEach((gallery) => {
    const slides = gallery.querySelectorAll('.gallery-slide');
    const dots = gallery.querySelectorAll('.dot');

    if (!slides.length || !dots.length) return;

    let currentSlide = 0;
    let autoSlide;

    function showSlide(index, resetTimer = true) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        if (resetTimer) {
            resetAutoSlide();
        }
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);

        autoSlide = setInterval(() => {
            showSlide(currentSlide + 1, false);
        }, 10000);
    }

    resetAutoSlide();

    window.addEventListener('scroll', () => {
        const rect = gallery.getBoundingClientRect();
        const offset = rect.top * 0.25;

        slides.forEach(slide => {
            const img = slide.querySelector('img');

            if (img) {
                img.style.transform = `translateY(${offset}px)`;
            } else {
                slide.style.backgroundPosition =
                    `center calc(20% + ${offset}px)`;
            }
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    let startX = 0;
    let isDragging = false;

    gallery.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    gallery.addEventListener('mouseup', (e) => {
        if (!isDragging) return;

        const diff = startX - e.clientX;

        if (diff > 60) showSlide(currentSlide + 1);
        if (diff < -60) showSlide(currentSlide - 1);

        isDragging = false;
    });

    gallery.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    gallery.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    gallery.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;

        if (diff > 60) showSlide(currentSlide + 1);
        if (diff < -60) showSlide(currentSlide - 1);
    });
});

menuToggle?.addEventListener('click', () => {
    mainNav?.classList.toggle('is-open');
});

document.addEventListener('click', (e) => {
    if (!mainNav || !menuToggle) return;

    const clickedMenu = mainNav.contains(e.target);
    const clickedButton = menuToggle.contains(e.target);

    if (!clickedMenu && !clickedButton) {
        mainNav.classList.remove('is-open');

        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('is-open');
        });
    }
});

document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();

            const currentDropdown = link.parentElement;
            const isOpen = currentDropdown.classList.contains('is-open');

            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('is-open');
            });

            if (!isOpen) {
                currentDropdown.classList.add('is-open');
            }
        }
    });
});
