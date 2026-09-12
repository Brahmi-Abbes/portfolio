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

// Contact form — submits to FormSubmit.co (a hosted form endpoint) so no
// backend or database is needed. Falls back to a normal page-load POST if
// fetch fails; the honeypot field quietly drops bot submissions.
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const formStatus = contactForm.querySelector('.form-status');
  const formSubmit = contactForm.querySelector('.form-submit');
  const honeypot = contactForm.querySelector('input[name="_honey"]');

  contactForm.addEventListener('submit', async (event) => {
    if (honeypot && honeypot.value) return; // bot: let it silently fail
    if (!contactForm.checkValidity()) return; // let native validation UI show

    event.preventDefault();
    const dict = (window.__i18n && window.__i18n.translations[document.documentElement.lang]) || {};

    formSubmit.disabled = true;
    if (formStatus) {
      formStatus.dataset.state = 'sending';
      formStatus.textContent = dict['contact.form.sending'] || 'Sending…';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        contactForm.reset();
        if (formStatus) {
          formStatus.dataset.state = 'success';
          formStatus.textContent = dict['contact.form.success'] || "Thanks — I'll get back to you soon.";
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      if (formStatus) {
        formStatus.dataset.state = 'error';
        formStatus.textContent = dict['contact.form.error'] || 'Something went wrong. Try emailing me directly instead.';
      }
    } finally {
      formSubmit.disabled = false;
    }
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
}

// Project cards fan out in shallow depth, like a hand of cards, and can be
// dragged (mouse or touch) to bring the next one forward. Prev/next buttons
// and dots give the same control without a pointer. The base CSS (no
// "is-ready" class) is a plain stacked list, so if this throws for any
// reason, every project stays fully visible and reachable regardless.
(function initProjectStack() {
  const stack = document.querySelector('[data-project-stack]');
  if (!stack) return;

  const track = stack.querySelector('.project-stack-track');
  const cards = Array.from(track.querySelectorAll('.project-card'));
  const viewport = stack.querySelector('.project-stack-viewport');
  const dots = Array.from(stack.querySelectorAll('[data-stack-dot]'));
  const prevBtn = stack.querySelector('[data-stack-prev]');
  const nextBtn = stack.querySelector('[data-stack-next]');
  if (cards.length < 2) return; // nothing to fan with 0-1 projects

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PEEK = 0.62; // fraction of card width each neighbour is offset by — a "good chunk" peek

  let active = 0;
  let dragOffset = 0;
  let dragStartX = null;

  const cardWidth = () => cards[0].getBoundingClientRect().width || 400;

  function render(animate) {
    const w = cardWidth();
    cards.forEach((card, i) => {
      const raw = (i - active) + dragOffset / w;
      const dist = Math.abs(raw);
      const clamped = Math.max(-3, Math.min(3, raw));
      const x = clamped * w * PEEK;
      const y = Math.min(dist, 3) * 10;
      const rot = clamped * 6;
      const scale = Math.max(0.82, 1 - dist * 0.09);
      const z = -dist * 70;
      card.style.transition = animate && !reduceMotion
        ? 'transform .5s cubic-bezier(.16,1,.3,1), opacity .4s ease'
        : 'none';
      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rot}deg) scale(${scale})`;
      card.style.zIndex = String(200 - Math.round(dist * 10));
      card.style.opacity = dist > 2.4 ? '0' : '1';
      const isActive = i === active;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      card.querySelectorAll('a, button, video, summary').forEach((el) => {
        el.tabIndex = isActive ? 0 : -1;
      });
    });
    dots.forEach((dot, i) => dot.setAttribute('aria-selected', String(i === active)));
    if (viewport) {
      viewport.style.transition = animate && !reduceMotion ? 'height .4s ease' : 'none';
      viewport.style.height = `${cards[active].offsetHeight}px`;
    }
  }

  function goTo(index) {
    const nextIndex = Math.max(0, Math.min(cards.length - 1, index));
    if (nextIndex !== active) {
      const outgoingVideo = cards[active].querySelector('.project-video');
      if (outgoingVideo) outgoingVideo.pause();
    }
    active = nextIndex;
    dragOffset = 0;
    render(true);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(active - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(active + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (i !== active) goTo(i);
    });
  });

  track.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button, a, summary, video')) return;
    dragStartX = event.clientX;
    dragOffset = 0;
    track.setPointerCapture(event.pointerId);
    track.classList.add('is-dragging');
  });

  track.addEventListener('pointermove', (event) => {
    if (dragStartX === null) return;
    dragOffset = event.clientX - dragStartX;
    render(false);
  });

  function endDrag() {
    if (dragStartX === null) return;
    const w = cardWidth();
    const threshold = w * 0.16;
    if (dragOffset > threshold) goTo(active - 1);
    else if (dragOffset < -threshold) goTo(active + 1);
    else {
      dragOffset = 0;
      render(true);
    }
    dragStartX = null;
    track.classList.remove('is-dragging');
  }

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  stack.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goTo(active - 1);
    if (event.key === 'ArrowRight') goTo(active + 1);
  });

  window.addEventListener('resize', () => render(false));

  stack.classList.add('is-ready');
  render(false);
}());