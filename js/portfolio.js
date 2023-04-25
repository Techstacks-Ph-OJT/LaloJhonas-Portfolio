const darkModeBtn = document.querySelectorAll(".darkmode");
const moonWrappers = document.querySelectorAll(".moonwrapper");
const darkOverlay = document.querySelector(".dark-overlay");
const burger = document.querySelector(".menu");
const mobilewrapper = document.querySelector(".mobile-wrapper");
const text = document.querySelector(".text");
const links = document.querySelectorAll(
  "a:not(.nice),p:not(.services),h1:not(.services),h3,h2:not(.services),.uil-github"
);
const topleft = document.querySelector(".topleft");
const label = document.querySelector("label");
const headwrapper = document.querySelector(".head-wrapper");
const serviceswrapper = document.querySelectorAll(
  ".herotechnical,.workcards,.herotestimonials"
);
const darknav = document.querySelector(".mobile-wrapper");
const bars = document.querySelectorAll('span[class^="bar-"]');
const servicesp = document.querySelectorAll("p.services,.h2.services");

const menu = document.getElementById("burgmenus");
const blogcards = document.querySelectorAll(".blogcards");

blogcards.forEach((blogcard) => {
  blogcard.addEventListener("click", (event) => {
    // get the value of the selected blog from the class name
    const selectedBlog = blogcard.classList.contains("blog1")
      ? "blog1"
      : blogcard.classList.contains("blog2")
      ? "blog2"
      : blogcard.classList.contains("blog3")
      ? "blog3"
      : null;

    // set the selected blog to sessionStorage
    if (selectedBlog) {
      localStorage.setItem("blogselected", selectedBlog);
    }
  });
});

const boxes = document.querySelectorAll(".heroproject-box,.aboutmedecs");

function fadeIn() {
  const windowHeight = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const boxHeight = boxBottom - boxTop;

    if (boxTop + boxHeight * 0.2 < windowHeight && boxBottom >= 0) {
      if (!box.classList.contains("fade-in-done")) {
        box.classList.add("fade-in");
        box.classList.add("fade-in-done");
      }
    }
  });
}

window.addEventListener("load", fadeIn);
window.addEventListener("scroll", fadeIn);
//services
const services = document.querySelectorAll(
  ".topservices, .servicecards,.socialwrapper, .cta, .blogcards ,.topcontent,.testicards ,.firstwrap,.secondwrap,.topheader,.ani,.ctabutton,.socialmedialinks,.reserved,.designedby"
);

function Animate() {
  const windowHeight = window.innerHeight;
  let delay = 0.4;

  services.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const boxHeight = boxBottom - boxTop;

    if (boxTop + boxHeight * 0.3 < windowHeight && boxBottom >= 0) {
      if (!box.classList.contains("fade-in-done")) {
        box.classList.add("animate");
        box.classList.add("fade-in-done");
        box.style.animationDelay = `${delay}s`;
        delay += 0.2; // increase the delay for each subsequent element by 0.2 seconds
      }
    }
  });
}

window.addEventListener("load", Animate);
window.addEventListener("scroll", Animate);

burger.addEventListener("click", () => {
  mobilewrapper.classList.toggle("is-open");
  menu.classList.toggle("animateburger");
});
if (document.body.classList.contains("dark-mode")) {
  darkOverlay.style.transform = "translate(0%, 0%)";
}

