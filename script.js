const text = "a Professional Web Development Team";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();

/* Popup */
function openPopup(text){
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupText").innerText = text;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

// =========Testimonials Section

let slides = document.querySelectorAll(".testimonial-slide");
let index = 0;

function showSlides(){
  slides.forEach(slide => slide.classList.remove("active"));

  index++;
  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");
}

setInterval(showSlides, 3000); 

// Contact Section

/* Smooth scroll for all links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

// Scroll Animation

function revealOnScroll(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    let revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// =======Skills + Why Choose Us

function revealOnScroll(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");
      if(el.querySelector('span')){ // progress bar animate
        el.querySelector('span').style.width = el.querySelector('span').getAttribute('style').replace('width:0','width');
      }
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// nav

// Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', ()=>{
  navList.classList.toggle('active');
});

// Scroll Active Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlinks');

window.addEventListener('scroll', ()=>{
  let current = '';

  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 70;
    if(scrollY >= sectionTop){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
});

// About Upgrade

function revealOnScroll(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add("active");

      // Skills animation
      let bars = el.querySelectorAll("span");
      bars.forEach(bar=>{
        let width = bar.getAttribute("data-width");
        if(width){
          bar.style.width = width;
        }
      });
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

