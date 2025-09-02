import { Directive } from 'vue';

const reveal = {
  mounted(el) {
    el.classList.add('opacity-0', 'scale-75');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'scale-75');
            el.classList.add('opacity-100', 'scale-100');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
  }
};

export default reveal;