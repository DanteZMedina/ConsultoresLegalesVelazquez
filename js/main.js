document.addEventListener('DOMContentLoaded', function () {

  /* ============== NAVBAR: sombra al hacer scroll ============== */
  var navbar = document.getElementById('siteNavbar');

  function updateNavbarShadow() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  updateNavbarShadow();
  window.addEventListener('scroll', updateNavbarShadow);

  /* ============== MENÚ MÓVIL A PANTALLA COMPLETA ============== */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileMenuClose = document.getElementById('mobileMenuClose');
  var mobileLinks = document.querySelectorAll('.mobile-menu a');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenuClose.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ============== ÁREA PRECARGADA DESDE "CONSULTAR" ============== */
  var areaSelect = document.getElementById('area');
  document.querySelectorAll('.area-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      var area = link.getAttribute('data-area');
      if (areaSelect && area) {
        areaSelect.value = area;
      }
    });
  });

  /* ============== TELÉFONO: SOLO NÚMEROS ============== */
  var telefonoInput = document.getElementById('telefono');
  telefonoInput.addEventListener('input', function () {
    telefonoInput.value = telefonoInput.value.replace(/\D/g, '').slice(0, 10);
  });
  telefonoInput.addEventListener('keypress', function (e) {
    if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
  telefonoInput.addEventListener('paste', function (e) {
    var pasted = (e.clipboardData || window.clipboardData).getData('text');
    e.preventDefault();
    telefonoInput.value = (telefonoInput.value + pasted.replace(/\D/g, '')).slice(0, 10);
  });

  /* ============== FORMULARIO DE CONTACTO -> WHATSAPP ============== */
  var contactoForm = document.getElementById('contactoForm');
  var whatsappNumero = '5215518187433';

  contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!contactoForm.checkValidity()) {
      contactoForm.reportValidity();
      return;
    }

    var nombre = document.getElementById('nombre').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var area = document.getElementById('area').value || 'No especificada';
    var descripcion = document.getElementById('descripcion').value.trim();

    var mensaje =
      'Hola, mi nombre es ' + nombre + '.\n' +
      'Teléfono: ' + telefono + '\n' +
      'Correo: ' + correo + '\n' +
      'Área de interés: ' + area + '\n' +
      'Descripción de mi caso: ' + descripcion;

    var url = 'https://wa.me/' + whatsappNumero + '?text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
  });

  /* ============== AÑO EN EL FOOTER ============== */
  var footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});