darkModeBtn.forEach(function (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    console.log("naclick naman");
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkOverlay.style.transform = "translate(0%, 0%)";
      moonWrappers.forEach(function (moonWrapper) {
        const moonIcon = moonWrapper.querySelector(".uil-moon");
        moonIcon.classList.remove("uil-moon");
        moonIcon.classList.add("uil-sun");
        moonIcon.style.color = "var(--darkcolortext)";
      });
      darkModeBtn.style.color = "var(--darkcolortext)";
      topleft.style.setProperty("background-color", "transparent");
      topleft.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
      text.style.color = "var(--darkcolortext)";
      label.style.color = "var(--darkcolortext)";
      darknav.style.backgroundColor = "rgb(36, 42, 51)";
      headwrapper.style.backgroundColor = "rgb(36, 42, 51)";

      serviceswrapper.forEach(function (services) {
        services.style.backgroundColor = "rgb(36, 42, 51)";
      });
      bars.forEach(function (bar) {
        bar.style.background = "#fff";
      });

      links.forEach(function (ey) {
        ey.style.color = "var(--darkcolortext)";
      });
      servicesp.forEach(function (services) {
        services.style.color = "var(--font-color) !important";
      });
    } else {
      moonWrappers.forEach(function (moonWrapper) {
        const moonIcon = moonWrapper.querySelector(".uil-sun");
        moonIcon.classList.remove("uil-sun");
        moonIcon.classList.add("uil-moon");
        moonIcon.style.color = "";
      });
      headwrapper.style.backgroundColor = "#fff";
      serviceswrapper.forEach(function (services) {
        services.style.backgroundColor = "#fff";
      });
      topleft.style.backgroundColor = "#f0faff";
      darknav.style.backgroundColor = "#fff";
      topleft.style.boxShadow = "";
      label.style.color = "";
      text.style.color = "";

      bars.forEach(function (bar) {
        bar.style.background = "#333";
      });
      servicesp.forEach(function (services) {
        services.style.color = "";
      });
      links.forEach(function (ey) {
        ey.style.color = "";
      });
      darkOverlay.style.transform = "translate(100%, -100%)";
    }
  });
});
window.addEventListener("load", function () {
  // Get the loader and name containers
  const loaderContainer = document.getElementById("loader-container");
  const nameContainer = document.getElementById("name-container");
  const loadingBar = document.getElementById("loading-bar");

  // Set the duration of the loader animation
  const loaderDuration = 2800; // 3 seconds

  // Fade in the name container
  nameContainer.style.opacity = "1";

  // Add animate-up class to loader container
  loaderContainer.classList.add("animate-up");

  // Animate the loading bar
  setTimeout(function () {
    loadingBar.style.width = "100%";
  }, 500); // 0.5 seconds

  // Add animate-down class to loader container
  setTimeout(function () {
    loaderContainer.classList.remove("animate-up");
    loaderContainer.classList.add("animate-down");

    // Hide the loader container after the loading bar is filled up
    setTimeout(function () {
      loaderContainer.style.opacity = "0";
      setTimeout(function () {
        loaderContainer.style.display = "none";
        // Show the content container
        document.querySelector(".portfoliowrapper").style.display = "block";

        // check if the preloader has already been shown for this session
        console.log(
          "preloaderShown:",
          sessionStorage.getItem("preloaderShown")
        );
        if (!sessionStorage.getItem("preloaderShown")) {
          // set the play-state property to running for the elements you want to animate
          let elements = document.querySelectorAll(
            ".logo label, .heroblob, .herotext h3, .herotext .text, .herotext span, .moonwrapper, .socialwrapper"
          );
          elements.forEach(function (element) {
            element.style.animationPlayState = "running";
          });
          let text2 = document.querySelectorAll(".text2");
          text2.forEach(function (link) {
            link.style.animationPlayState = "running";
          });
          let navLinks = document.querySelectorAll(".navigation-links a");
          navLinks.forEach(function (link) {
            link.style.animationPlayState = "running";
          });
          let elementss = document.querySelectorAll(".cta");
          elementss.forEach(function (element) {
            element.style.animationPlayState = "running";
          });
          let socialinks = document.querySelectorAll(".mysocialmedia");
          socialinks.forEach(function (link) {
            link.style.animationPlayState = "running";
          });
          // set the flag indicating that the preloader has been shown for this session
          sessionStorage.setItem("preloaderShown", true);
          console.log("preloaderShown set to true");
        } else {
          // remove the paused state to revert to the original behavior
          let elements = document.querySelectorAll(
            ".logo label, .heroblob, .herotext h3, .herotext .text, .herotext span, .moonwrapper ,.socialwrapper"
          );
          let navLinks = document.querySelectorAll(".navigation-links a");
          navLinks.forEach(function (link) {
            link.style.animationPlayState = "";
          });
          elements.forEach(function (element) {
            element.style.animationPlayState = "";
          });
          let elementss = document.querySelectorAll(".cta");
          elementss.forEach(function (element) {
            element.style.animationPlayState = "";
          });
          let text2 = document.querySelectorAll(".text2");
          text2.forEach(function (link) {
            link.style.animationPlayState = "";
          });
          let socialinks = document.querySelectorAll(".mysocialmedia");
          socialinks.forEach(function (link) {
            link.style.animationPlayState = "";
          });
          console.log("preloader already shown, removing paused state");
        }
      }, 300); // 0.5 seconds
    }, loaderDuration); // 3 seconds
  }, loaderDuration / 2); // 1.5 seconds
});

