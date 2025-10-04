let menu = localStorage.getItem("menuState");
let page = localStorage.getItem("currentPage");
let language = localStorage.getItem("lang");

const list = document.getElementById("menu");
if (language == null && language != "eng" && language != "ar") {
  localStorage.setItem("lang", "eng");
  language = "eng";
}
if (language == "ar") {
  let body = document.getElementById("body");
  body.classList.add("rtl");
}
const translationsNav = {
  eng: {
    close: "Close",
  },
  ar: {
    close: "غلق",
  },
};
if (menu == "false" || menu == null) {
  list.innerHTML = `<i onclick="openMenu()" class="bi bi-list cursor"></i>
            <p onclick="openMenu()" class="cursor"></p>`;
} else if (menu == "true") {
  list.innerHTML = `<i onclick="closeMenu()" class="bi bi-x cursor"></i>
                      <p onclick="closeMenu()" class="cursor">${translationsNav[language].close}</p>`;
}

function getActiveLang() {
  if (language == "eng") {
    document.getElementById("en").classList.add("active");
    document.getElementById("ar").classList.remove("active");
  }
  if (language == "ar") {
    document.getElementById("ar").classList.add("active");
    document.getElementById("en").classList.remove("active");
  }
}
getActiveLang();

function openMenu() {
  window.location.href = `./menu.html`;
  localStorage.setItem("menuState", "true");
}
function openCompanyLinkedin(){
  window.open('https://www.linkedin.com/company/lexdesk360/', '_blank');

}
function closeMenu() {
  localStorage.setItem("menuState", "false");
  window.location.href = `./${page}.html`;
}
function goHome() {
  window.location.href = `./home.html`;
}

function translateToEn() {
  if (localStorage.getItem("lang") != "eng") {
    localStorage.setItem("lang", "eng");
    window.location.reload();
  }
  getActiveLang();
}
function translateToAra() {
  if (localStorage.getItem("lang") != "ar") {
    localStorage.setItem("lang", "ar");
    window.location.reload();
  }
  getActiveLang();
}

