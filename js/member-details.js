localStorage.setItem("currentPage", "member-details");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
let leader = localStorage.getItem("leader")
leader = JSON.parse(leader);
if (lang == "ar") {
    body.classList.add("rtl");
}
if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
document.getElementById('img').src = leader.image;
document.getElementById('name').textContent = leader.name[lang];
document.getElementById('job').textContent = leader.positionJob[lang];
let descrbtionDiv = document.getElementById('descrbtion')
descrbtionDiv.innerHTML = leader.descripation[lang]
    .map(
        (des, index) => `
      <p>${des}</p>
    `
    )
    .join("");



const translations = {
    eng: {
        pathPage: "Home ",
        titlePage: "Team",
        Linkedin: ""
    },
    ar: {
        pathPage: " الصفحة الرئيسية  ",
        titlePage: "الفريق",
        Linkedin: ""
    }
};


if(leader.linkedin == ''){
document.getElementById('Linkedin').style.display = 'none' 

}

function getlinkedinProfile() {
    window.open(leader.linkedin, '_blank');
}
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translations[lang][key] || el.placeholder;
  } else {
    el.innerText = translations[lang][key] || el.innerText;
  }
});
localStorage.setItem("currentPageNew", 1);
  localStorage.setItem("activeForm", null);
