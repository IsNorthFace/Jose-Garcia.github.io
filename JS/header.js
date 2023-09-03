var header = document.getElementById('header');
var elements = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    var hover = window.scrollY;

    if (scroll > 10) {
        header.style.backgroundColor = '#ccc1a5';
        elements.forEach(element => {
            element.style.color = '#000';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        elements.forEach(element => {
            element.style.color = '#FFF';
        });
    }
});