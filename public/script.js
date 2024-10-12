let slides = document.querySelectorAll('.imgslideshow');
let n = 0;  // Am schimbat `n` la 0 pentru a începe cu primul slide
let timeout;

window.onload = function() {
    showslides();
}

function showslides() {
    slides.forEach((slide) => {
        slide.style.opacity = '0'; // Ascunde toate slide-urile
    });

    slides[n].style.opacity = '1'; // Afișează slide-ul curent

    // Treci la următorul slide după 12 secunde
    timeout = setTimeout(() => {
        n = (n + 1) % slides.length; // Incrementare circulară
        showslides();
    }, 12000);
}

// Săgeata stângă - Trecere la slide-ul anterior
let sageatastanga = document.querySelector('.stanga');
sageatastanga.addEventListener('click', () => {
    if (timeout) clearTimeout(timeout); // Oprește slideshow-ul automat
    n = (n - 1 + slides.length) % slides.length; // Decrementare circulară
    showslides();
});

// Săgeata dreaptă - Trecere la slide-ul următor
let sageatadreapta = document.querySelector('.dreapta');
sageatadreapta.addEventListener('click', () => {
    if (timeout) clearTimeout(timeout); // Oprește slideshow-ul automat
    n = (n + 1) % slides.length; // Incrementare circulară
    showslides();
});