// check if the preloader has already been shown for this session
console.log("preloaderShown:", sessionStorage.getItem("preloaderShown"));
let preloaderShown = sessionStorage.getItem("preloaderShown");
if (!preloaderShown) {
  // show the preloader
  console.log("showing preloader");
  document.getElementById("loader-container").classList.add("loading", "show");

  // set the flag indicating that the preloader has been shown for this session
  sessionStorage.setItem("preloaderShown", true);
  console.log("preloaderShown set to true");

  // set the play-state property to paused for the elements you want to animate
  let elements = document.querySelectorAll(
    ".logo label, .heroblob, .herotext h3, .herotext .text, .herotext span, .moonwrapper,.socialwrapper"
  );
  elements.forEach(function (element) {
    element.style.animationPlayState = "paused";
  });
  let navLinks = document.querySelectorAll(".navigation-links a");
  navLinks.forEach(function (link) {
    link.style.animationPlayState = "paused";
  });
  let elementss = document.querySelectorAll(".cta");
  elementss.forEach(function (element) {
    element.style.animationPlayState = "paused";
  });
  let text2 = document.querySelectorAll(".text2");
  text2.forEach(function (link) {
    link.style.animationPlayState = "paused";
  });
  let socialinks = document.querySelectorAll(".mysocialmedia");
  socialinks.forEach(function (link) {
    link.style.animationPlayState = "paused";
  });
} else {
  // hide the preloader
  console.log("hiding preloader");
  document.getElementById("loader-container").classList.add("hidden");

  // set the play-state property to running for the elements you want to animate
  let elements = document.querySelectorAll(
    ".logo label, .heroblob, .herotext h3, .herotext .text, .herotext span, .moonwrapper,.socialwrapper"
  );
  elements.forEach(function (element) {
    element.style.animationPlayState = "running";
  });
  let navLinks = document.querySelectorAll(".navigation-links a");
  navLinks.forEach(function (link) {
    link.style.animationPlayState = "running";
  });
  let elementss = document.querySelectorAll(".cta");
  elementss.forEach(function (element) {
    element.style.animationPlayState = "running";
  });
  let text2 = document.querySelectorAll(".text2");
  text2.forEach(function (link) {
    link.style.animationPlayState = "running";
  });
  let socialinks = document.querySelectorAll(".mysocialmedia");
  socialinks.forEach(function (link) {
    link.style.animationPlayState = "running";
  });
}
const mobileclicks = document.querySelectorAll("#mobileclicks a");

mobileclicks.forEach((links) => {
  links.addEventListener("click", (event) => {
    mobilewrapper.classList.toggle("is-open");
    menu.classList.toggle("animateburger");
  });
});
document.cookie = "cookie_name=cookie_value; SameSite=None; Secure";
