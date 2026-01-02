burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menubar.classList.toggle('open');
});

const burgerMenu = document.querySelector('.nav-item');
nav-item.addEventListener('click', () => {
    nav-item.classList.toggle('open')// here target your navbar and change a class, an attribute or whatever you want
})

const element = document.getElementById('skull-icon');
const degree = 180; // The desired angle
element.style.transform = 'rotate(' + degree + 'deg)';