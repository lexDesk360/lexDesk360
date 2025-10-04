localStorage.setItem("currentPage", "contact-us");
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

let translationsData;
function getData() {
  fetch("./assets/json/contact-us-page.json")
    .then((res) => res.json())
    .then((data) => {
      translationsData = data;
      setData()
    })
    .catch((err) => console.error(err));
}
getData();
function setData(){
  document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerHTML = translationsData[lang][key] || el.innerHTML;
  }
});
}

localStorage.setItem("activeForm", null);
