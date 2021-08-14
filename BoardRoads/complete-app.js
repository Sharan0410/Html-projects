document.getElementById("date").innerHTML=new Date().getFullYear();

const navBtn=document.getElementById("nav-toggle");
const links=document.getElementById("nav-links");

navBtn.addEventListener('click',()=>{
 links.classList.toggle('show-links');
});


const navbar=document.querySelector(".navbar");
window.addEventListener('scroll',()=>{
  if(window.pageYOffset>62)
  {
    navbar.classList.add('fixed');
  }
  else
  {
    navbar.classList.remove('fixed')
  }
});