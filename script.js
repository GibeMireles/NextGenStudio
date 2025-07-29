document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave entre secciones
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Manejo del formulario
  const form = document.querySelector('.contact-form');
  const mensaje = document.getElementById('mensaje-formulario');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      mensaje.textContent = "⏳ Enviando...";
      mensaje.className = "mensaje-formulario enviando";
      mensaje.style.display = 'block';

      const formData = new FormData(form);

      fetch('https://script.google.com/macros/s/AKfycbx3GrbP-DzRmKfPah_yQHjIXsXeq7H5I3qTpXWyP6VFc-Y1qLv7bZWKfl8R7jsIKQ81/exec', {
        method: "POST",
        body: formData
      })
      .then(() => {
        mensaje.className = "mensaje-formulario success";
        mensaje.textContent = "✅ Formulario enviado correctamente. Gracias por registrarte.";
        form.reset();

        setTimeout(() => {
          mensaje.style.display = 'none';
        }, 5000);
      })
      .catch(() => {
        mensaje.className = "mensaje-formulario error";
        mensaje.textContent = "❌ Hubo un problema al enviar tu información. Intenta de nuevo.";
      });
    });
  }
});
