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
} else {
  body.classList.remove("rtl");
}


const translationsNav = {
  eng: {
    close: "Close",
  },
  ar: {
    close: "غلق",
  },
  it: {
    close: "Chiudi",
  },
  greek: {
    close: "Κλείσιμο",
  },
  french: {
    close: "Fermer",
  }
};

if (menu == "false" || menu == null) {
  list.innerHTML = `<i onclick="openMenu()" class="bi bi-list cursor"></i>
            <p onclick="openMenu()" class="cursor"></p>`;
} else if (menu == "true") {
  list.innerHTML = `<i onclick="closeMenu()" class="bi bi-x cursor"></i>
                      <p onclick="closeMenu()" class="cursor">${translationsNav[language].close}</p>`;
}

function getActiveLang() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = language;
  }
}
getActiveLang();

function openMenu() {
  window.location.href = `./menu.html`;
  localStorage.setItem("menuState", "true");
}

function closeMenu() {
  localStorage.setItem("menuState", "false");
  window.location.href = `./${page}.html`;
}


function openCompanyLinkedin() {
  window.open("https://www.linkedin.com/company/lexdesk360/", "_blank");
}

function goHome() {
  window.location.href = `./home.html`;
}

function changeLanguage() {
  const selectedLang = document.getElementById("languageSelect").value;
  localStorage.setItem("lang", selectedLang);
  window.location.reload();
}



