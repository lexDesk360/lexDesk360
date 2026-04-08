localStorage.setItem("currentPage", "network-details");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}
if(lang == "greek"){
  body.classList.add("greek");

}
if(lang == "it"){
  body.classList.add("it");

}
if(lang == "french"){
  body.classList.add("french");
}
const item = JSON.parse(localStorage.getItem("selectedNetwork"));
console.log(item);
const translations = {
  eng: {
    home: "Home",
    aboutTitle: "About the Firm",
    services: "Role Within LexDesk360",
    view: "View Partner Website",
    parac: "Practice Areas ",
    sector: "Sector Expertise",
  },
  ar: {
    home: "الصفحة الرئيسية",
    aboutTitle: "نبذة عن الشركة",
    services: "الدور داخل LexDesk360 ",
    view: "زيارة موقع الشريك",
    parac: "مجالات الممارسة",
    sector: "الخبرة القطاعية",
  },
};
const translationsData = {
  pathPage: item.titlePage[lang],
  titlePage: item.name[lang],
  about: item.about[lang],
  within: item.within[lang],
  practice: item.practice[lang].des,
  sector: item.sector[lang].des,
};
document.getElementById("img1").src = item.image2;
document.getElementById("img2").src = item.image3;

document.querySelectorAll("[translate-item]").forEach((el) => {
  const key = el.getAttribute("translate-item");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[key] || el.placeholder;
  } else {
    el.innerText = translationsData[key] || el.innerText;
  }
});
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translations[lang][key] || el.placeholder;
  } else {
    el.innerText = translations[lang][key] || el.innerText;
  }
});

function getlinkedinProfile() {
  window.open(item.link, "_blank");
}

let practiceList = document.getElementById("practiceList");
practiceList.innerHTML = item.practice[lang].content
  .map(
    (item, index) => `
      <p class='bold'>${item.name}</p>
      <p class='des'>
      ${item.des}
      </p>
    `
  )
  .join("");

sectorList.innerHTML = item.sector[lang].content
  .map(
    (item, index) => `
      <p class='bold none'>${item.des}</p>
     
    `
  )
  .join("");
console.log(item);
if (item.link == "") {
  document.getElementById("linkpage").style.display = "none";
}
localStorage.setItem("currentPageNew", 1);
  localStorage.setItem("activeForm", null);
