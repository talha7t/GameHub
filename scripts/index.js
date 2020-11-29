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

window.addEventListener('scroll', ()=> {
  let scroll = window.scrollY;
  if(scroll > 10) {
    gsap.set('.header', {transformOrigin: '50% bottom'});

    gsap.to('.header', {height: 0, duration:0.5, ease: 'power2.out'});
    //  use from to here
    gsap.to('.navbar', {position: 'fixed', width: '100%', duration: 0.5, top: '0', zIndex: '2'});
  } else {
    gsap.to('.header', {height: 'auto', duration: 0.5, ease: 'power2.out'});
    gsap.to('.navbar', {position: 'static'})
  }
})