const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      mobileMenu.hidden = true;
    });
  });
}

const galleries = {
  pharmacera: [
    { type: 'video', src: 'assets/videos/pharmacera-demo.mp4', poster: 'assets/images/projects/pharmacera-poster.png', alt: 'Pharmacera demo video' },
    { type: 'image', src: 'assets/images/projects/pharmacera-01.png', alt: 'Pharmacera sale entry screen' },
    { type: 'image', src: 'assets/images/projects/pharmacera-02.png', alt: 'Pharmacera audit log' },
    { type: 'image', src: 'assets/images/projects/pharmacera-03.png', alt: 'Pharmacera users management screen' },
  ],
  devdz: [
    { type: 'video', src: 'assets/videos/devdz-demo.mp4', poster: 'assets/images/projects/devdz-poster.png', alt: 'DevDz demo video' },
    { type: 'image', src: 'assets/images/projects/devdz-01.png', alt: 'DevDz question and comments view' },
    { type: 'image', src: 'assets/images/projects/devdz-02.png', alt: 'DevDz job search view' },
    { type: 'image', src: 'assets/images/projects/devdz-03.png', alt: 'DevDz new post form' },
  ],
};

const lightbox = document.getElementById('lightbox');
const lightboxMedia = document.getElementById('lightbox-media');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
let activeGallery = null;
let activeIndex = 0;
let lastFocusedElement = null;

function renderLightboxMedia() {
  const item = galleries[activeGallery][activeIndex];
  lightboxMedia.innerHTML = '';

  if (item.type === 'video') {
    const video = document.createElement('video');
    video.src = item.src;
    video.poster = item.poster;
    video.controls = true;
    video.autoplay = true;
    video.className = 'lightbox-video';
    lightboxMedia.appendChild(video);
    return;
  }

  const image = document.createElement('img');
  image.src = item.src;
  image.alt = item.alt;
  image.className = 'lightbox-img';
  lightboxMedia.appendChild(image);
}

function openLightbox(gallery, index) {
  if (!galleries[gallery]) return;
  activeGallery = gallery;
  activeIndex = index;
  lastFocusedElement = document.activeElement;
  renderLightboxMedia();
  lightbox.hidden = false;
  lightboxClose.focus();
  document.addEventListener('keydown', handleLightboxKeydown);
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxMedia.innerHTML = '';
  document.removeEventListener('keydown', handleLightboxKeydown);
  if (lastFocusedElement) lastFocusedElement.focus();
}

function moveLightbox(direction) {
  const gallery = galleries[activeGallery];
  activeIndex = (activeIndex + direction + gallery.length) % gallery.length;
  renderLightboxMedia();
}

function handleLightboxKeydown(event) {
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') moveLightbox(1);
  if (event.key === 'ArrowLeft') moveLightbox(-1);
}

document.querySelectorAll('.shot-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => openLightbox(trigger.dataset.gallery, Number(trigger.dataset.index)));
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', () => moveLightbox(-1));
lightboxNext?.addEventListener('click', () => moveLightbox(1));
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });

const copyEmail = document.getElementById('copy-email');
if (copyEmail) {
  copyEmail.addEventListener('click', async () => {
    const email = 'aa.brahmi@ensta.edu.dz';
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement('textarea');
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    const dict = (window.__i18n && window.__i18n.translations[document.documentElement.lang]) || {};
    copyEmail.dataset.justCopied = 'true';
    copyEmail.textContent = dict['contact.copied'] || 'Copied';
    setTimeout(() => {
      delete copyEmail.dataset.justCopied;
      copyEmail.textContent = dict['contact.copyEmail'] || 'Copy email';
    }, 1600);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();