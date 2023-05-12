const mobileNav = document.querySelector("#mobile-nav");
const hamburger = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close-btn");

console.log(hamburger);

const toggleNav = () => {
  if (mobileNav.classList.contains("left-[-100%]")) {
    console.log("clicked");
    mobileNav.classList.replace("left-[-100%]", "left-0");
  } else {
    mobileNav.classList.replace("left-0", "left-[-100%]");
  }
};

hamburger.addEventListener("click", () => toggleNav());
closeBtn.addEventListener("click", () => toggleNav());
