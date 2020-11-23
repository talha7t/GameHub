let hamMenu = document.querySelector('.navbar__toggle');
let nav = document.getElementById("navigation");


gsap.to('.community-participant-count', {innerText: 180, duration: 4} )


hamMenu.addEventListener('click', ()=> {
  nav.classList.toggle("navigation-visible");
})

