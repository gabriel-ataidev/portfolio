// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "mobile-nav");
// remove menu mobile
const navLink = document.querySelectorAll(".nav-item");

function linkAction() {
  const navMenu = document.getElementById("mobile-nav");
  navMenu.classList.remove("show-menu");
  icon.classList.toggle("bx-x");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//movement animation to happen
const card = document.querySelector(".tech-image");
const container = document.querySelector(".image");
//moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `all 0.1s ease-in-out`;
});
//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all 0.5s ease-in-out`;
});

//chnaging nav icon
const toggleButton = document.getElementById("nav-toggle");
const icon = document.querySelector(".bx");
toggleButton.addEventListener("click", () => {
  icon.classList.toggle("bx-x");
});


const srToph = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 1000,
  delay: 50,
});
srToph.reveal(`header nav, #mobile-menu`, {
  interval: 200,
});

const srBottom = ScrollReveal({
  origin: "bottom",
  distance: "15px",
  duration: 1000,
});
srBottom.reveal(` .name, .dev, .dev-description`, {
  interval: 200,
});

const srTop = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 1000,
  delay: 50,
});
srTop.reveal(`.photo`, {
  interval: 200,
});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: 2000,
});
srLeft.reveal(`.text span, .project .text ul li`, {
  interval: 200,
});

const srRight = ScrollReveal({
  origin: "right",
  distance: "30px",
  duration: 2000,
});
srRight.reveal(`.about-me p, .projects-text p, .project .text h1, .form`, {
  interval: 200,
});

const srTopt = ScrollReveal({
  origin: "top",
  distance: "15px",
  scale: 0.5,
  duration: 1000,
  delay: 500,
});
srTopt.reveal(`.tech-image, .button, video, .icons, footer span`, {
  interval: 200,
});

const srLeftt = ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: 2000,
});
srLeftt.reveal(`.title, .contact-bio, .email`, {
  interval: 10,
});
