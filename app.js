const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

// let scene2 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);


const studentToolsDescription = document.querySelector(".studentToolsDescription");
const studentToolsImage = document.querySelector(".studentToolsImage");
const projectsButtonTop = document.querySelector(".projectsButtonTop");
projectsButtonTop.onmouseover = function () {
  studentToolsDescription.style.opacity = 1;
  studentToolsImage.style.opacity = 1;
}
projectsButtonTop.onmouseout = function () {
  studentToolsDescription.style.opacity = 0;
  studentToolsImage.style.opacity = 0;
}

const werqoutDescription = document.querySelector(".werqoutDescription");
const werqoutImage = document.querySelector(".werqoutImage");
const projectsButtonW = document.querySelector(".projectsButtonW");
projectsButtonW.onmouseover = function () {
  werqoutDescription.style.opacity = 1;
  werqoutImage.style.opacity = 1;
}
projectsButtonW.onmouseout = function () {
  werqoutDescription.style.opacity = 0;
  werqoutImage.style.opacity = 0;
}

const pokemonDescription = document.querySelector(".pokemonDescription");
const pokemonImage = document.querySelector(".pokemonImage");
const projectsButtonP = document.querySelector(".projectsButtonP");
projectsButtonP.onmouseover = function () {
  pokemonDescription.style.opacity = 1;
  pokemonImage.style.opacity = 1;
}
projectsButtonP.onmouseout = function () {
  pokemonDescription.style.opacity = 0;
  pokemonImage.style.opacity = 0;
}

const starBackground = document.querySelector('#starsBackground');
const scrollAmount = 0;
window.addEventListener('scroll', (event) => {
  const { top } = starBackground.getBoundingClientRect();
  const starsInView = top - window.innerHeight < scrollAmount;
  console.log(top);
  if (starsInView) {
    intro.style.opacity=0;
  }
  else  {
    intro.style.opacity=1;
  }
});

