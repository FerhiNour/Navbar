// classList - shows/gets all classes
// contains - cheks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const toogle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toogle.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
