export default {
  mounted(el, binding) {
    const options = {
      threshold: 0.2,
      ...binding.value, // optional Parameter übergeben
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "scale-75");
          el.classList.add("opacity-100", "scale-100");
          obs.unobserve(entry.target);
        }
      });
    }, options);

    // initial für reveal-on-load
    setTimeout(() => {
      el.classList.remove("opacity-0", "scale-75");
      el.classList.add("opacity-100", "scale-100");
    }, 100);

    observer.observe(el);
  }
}
