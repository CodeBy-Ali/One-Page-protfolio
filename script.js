const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".nav-menulinks ul");
const menulinks = document.querySelectorAll(".nav-menulinks li");
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  mobile_nav.classList.toggle('active');
})
document.addEventListener('scroll', function() {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  }else{
    header.style.backgroundColor = 'transparent';
  }
});

menulinks.forEach(link=>{
  link.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobile_nav.classList.toggle('active');
  })
})