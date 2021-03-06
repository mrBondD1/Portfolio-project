//!TOGGLE NAVIGATION MENU AND ICONS

const menuToggleButton = document.querySelector(".menu-toggle-btn");
const menuElement = document.querySelector(".menu");

const toggleMenu = () => {
  menuElement.classList.toggle("active");
  menuToggleButton.classList.toggle("active");
};

menuToggleButton.addEventListener("click", toggleMenu);

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

const removeActiveLinkClass = (e) => {
  if (e.target.classList.contains("list-link")) {
    menuElement.classList.remove("active");
    menuToggleButton.classList.remove("active");
  }
};

document.addEventListener("click", removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

const themeToggleButton = document.querySelector(".theme-toggle-btn");
const bodyELement = document.body;
const currentTheme = localStorage.getItem("darkTheme");

if (currentTheme) {
  bodyELement.classList.add("dark-theme");
}

const toggleTheme = () => {
  bodyELement.classList.toggle("dark-theme");

  if (bodyELement.classList.contains("dark-theme")) {
    localStorage.setItem("darkTheme", "active");
  } else {
    localStorage.removeItem("darkTheme");
  }
};

themeToggleButton.addEventListener("click", toggleTheme);

// !SCROLL REVEAL
