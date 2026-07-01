/* ==========================================================================
   SOFTWARE SWAFT — CINEMATIC INTERACTIVE ENGINE (main.js)
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Initialize all interactive engines
  initLenis(prefersReducedMotion);
  initGSAPAnimations(prefersReducedMotion);
  initTiltEffect(prefersReducedMotion);
  initMagneticButtons(prefersReducedMotion);
  initTestimonialSlider();
  initMobileMenu();
  initFormInteractions();
  initContactForm();
});
/* ==========================================================================
   1. Lenis Smooth Scroll Engine
   ========================================================================== */
let lenisEngine = null;
function initLenis(reducedMotion) {
  if (reducedMotion || typeof Lenis === 'undefined') return;
  lenisEngine = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom cinematic ease-out
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  // Connect Lenis to requestAnimationFrame
  function raf(time) {
    lenisEngine.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // Sync GSAP ScrollTrigger with Lenis
  lenisEngine.on('scroll', ScrollTrigger.update);
  
  gsap.ticker.add((time) => {
    lenisEngine.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);
}
/* ==========================================================================
   2. Custom Cinematic Cursor Engine
   ========================================================================== */
function initCustomCursor(reducedMotion) {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');
  
  if (reducedMotion || !cursor || !follower) return;
  // Track mouse coordinates
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instant cursor placement
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });
  // Interpolated follower movement for smooth lag-behind effect
  function animateFollower() {
    // Easing formula: current_pos += (target_pos - current_pos) * speed
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);
  // Add hover state triggers
  const hoverElements = 'a, button, input, textarea, .magnetic, .service-row, .portfolio-card, .slider-arrow, .menu-toggle';
  document.querySelectorAll(hoverElements).forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}
/* ==========================================================================
   3. GSAP & ScrollTrigger Animations
   ========================================================================== */
function initGSAPAnimations(reducedMotion) {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  // --- Dynamic Navbar Control ---
  const nav = document.getElementById('mainNav');
  let lastScrollY = window.scrollY;
  if (nav) {
    // Show nav on page load after a tiny delay
    gsap.delayedCall(0.5, () => {
      nav.classList.remove('navbar-hidden');
    });
    ScrollTrigger.create({
      start: 'top -80px',
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          // Scrolling Down -> Hide Navbar
          nav.classList.add('navbar-hidden');
        } else {
          // Scrolling Up -> Show Navbar
          nav.classList.remove('navbar-hidden');
          if (currentScrollY > 50) {
            nav.style.background = 'rgba(5, 5, 8, 0.85)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
          } else {
            nav.style.background = 'rgba(5, 5, 8, 0.5)';
            nav.style.boxShadow = 'none';
          }
        }
        lastScrollY = currentScrollY;
      }
    });
    // Active Section Indicator Link Update
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 40%',
        end: 'bottom 40%',
        onEnter: () => updateActiveNavLink(section.id),
        onEnterBack: () => updateActiveNavLink(section.id)
      });
    });
  }
  function updateActiveNavLink(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      }
    });
  }
  if (reducedMotion) return; // Skip structural motion if user requested reduced motion
  // --- Hero Dramatic Entrance Sequence ---
  const heroTL = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
  heroTL.to('.badge-reveal', { opacity: 1, y: 0, duration: 1.4, ease: 'back.out(1.4)', delay: 0.2 })
        .to('.line-reveal', { opacity: 1, y: 0, stagger: 0.15 }, '-=1.0')
        .to('.lead-reveal', { opacity: 1, y: 0 }, '-=0.9')
        .to('.action-reveal', { opacity: 1, y: 0 }, '-=0.8')
        .to('.scrolling-metadata, .student-note-banner, .scroll-indicator', { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 }, '-=0.5');
  // Slow Zoom/Movement on Scroll for Hero Content
  gsap.to('.hero-content', {
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    yPercent: 30,
    opacity: 0,
    scale: 0.95
  });
  // Parallax on Glowing Orbs on Scroll
  gsap.to('.orb-1', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5
    },
    y: '-15%',
    x: '10%'
  });
  gsap.to('.orb-2', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    },
    y: '15%',
    x: '-10%'
  });
  // --- Section Reveal Orchestrator ---
  
  // Left Reveals (e.g. About details)
  document.querySelectorAll('.reveal-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  });
  // Right Reveals (e.g. Stats / Form)
  document.querySelectorAll('.reveal-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  });
  // Staggered Cards/Boxes Reveal
  document.querySelectorAll('.reveal-card').forEach((el, index) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: (index % 4) * 0.15, // Reset delay cycle every 4 items in standard grid layouts
      ease: 'power2.out'
    });
  });
  // General upward fades
  document.querySelectorAll('.reveal-up').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out'
    });
  });
  // --- Process Timeline Interactive Progress ---
  
  // Timeline path reveal
  gsap.fromTo('.timeline-line', 
    { scaleY: 0 },
    {
      scaleY: 1,
      transformOrigin: 'top center',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true
      }
    }
  );
  // Timeline items reveal left and right
  document.querySelectorAll('.timeline-item').forEach(item => {
    const isLeft = item.classList.contains('reveal-timeline-left');
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
  });
  // --- Dynamic Stats Counter Engine ---
  const statNumbers = document.querySelectorAll('[data-target]');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'), 10);
    const counterObj = { val: 0 };
    
    gsap.to(counterObj, {
      val: target,
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%'
      },
      duration: 2,
      ease: 'power1.out',
      onUpdate: () => {
        stat.innerText = Math.floor(counterObj.val) + (target === 35999 ? '+' : '');
        if (target === 12 && Math.floor(counterObj.val) === 12) {
          stat.innerText = '12+';
        }
        if (target === 4 && stat.innerText === '4') {
          stat.innerText = '4+';
        }
      }
    });
  });
  // --- Dynamic Progress Bar ---
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progBar = document.getElementById('progressBar');
    if (progBar) progBar.style.width = scrolled + "%";
  });
}
/* ==========================================================================
   4. 3D Hover Card Tilt Engine
   ========================================================================== */
