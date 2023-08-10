/* #00abf0*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
var header = document.getElementById("header");
var prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=' + id + ']")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window, scrollY > 100);
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  menuIcon.classList.toggle("active");
};

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
};

function downloadCurriculo() {
  var link = document.createElement("a");
  link.href = "./src/curriculum/Curriculo RanathanHr.pdf"; // Caminho para o currículo dentro da pasta src
  link.download = "curriculo.pdf"; // Nome do arquivo que será baixado

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
