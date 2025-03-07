
// Animation utility functions for Home School GPT landing page

// Function to add fade-in animation to elements when they enter viewport
export const setupFadeInAnimation = () => {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach((el) => fadeObserver.observe(el));
  
  return () => {
    fadeElements.forEach((el) => fadeObserver.unobserve(el));
  };
};

// Function to create hover effect for 3D card elements
export const setup3DCardEffect = (cardSelector: string) => {
  const cards = document.querySelectorAll<HTMLElement>(cardSelector);
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
  
  return () => {
    cards.forEach((card) => {
      card.removeEventListener('mousemove', () => {});
      card.removeEventListener('mouseleave', () => {});
    });
  };
};

// Function to create parallax scrolling effect
export const setupParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = Number(element.dataset.parallax) || 0.1;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
