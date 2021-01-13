let hamMenu = document.querySelector('.navbar-toggle');
let nav = document.getElementById("navigation");
let isNavOpen = false;

const communityPaticipant = document.querySelector('.community-participant-count')

// gsap.from('.community-participant-count, .campus-ambassadors-count, .counter-collaborations-count, .counter-initiative-count',
//  {onUpdate: ()=>{communityPaticipant.innerHTML = }, duration: 3} )


hamMenu.addEventListener('click', ()=> {
  // nav.classList.toggle("navigation-visible");
  if(!isNavOpen) {
    gsap.to('.navigation', {duration: 1, height: 'auto'})
    isNavOpen = true;
  } else {
    gsap.to('.navigation', {duration: 1, height: '0' });
    isNavOpen = false;
  }
  
}, {passive: true})
