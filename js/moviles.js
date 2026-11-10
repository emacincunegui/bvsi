document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       GALERÍA AUTOMÁTICA DE MÓVILES
       ========================================== */

    document.querySelectorAll('.mobile-hero').forEach(gallery => {

        const slides = Array.from(
            gallery.querySelectorAll('.gallery-slide')
        );

        const dotsContainer = gallery.querySelector('.gallery-dots');

        if (!slides.length || !dotsContainer) return;

        let currentSlide = 0;
        let autoSlide = null;

        // Generar los indicadores automáticamente

        dotsContainer.innerHTML = '';

        slides.forEach((slide, index) => {

            const dot = document.createElement('button');

            dot.type = 'button';
            dot.className = 'dot';

            dot.setAttribute(
                'aria-label',
                `Ver imagen ${index + 1}`
            );

            dotsContainer.appendChild(dot);
        });

        const dots = Array.from(
            dotsContainer.querySelectorAll('.dot')
        );


        /* MOSTRAR UNA FOTOGRAFÍA */

        function showSlide(index, resetTimer = true) {

            currentSlide =
                (index + slides.length) % slides.length;

            slides.forEach((slide, i) => {

                slide.classList.toggle(
                    'active',
                    i === currentSlide
                );

            });

            dots.forEach((dot, i) => {

                dot.classList.toggle(
                    'active',
                    i === currentSlide
                );

            });

            if (resetTimer) {
                resetAutoSlide();
            }
        }


        /* REINICIAR EL TEMPORIZADOR */

        function resetAutoSlide() {

            clearInterval(autoSlide);

            if (slides.length <= 1) return;

            autoSlide = setInterval(() => {

                showSlide(currentSlide + 1, false);

            }, 10000);

        }


        /* CLIC EN LOS INDICADORES */

        dots.forEach((dot, index) => {

            dot.addEventListener('click', () => {

                showSlide(index);

            });

        });


        /* DESLIZAR CON MOUSE O DEDO */

        let startX = null;

        gallery.addEventListener('pointerdown', (event) => {

            if (event.target.closest('.gallery-dots')) {
                return;
            }

            startX = event.clientX;

        });

        gallery.addEventListener('pointerup', (event) => {

            if (startX === null) return;

            const diff = startX - event.clientX;

            if (diff > 60) {
                showSlide(currentSlide + 1);
            }

            if (diff < -60) {
                showSlide(currentSlide - 1);
            }

            startX = null;

        });

        gallery.addEventListener('pointercancel', () => {
            startX = null;
        });

        gallery.addEventListener('pointerleave', (event) => {

            if (event.pointerType === 'mouse') {
                startX = null;
            }

        });


        /* INICIALIZAR GALERÍA */

        showSlide(0);

    });


    /* ==========================================
       VISOR DE FOTOGRAFÍAS DE LOS MÓVILES
       ========================================== */

    const cards = document.querySelectorAll(
        '.mobile-page .station-mobile-card[data-photo]'
    );

    if (!cards.length) return;


    /* CREAR EL VISOR */

    const lightbox = document.createElement('div');

    lightbox.className = 'mobile-lightbox';

    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute(
        'aria-label',
        'Fotografía ampliada del móvil'
    );

   lightbox.innerHTML = `
    <button
        type="button"
        class="mobile-lightbox-close"
        aria-label="Cerrar fotografía">
        &times;
    </button>

    <figure class="mobile-lightbox-figure">
        <img src="" alt="">
        <figcaption class="mobile-lightbox-caption"></figcaption>
    </figure>
    `;

    
document.body.appendChild(lightbox);

// Imagen del móvil
const lightboxImage = lightbox.querySelector(
    '.mobile-lightbox-figure img'
);

// Leyenda debajo de la fotografía
const lightboxCaption = lightbox.querySelector(
    '.mobile-lightbox-caption'
);

// Botón para cerrar el visor
const closeButton = lightbox.querySelector(
    '.mobile-lightbox-close'
);



    /* ABRIR FOTOGRAFÍA */

    
function openPhoto(card) {

    const photo = card.dataset.photo;

    if (!photo) return;

    previousFocus = document.activeElement;

    const title = card.querySelector('h3');
    const model = card.querySelector('.station-mobile-model');

    const mobileNumber = title
        ? title.textContent.trim()
        : 'MÓVIL';

    const mobileModel = model
        ? model.textContent.trim()
        : '';

    lightboxImage.src = photo;

    lightboxImage.alt = `Fotografía del ${mobileNumber}`;

    lightboxCaption.textContent =
        `${mobileNumber} - ${mobileModel}`;

    lightbox.classList.add('active');

    document.body.style.overflow = 'hidden';

    closeButton.focus();
}



    /* CERRAR FOTOGRAFÍA */

    function closePhoto() {

        lightbox.classList.remove('active');

        lightboxImage.removeAttribute('src');

        document.body.style.overflow = '';

        if (previousFocus && previousFocus.focus) {
            previousFocus.focus();
        }

    }


    /* EVENTOS DE LAS TARJETAS */

    cards.forEach(card => {

        // Activación con mouse

        card.addEventListener('click', () => {

            openPhoto(card);

        });

        // Activación mediante teclado

        card.addEventListener('keydown', event => {

            if (
                event.key === 'Enter' ||
                event.key === ' '
            ) {

                event.preventDefault();

                openPhoto(card);

            }

        });

    });


    /* BOTÓN CERRAR */

    closeButton.addEventListener('click', closePhoto);


    /* CERRAR AL TOCAR EL FONDO */

    lightbox.addEventListener('click', event => {

        if (event.target === lightbox) {
            closePhoto();
        }

    });


    /* CONTROLES DEL TECLADO */

    document.addEventListener('keydown', event => {

        if (!lightbox.classList.contains('active')) {
            return;
        }

        if (event.key === 'Escape') {

            closePhoto();

        }

        // Mantener el foco dentro del visor

        if (event.key === 'Tab') {

            event.preventDefault();

            closeButton.focus();

        }

    });

});
