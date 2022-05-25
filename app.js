// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        console.log('working');
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