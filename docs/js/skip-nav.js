//---------------------------------
// Skip Navigation tab functionality - used on HP only
//---------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector('#main-content');
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }
  });