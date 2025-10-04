localStorage.setItem("currentPage", "about");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
if (lang == "ar") {
  body.classList.add("rtl");
}
if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
const values = {
  eng: [
    {
      id: 1,
      name: "Integrity & Trust",
      des: "The Bedrock of Every Relationship",
      icon: "jewel",
    },
    {
      id: 2,
      name: "Clarity & Simplicity",
      des: "Cutting Through Complexity",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "Innovation with Purpose",
      des: "Smarter Solutions for Real Challenges",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "Global Mindset, Local Strength",
      des: "Standards with Insight",
      icon: "bi-brightness-high-fill",
    },
  ],
  ar: [
    {
      id: 1,
      name: "النزاهة والثقة",
      des: "أساس كل علاقة ",
      icon: "jewel",
    },
    {
      id: 2,
      name: "الوضوح والبساطة",
      des: "اختصار التعقيد",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "الابتكار الهادف",
      des: "حلول أذكى للتحديات الحقيقية ",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "رؤية عالمية، قوة محلية",
      des: "معايير رفيعة وبصيرة دقيقة ",
      icon: "bi-brightness-high-fill",
    },
  ],
};
let activeValue = 0;
let translations;
function renderData() {
 
  let classname = values[lang][activeValue].icon;
  let el = document.getElementById("iconValue");
  el.className = "";
  el.classList.add(`${classname}`);
  el.classList.add("bi");

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[lang][key] || el.innerText;
  });
}
function getDataPage(){
fetch("./assets/json/about-page.json")
  .then((res) => res.json())
  .then((data) => {
    translations = data;
    renderData();
  })
  .catch((err) => console.error(err));
}
getDataPage()
function nextValue() {
  if (activeValue != 3) {
    activeValue += 1;
  } else if (activeValue == 3) {
    activeValue = 0;
  }
  renderData();
}
function prevValue() {
  if (activeValue != 0) {
    activeValue -= 1;
  } else if (activeValue == 0) {
    activeValue = 3;
  }
  renderData();
}

function openFounderLinkedin() {
  window.open("https://www.linkedin.com/in/walid-sowaidan-9818364/", "_blank");
}
localStorage.setItem("currentPageNew", 1);

