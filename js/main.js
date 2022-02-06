let navButton = document.querySelector('.navButton');
let navClose = document.querySelector('.navClose')
let nav = document.querySelector('nav');
navButton.addEventListener("click", function(e) {
    navButton.style.display = "none";
    navClose.style.display = "block";
  nav.classList.add("active")
  setTimeout(function() {
    nav.classList.add("slide")
  },1)
})
navClose.addEventListener("click", function(e) {
    navButton.style.display = "block";
    navClose.style.display = "none";
  nav.classList.remove("active")
  nav.classList.remove("slide")
})
