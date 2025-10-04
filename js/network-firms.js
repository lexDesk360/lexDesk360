localStorage.setItem("currentPage", "network-firms");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
localStorage.setItem("activeForm", null);

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}

let networks;
function getData() {
  fetch("./assets/json/network.json")
    .then((res) => res.json())
    .then((data) => {
      networks = data;
      setData();
    })
    .catch((err) => console.error(err));
}
getData();
let container = document.getElementById("network-content");
let template = document.getElementById("network");
function setData() {
  networks.forEach((item) => {
    let clone = template.content.cloneNode(true);
    clone.querySelector("img").src = item.image;
    clone.querySelector(".country").textContent = item.counrty[lang];
    clone.querySelector(".name").textContent = item.name[lang];
    let viewMore = clone.querySelector(".link-parag");
    viewMore.addEventListener("click", () => {
      itemDetails = item;
      localStorage.setItem("selectedNetwork", JSON.stringify(itemDetails));
      window.location.href = "./network-details.html";
    });
    container.appendChild(clone);
  });
  const translationsData = {
  eng: {
    pathPage: "Home ",
    titlePage: "Our Network Firms",
    moreToCome: "“And more to come…”",
    viewMore: "View More",
    become: "Become A Network Firm",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "شبكتنا من الشركاء ",
    moreToCome: "“والمزيد قادم…”",
    viewMore: "عرض المزيد",
    become: "انضم إلى شبكتنا كشركة",
  },
};

document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerText = translationsData[lang][key] || el.innerText;
  }
});
}
localStorage.setItem("currentPageNew", 1);

function getPageJoin() {
  localStorage.setItem("activeForm", "tab1");
  window.location.href = "./join-us.html";
}
