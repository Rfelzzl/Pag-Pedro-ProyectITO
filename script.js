
const cards = document.querySelectorAll('.glass');

const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.9s cubic-bezier(0.2, 1, 0.3, 1)";
    observer.observe(card);
});


window.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.bg-animate');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    bg.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #0d0d1a 0%, #000 100%)`;
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    const boton = this.querySelector('.btn');
    const textoOriginal = boton.textContent;
    
    boton.textContent = 'Enviando...';
    boton.style.background = '#fff';
    boton.style.color = '#000';
    
    
    setTimeout(() => {
        boton.textContent = 'Datos Transmitidos';
        this.reset(); // Limpia el formulario
        
        setTimeout(() => {
            boton.textContent = textoOriginal;
            boton.style.background = 'transparent';
            boton.style.color = '#fff';
        }, 2500);
    }, 1500);
});