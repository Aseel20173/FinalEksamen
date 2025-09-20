// Slideshow
const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
let i = 0;

function show(n){
  i = (n + slides.length) % slides.length;
  slides.forEach((s, si)=> s.classList.toggle("is-active", si === i));
  dots.forEach((d, di)=> d.classList.toggle("is-active", di === i));
}

dots.forEach((d, di)=> d.addEventListener("click", ()=> show(di)));

function auto(){
  show(i+1);
}
show(0);
setInterval(auto, 3000);

document.getElementById("contact-form")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("Thanks! (Demo only — no data is stored.)");
});
