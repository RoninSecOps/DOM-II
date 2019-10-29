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

const destoImg = document.getElementById('desto');
destoImg.addEventListener('mouseover', function() {
  destoImg.style.border = 'thick dashed crimson';
});
destoImg.addEventListener('mouseout', function() {
  destoImg.style.border = '';
});

const img = document.querySelectorAll('img');
console.log(img);
img.forEach(function(cV) {
  cV.addEventListener('mouseover', function() {
    cV.style.transform = 'rotate(7deg)';
  });
});

img.forEach(function(cV) {
  cV.addEventListener('mouseout', function() {
    cV.style.transform = '';
  });
});
