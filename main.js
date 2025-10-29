import slides from './slides/index.js';

function initializePresentation(slideElements) {
    if (!slideElements.length) {
        return;
    }

    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const progressBar = document.getElementById('progress-bar');
    const agendaTracker = document.getElementById('agenda-tracker');
    const agendaItems = document.querySelectorAll('.agenda-item');

    let currentSlide = 0;
    const totalSlides = slideElements.length;

    function showSlide(index) {
        slideElements[currentSlide].classList.remove('active');

        if (index >= totalSlides) {
            currentSlide = totalSlides - 1;
        } else if (index < 0) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        const activeSlide = slideElements[currentSlide];
        activeSlide.classList.add('active');
        updateProgress();
        updateAgendaTracker(activeSlide);
    }

    function updateProgress() {
        const denominator = totalSlides > 1 ? totalSlides - 1 : 1;
        const progressPercentage = (currentSlide / denominator) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function updateAgendaTracker(activeSlide) {
        const agendaIndex = activeSlide.getAttribute('data-agenda-item');

        agendaItems.forEach(item => item.classList.remove('active'));

        if (agendaIndex && agendaIndex !== '0') {
            agendaTracker.style.visibility = 'visible';
            agendaTracker.style.opacity = '1';

            const trackerItem = document.getElementById(`agenda-item-${agendaIndex}`);
            if (trackerItem) {
                trackerItem.classList.add('active');
            }
        } else {
            agendaTracker.style.visibility = 'hidden';
            agendaTracker.style.opacity = '0';
        }
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
            nextSlide();
        } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
            prevSlide();
        }
    });

    slideElements[currentSlide].classList.add('active');
    updateProgress();
    updateAgendaTracker(slideElements[currentSlide]);
}

function mountSlides() {
    const container = document.getElementById('slides-container');
    const slideElements = slides.map(createSlide => {
        const slide = createSlide();
        container.appendChild(slide);
        return slide;
    });

    initializePresentation(slideElements);
}

document.addEventListener('DOMContentLoaded', mountSlides);
