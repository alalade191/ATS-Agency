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


// blog page

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");


let design = document.querySelector("#design");
let website = document.querySelector("#website");
let marketting = document.querySelector("#marketting");
let all = document.querySelector("#all");

design.addEventListener("click", () => {
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";

  design.style.color = "white";
  design.style.backgroundColor = "black";

  all.style.color = "black";
  all.style.backgroundColor = "white";
  all.style.border = "1px solid black";

  website.style.color = "black";
  website.style.backgroundColor = "white";
  website.style.border = "1px solid black";

  marketting.style.color = "black";
  marketting.style.backgroundColor = "white";
  marketting.style.border = "1px solid black";
});

website.addEventListener("click", () => {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "block";

  website.style.color = "white";
  website.style.backgroundColor = "black";

  design.style.color = "black";
  design.style.backgroundColor = "white";
  design.style.border = "1px solid black";

  all.style.color = "black";
  all.style.backgroundColor = "white";
  all.style.border = "1px solid black";

  marketting.style.color = "black";
  marketting.style.backgroundColor = "white";
  marketting.style.border = "1px solid black";
});

marketting.addEventListener("click", () => {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
  fourth.style.display = "block";
  fifth.style.display = "none";

  marketting.style.color = "white";
  marketting.style.backgroundColor = "black";

  all.style.color = "black";
  all.style.backgroundColor = "white";
  all.style.border = "1px solid black";

  design.style.color = "black";
  design.style.backgroundColor = "white";
  design.style.border = "1px solid black";

  website.style.color = "black";
  website.style.backgroundColor = "white";
  website.style.border = "1px solid black";
});

all.addEventListener("click", () => {
  first.style.display = "block";
  second.style.display = "block";
  third.style.display = "block";
  fourth.style.display = "block";
  fifth.style.display = "block";

  all.style.color = "white";
  all.style.backgroundColor = "black";

  // cleared others
  design.style.color = "black";
  design.style.backgroundColor = "white";
  design.style.border = "1px solid black";

  website.style.color = "black";
  website.style.backgroundColor = "white";
  website.style.border = "1px solid black";

  marketting.style.color = "black";
  marketting.style.backgroundColor = "white";
  marketting.style.border = "1px solid black";
});
