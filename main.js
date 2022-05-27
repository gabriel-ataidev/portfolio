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

//scrollreveal nav
const srTopN = ScrollReveal({
  origin: "top",
  distance: "0",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srTopN.reveal(`#mobile-menu`, {
  interval: 200,
});

//scrollreveal nav
const srScaleN = ScrollReveal({
  origin: "top",
  distance: "0",
  duration: 1000,
  scale: 2,
  delay: 50,
});
srScaleN.reveal(`#mobile-menu .logo, #mobile-menu #nav-toggle`, {
  interval: 10,
});

//scrollreveal header
const srTopH = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 1000,
  scale: 0.7,
  delay: 50,
});
srTopH.reveal(`header nav, .bio .name, .bio .dev, .bio .dev-description`, {
  interval: 200,
});

const srScaleH = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 500,
  scale: 1.5,
  delay: 50,
});
srScaleH.reveal(`header `, {
  interval: 200,
});

//scrollreveal about
const srTopA = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 1000,
  scale: 0.7,
  delay: 50,
});
srTopA.reveal(`.photo`, {
  interval: 200,
});

const srLeftA = ScrollReveal({
  origin: "left",
  distance: "25px",
  scale: 1,
  duration: 1000,
  delay: 200,
});
srLeftA.reveal(`.about-me .title`, {
  interval: 200,
});

const srRightA = ScrollReveal({
  origin: "right",
  distance: "25px",
  scale: 1,
  duration: 1000,
  delay: 400,
});
srRightA.reveal(`.about-p`, {
  interval: 200,
});

//scrollreveal tools
const srTopT = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 1000,
  scale: 0.7,
  delay: 50,
});
srTopT.reveal(`.tech-image`, {
  interval: 200,
});

const srLeftT = ScrollReveal({
  origin: "left",
  distance: "25px",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srLeftT.reveal(`.tools-content .title, .tools-content span`, {
  interval: 150,
});

//scrollreveal projects(in tools)
const srTopPt = ScrollReveal({
  origin: "top",
  distance: "25px",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srTopPt.reveal(`.projects-text .title, .projects-text p`, {
  interval: 100,
});

const srScalePt = ScrollReveal({
  origin: "bottom",
  distance: "0px",
  duration: 1000,
  scale: 0.5,
  delay: 50,
});
srScalePt.reveal(`#project-button`, {
  interval: 100,
});

//scrollreveal projects
const srLeftP = ScrollReveal({
  origin: "left",
  distance: "25px",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srLeftP.reveal(`.project .text h1, .project .text span, .project .text ul li`, {
  interval: 100,
});

const srScaleP = ScrollReveal({
  origin: "left",
  distance: "0px",
  duration: 1000,
  scale: 0.5,
  delay: 50,
});
srScaleP.reveal(`.project .text .buttons .button`, {
  interval: 100,
});

const srScaleP2 = ScrollReveal({
  origin: "left",
  distance: "0px",
  duration: 1000,
  scale: 2,
  delay: 50,
});
srScaleP2.reveal(`.project .video video`, {
  interval: 100,
});

//scrollreveal conact
const srLeftC = ScrollReveal({
  origin: "left",
  distance: "25px",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srLeftC.reveal(`#contact .social .title, #contact .social .contact-bio, #contact .social .email, #contact .social .icons a`, {
  interval: 100,
});

const srRightC = ScrollReveal({
  origin: "right",
  distance: "25px",
  duration: 1000,
  scale: 1,
  delay: 50,
});
srRightC.reveal(`#contact .form form .input, #contact .form form .button`, {
  interval: 100,
});