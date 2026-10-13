// Actualiza automáticamente el año del footer.
document.getElementById('anioActual').textContent = new Date().getFullYear();

// Cierra el menú de Bootstrap cuando se selecciona una sección en celular.
const menu = document.getElementById('menuNavegacion');
menu.querySelectorAll('.nav-link').forEach(enlace => enlace.addEventListener('click', () => {
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

// Aparicion suave al hacer scroll.
if (typeof ScrollReveal !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sr = ScrollReveal({ distance:'24px', duration:750, reset:false });
    sr.reveal('.reveal-hero,.reveal-title,.reveal-card', { origin:'bottom', interval:120 });
    sr.reveal('.reveal-left', { origin:'left' });
    sr.reveal('.reveal-right', { origin:'right' });
}
