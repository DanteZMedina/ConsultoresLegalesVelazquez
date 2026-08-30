# Landing Page — Despacho de Abogados

Landing page estática, mobile-first, para un despacho de abogados. Presenta las áreas de
práctica, testimonios, una sección para conocer al abogado a cargo, y un formulario de
contacto que envía la solicitud por WhatsApp.

## Stack

- HTML5 semántico + SEO on-page (Open Graph, Twitter Card, datos estructurados JSON-LD,
  `robots.txt`, `sitemap.xml`)
- CSS3 (variables personalizadas, mobile-first, sin frameworks de utilidades)
- JavaScript vanilla (sin dependencias de build)
- [Bootstrap 5](https://getbootstrap.com/) (grid y componentes base, vía CDN)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (vía CDN)
- Google Fonts: Playfair Display (encabezados) y Lato (texto)

## Estructura del proyecto

```
├── index.html          # Página principal (todas las secciones)
├── css/
│   └── styles.css      # Estilos, variables de la paleta de colores, mobile-first
├── js/
│   └── main.js         # Menú móvil, validaciones de formulario, envío a WhatsApp
├── images/
│   └── logotipo_consultores_legales.png
├── robots.txt
└── sitemap.xml
```

## Cómo ejecutar en local

Es un sitio 100% estático, no requiere instalación de dependencias. Basta con servirlo
con cualquier servidor HTTP simple (abrir el `index.html` directamente también funciona,
salvo por el mapa embebido, que requiere http/https):

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

## Secciones incluidas

- **Navbar**: logo a la izquierda, menú hamburguesa a pantalla completa en móvil, navbar
  horizontal desde escritorio (≥992px).
- **Hero**: eslogan y llamados a la acción ("Solicitar consulta" / "Áreas de práctica").
- **Áreas de Práctica**: tarjetas por especialidad con botón "Consultar".
- **Testimonios**: tarjetas de ejemplo — pendiente reemplazar por reseñas reales.
- **Conoce a tu abogado**: biografía, especialidades, cédula profesional, escuela e
  idiomas. La foto es un placeholder — pendiente reemplazar por la foto real.
- **Contacto**: datos de contacto, mapa embebido de Google Maps, y formulario que arma un
  mensaje de WhatsApp prellenado con los datos capturados.



## Nota

Este repositorio no incluye documentos de levantamiento de requerimientos ni
correspondencia con el cliente, ya que contienen datos personales.
