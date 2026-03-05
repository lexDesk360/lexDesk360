
let menu = localStorage.getItem("menuState");
let page = localStorage.getItem("currentPage");
let language = localStorage.getItem("lang");

const list = document.getElementById("menu");

// default language
if (language == null) {
  localStorage.setItem("lang", "eng");
  language = "eng";
}

// RTL support
let body = document.getElementById("body");
if (language == "ar") {
  body.classList.add("rtl");
} else {
  body.classList.remove("rtl");
}

// translations
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
  gr: {
    close: "Κλείσιμο",
  },
  fr: {
    close: "Fermer",
  },
};

// menu state
if (menu == "false" || menu == null) {
  list.innerHTML = `
    <i onclick="openMenu()" class="bi bi-list cursor"></i>
    <p onclick="openMenu()" class="cursor"></p>
  `;
} else if (menu == "true") {
  list.innerHTML = `
    <i onclick="closeMenu()" class="bi bi-x cursor"></i>
    <p onclick="closeMenu()" class="cursor">
      ${translationsNav[language].close}
    </p>
  `;
}

// set active language in dropdown
function setActiveLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = language;
  }
}

setActiveLanguage();

// open menu
function openMenu() {
  window.location.href = `./menu`;
  localStorage.setItem("menuState", "true");
}

// close menu
function closeMenu() {
  localStorage.setItem("menuState", "false");
  window.location.href = `./${page}`;
}

// home
function goHome() {
  window.location.href = `./home`;
}

// linkedin
function openCompanyLinkedin() {
  window.open("https://www.linkedin.com/company/lexdesk360/", "_blank");
}

// change language from dropdown
function changeLanguage() {
  const selectedLang = document.getElementById("languageSelect").value;
  localStorage.setItem("lang", selectedLang);
  window.location.reload();
}
