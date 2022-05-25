// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      console.log("working");
    });
  }
};
showMenu("nav-toggle", "mobile-nav");
// remove menu mobile
const navLink = document.querySelectorAll(".nav-item");

function linkAction() {
  const navMenu = document.getElementById("mobile-nav");
  navMenu.classList.remove("show-menu");
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
