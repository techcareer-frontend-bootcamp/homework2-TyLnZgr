/*==================== SHOW MENU MOBILE ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MOBILE MENU ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // When we click on each nav__link, we remove the show class
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
