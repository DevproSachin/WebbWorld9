window.addEventListener('scroll', () => {
  // ScrollSpy Logic
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSectionId = "";

  sections.forEach(section => {
    //console.dir(section);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });

  // Header background toggle on scroll
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/** custom cursor */
let cursor = document.querySelector('.ant');

window.addEventListener('mousemove' , function(evt){
     cursor.style.left = evt.clientX + "px";
     cursor.style.top = evt.clientY + "px";
});

/// dark light theme //

let mode = document.querySelector('#theme-toggle');
let bod = document.querySelector('body');
let icon = document.querySelector('#theme-toggle i');
 let savedmode = localStorage.getItem('mode');

 if (savedmode === 'light') {
    bod.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    bod.classList.remove('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}
mode.addEventListener('click',function(){
   bod.classList.toggle ('light-mode');

   if( bod.classList.contains('light-mode')){
        localStorage.setItem('mode' , 'light');
           icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        
   }else{
    localStorage.setItem('mode','dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
   }
})


/***mobile menu js */
 let openmenu = document.querySelector('.mobile-nav');
 let overlay = document.querySelector('#mobile-menu');
 let closemenu = document.querySelector('#close-menu');


 openmenu.addEventListener('click' , function(){
     overlay.classList.add('active');
 });

 closemenu.addEventListener('click' , function(){
     overlay.classList.remove('active');
 });

 document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });


  //all tweens run in direct succession
let tl = gsap.timeline();
tl.from(".logo", {
  duration: 1,
   y:-20,
   opacity:0
  })
tl.from("nav ul li ", {
    duration: 2,
     y: -20,
     opacity: 0,
     stagger:0.3
  })