function initTiltEffect(reducedMotion) {
  const cards = document.querySelectorAll('[data-tilt]');
  if (reducedMotion || cards.length === 0) return;
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to card
      const y = e.clientY - rect.top;  // Mouse Y relative to card
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate rotation angles (-10 to 10 degrees)
      const rotateX = ((y / height) - 0.5) * -15;
      const rotateY = ((x / width) - 0.5) * 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      
      // Dynamic internal lighting flare
      const flare = card.querySelector('.avatar-glow, .portfolio-backdrop');
      if (flare) {
        const percentX = (x / width) * 100;
        const percentY = (y / height) * 100;
        flare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 80%)`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
      
      const flare = card.querySelector('.avatar-glow, .portfolio-backdrop');
      if (flare) {
        flare.style.background = '';
      }
    });
  });
}
/* ==========================================================================
   5. Interactive Magnetic Element Controller
   ========================================================================== */
function initMagneticButtons(reducedMotion) {
  const magneticItems = document.querySelectorAll('.magnetic');
  if (reducedMotion || magneticItems.length === 0) return;
  magneticItems.forEach(item => {
    const strength = parseInt(item.getAttribute('data-strength') || '15', 10);
    
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - (rect.width / 2);
      const y = e.clientY - rect.top - (rect.height / 2);
      
      // Move the button target slightly towards mouse
      gsap.to(item, {
        x: x * (strength / 100),
        y: y * (strength / 100),
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Inside text or icon moves even more for a layered 3D depth effect
      const child = item.querySelector('span, i');
      if (child) {
        gsap.to(child, {
          x: x * ((strength * 1.5) / 100),
          y: y * ((strength * 1.5) / 100),
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });
    item.addEventListener('mouseleave', () => {
      // Return smoothly to base coordinates
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.2, 0.4)'
      });
      
      const child = item.querySelector('span, i');
      if (child) {
        gsap.to(child, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1.2, 0.4)'
        });
      }
    });
  });
}
/* ==========================================================================
   6. Testimonial Slider Carousel
   ========================================================================== */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  
  if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;
  let currentIndex = 0;
  const slideCount = cards.length;
  function updateSliderPosition() {
    gsap.to(track, {
      xPercent: -currentIndex * 100,
      duration: 0.8,
      ease: 'power3.inOut'
    });
  }
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSliderPosition();
  });
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSliderPosition();
  });
  // Optional: Auto slide every 8 seconds
  let autoSlideTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSliderPosition();
  }, 8000);
  // Pause auto-sliding on manual controls interaction
  const resetTimer = () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSliderPosition();
    }, 8000);
  };
  prevBtn.addEventListener('click', resetTimer);
  nextBtn.addEventListener('click', resetTimer);
}
/* ==========================================================================
   7. Responsive Mobile Menu
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Toggle scroll locking on body
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      if (lenisEngine) lenisEngine.stop();
    } else {
      document.body.style.overflow = '';
      if (lenisEngine) lenisEngine.start();
    }
  });
  // Close menu when clicking link
  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
      if (lenisEngine) lenisEngine.start();
      
      // Smooth scroll to element using Lenis
      const targetId = link.getAttribute('href');
      if (lenisEngine) {
        lenisEngine.scrollTo(targetId);
      }
    });
  });
}
/* ==========================================================================
   8. Form Interactive Aesthetics
   ========================================================================== */
function initFormInteractions() {
  const inputs = document.querySelectorAll('.form-input');
  
  inputs.forEach(input => {
    const parent = input.closest('.form-group');
    if (!parent) return;
    
    const label = parent.querySelector('.form-label');
    if (!label) return;
    input.addEventListener('focus', () => {
      gsap.to(label, {
        color: 'var(--accent-color)',
        duration: 0.3,
        x: 4
      });
    });
    input.addEventListener('blur', () => {
      if (!input.value) {
        gsap.to(label, {
          color: 'var(--text-muted)',
          duration: 0.3,
          x: 0
        });
      } else {
        gsap.to(label, {
          color: 'var(--text-light)',
          duration: 0.3,
          x: 0
        });
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.createElement('div');
  status.className = 'form-status text-sm mt-3';
  form.appendChild(status);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('clientName')?.value.trim();
    const email = document.getElementById('clientEmail')?.value.trim();
    const message = document.getElementById('projectBrief')?.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields before sending.';
      return;
    }

    status.textContent = 'Sending message...';
    status.style.color = '#fff';

    const contactUrl = window.location.protocol === 'file:'
      ? 'http://localhost:8080/contact'
      : `${window.location.origin}/contact`;

    try {
      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || 'Unable to send message.');
      }

      status.textContent = 'Message sent successfully. Thank you!';
      status.style.color = '#8cf5a5';
      form.reset();
    } catch (error) {
      if (window.location.protocol === 'file:' && error.message.includes('Failed to fetch')) {
        status.textContent = 'Send failed: Please run the local server and open the site via http://localhost:8080/';
      } else {
        status.textContent = `Send failed: ${error.message}`;
      }
      status.style.color = '#ff8a8a';
    }
  });
}
