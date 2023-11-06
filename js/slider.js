let index = 0;
  const slidesContainer = document.querySelector('.slides-container');
  const slides = Array.from(slidesContainer.children);
  const totalSlides = slides.length;
  
  document.querySelector('.next').addEventListener('click', () => {
    if (index < totalSlides - 1) {
      index++;
    } else {
      index = 1; // Skip duplicate slide
      slidesContainer.style.transition = 'none';
      slidesContainer.style.transform = 'translateX(0)'; // Reset to first slide without animation
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slidesContainer.style.transition = 'transform 0.5s ease-out';
        slidesContainer.style.transform = `translateX(-${index * 100}%)`; // Adjust based on slide width
      });
    });
  });

  document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = totalSlides - 2; // Move to the last original slide
      slidesContainer.style.transition = 'none';
      slidesContainer.style.transform = `translateX(-${(totalSlides - 1) * 100}%)`; // Adjust based on slide width
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slidesContainer.style.transition = 'transform 0.5s ease-out';
        slidesContainer.style.transform = `translateX(-${index * 100}%)`; // Adjust based on slide width
      });
    });
  });

  // Reset transition when resizing window
  window.addEventListener('resize', () => {
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = `translateX(-${index * 100}%)`; // Adjust based on slide width
  });