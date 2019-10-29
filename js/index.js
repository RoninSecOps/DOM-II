// Your code goes here
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', function(e) {
  e.target.style.color = 'red';
});

const navMenu = document.querySelectorAll('.nav-link');
navMenu.forEach(function(cV) {
  cV.addEventListener('click', function(e) {
    cV.style.color = 'red';
    e.preventDefault();
  });
});

navMenu.forEach(function(cV) {
  cV.addEventListener('dblclick', function(e) {
    cV.style.color = '';
    e.preventDefault();
  });
});

const letsGo = document.querySelector('.intro h2');
letsGo.addEventListener('dblclick', function() {
  letsGo.style.background = 'crimson';
});
