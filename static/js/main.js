const body = document.getElementsByTagName("body")[0];

function handleScroll(navDropdown) {
  if (navDropdown) {
    body.classList.add("disable-scroll");
    console.log("Scroll aus");
  } else {
    body.classList.remove("disable-scroll");
    console.log("Scroll ein");
  }
}

const navBtn = document.querySelector(".nav-dropdown-btn");
const rect1 = document.querySelector(".nav-button-rect1");
const rect2 = document.querySelector(".nav-button-rect2");
const rect3 = document.querySelector(".nav-button-rect3");

function burgerAnimation(navDropdown) {
  if (navDropdown) {
    // Forward animation
    rect1.style.transition = "transform 0.5s";
    rect3.style.transition = "transform 0.5s";
    rect1.style.transform = "translateY(9px)";
    rect3.style.transform = "translateY(-9px)";

    setTimeout(() => {
      rect2.style.backgroundColor = "transparent";
    }, 500);

    setTimeout(() => {
      rect1.style.transition = "transform 0.5s";
      rect3.style.transition = "transform 0.5s";
      rect1.style.transform = "rotate(45deg)";
      rect3.style.transform = "rotate(-45deg)";
    }, 500);

    console.log("Dropdown ein");
  } else {
    // Reverse animation
    rect1.style.transition = "transform 0.5s";
    rect3.style.transition = "transform 0.5s";
    rect1.style.transform = "rotate(0deg)";
    rect3.style.transform = "rotate(0deg)";
    rect1.style.transform = "translateY(9px)";
    rect3.style.transform = "translateY(-9px)";

    setTimeout(() => {
      rect2.style.backgroundColor = "";
    }, 500);

    setTimeout(() => {
      rect1.style.transform = "translateY(-1%)";
      rect3.style.transform = "translateY(1%)";
    }, 500);

    console.log("Dropdown aus");
  }
}
