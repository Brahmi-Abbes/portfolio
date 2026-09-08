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

const scrollProgressBar = document.getElementById('scroll-progress-bar');
if (scrollProgressBar) {
  let ticking = false;
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();
}

// Two deliberate interaction moments — replacing generic hover fades with
// motion that responds to where the cursor actually is. Skipped entirely
// on touch devices and when the user has asked for reduced motion.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal — small, one-time fade for section content as it enters
// view. Reduced motion or no IO support: just show everything immediately.
const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-rise]');
if (revealTargets.length) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach((el) => revealObserver.observe(el));
  }
}
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (!prefersReducedMotion && canHover) {
  // Primary hero CTA leans toward the cursor.
  const magnetic = document.querySelector('.intro-links .text-link-strong');
  if (magnetic) {
    magnetic.addEventListener('mousemove', (event) => {
      const rect = magnetic.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      magnetic.style.transform = `translate(${(x * 0.25).toFixed(1)}px, ${(y * 0.25).toFixed(1)}px)`;
    });
    magnetic.addEventListener('mouseleave', () => {
      magnetic.style.transform = '';
    });
  }

  // Project media frames tilt slightly toward the cursor, like a print
  // held up to look at rather than a flat card.
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}