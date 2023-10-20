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