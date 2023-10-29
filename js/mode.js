//dont think this is used anymore. need to circle back to the whole dark mode implementation
//few different solutions in play. condense.

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        body.classList.remove('zen');
        body.classList.add('zen', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});