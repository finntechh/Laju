
const darkModeBtn = document.querySelector(".darkmode");
const logo = document.querySelector(".nav-logo");
let root = document.querySelector(":root");
let darkModeActive = false;
let checkDarkMode = localStorage.getItem("darkModeActive");

window.onload = function () {

    if (checkDarkMode === "true") {
        darkMode();
    }

};


function darkMode() {
    darkModeActive = !darkModeActive;

    if (darkModeActive) {
        logo.src = "../images/laju-weiß.png";

        darkModeBtn.style.transform = "rotate(180deg)";
        darkModeBtn.style.transitionDuration = "1s";

        root.style.setProperty("--grey", "#F3EFE6");
        root.style.setProperty("--cream", "#2F2E2E");

        console.log("darkMode ein");
    } 
    
    else {
        darkModeBtn.style.transform = "rotate(-.001deg)";
        darkModeBtn.style.transitionDuration = "1s";

        root.style.setProperty("--grey", "#2F2E2E");
        root.style.setProperty("--cream", "#F3EFE6");

        logo.src = "../images/laju.png";
        
        console.log("darkMode aus");
    }

    localStorage.setItem("darkModeActive", darkModeActive.toString());
}




const navBtn = document.querySelector(".nav-dropdown-btn");
const rect1 = document.querySelector(".nav-button-rect1");
const rect2 = document.querySelector(".nav-button-rect2");
const rect3 = document.querySelector(".nav-button-rect3");
const navDropdown = document.querySelector(".nav-dropdown-menu");
const body = document.getElementsByTagName("body")[0];


let isClicked = false;

navBtn.addEventListener("click", () => {
    if (!isClicked) {
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

        body.classList.add("disable-scroll");

        navDropdown.classList.remove("hidden");

        console.log("Dropdown ein");
    }

    else {
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

        body.classList.remove("disable-scroll");

        navDropdown.classList.add("hidden");

        console.log("Dropdown aus");
    }

    // Toggle the animation direction flag
    isClicked = !isClicked;
});



