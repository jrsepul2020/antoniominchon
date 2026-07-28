document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.className = 'cookie-banner-container';
  banner.innerHTML = `
    <div class="cookie-banner-content">
      <div class="cookie-banner-text">
        <p class="cookie-banner-title">Uso de Cookies</p>
        <p class="cookie-banner-desc">
          Este sitio web utiliza cookies técnicas necesarias y cookies de análisis para garantizar una óptima navegación. Puede aceptar todas las cookies, rechazarlas o consultar nuestra <a href="politica-cookies.html" class="cookie-link">Política de Cookies</a>.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button id="cookie-reject" class="cookie-btn cookie-btn-reject">Rechazar</button>
        <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Aceptar todas</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  setTimeout(() => {
    banner.classList.add('show');
  }, 150);

  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'rejected');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
  }
});
