localStorage.setItem("currentPage", "team");
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
let members;
let ourPeople;
function getData() {
  fetch("./assets/json/leader.json")
    .then((res) => res.json())
    .then((data) => {
      members = data;
      setDataLeader();
    })
    .catch((err) => console.error(err));

  fetch("./assets/json/member.json")
    .then((res) => res.json())
    .then((data) => {
      ourPeople = data;
      setDataMember();
    })
    .catch((err) => console.error(err));
}
getData()
const translations = {
  eng: {
    pathPage: "Home  ",
    titlePage: "Team",
    ourLeader: "Meet Our Leaders",
    ourTeam: "Contact Our Team",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "الفريق",
    ourLeader: "تعرّف على قادتنا",
    ourTeam: "تواصل مع فريقنا",
  },
};

let membersDiv = document.getElementById("group-members");
let peopleDiv = document.getElementById("our-people");

function setDataLeader() {
  membersDiv.innerHTML = members
    .map(
      (member, index) => `
      <div class="member cursor" onclick="getMemberDetails(${index})">
        <img class="image" src="${member.image}" alt="${member.name[lang]}">
       <div class="title-small"><p>${member.name[lang]}</p></div>
                <div class="descrbtion-title"><p>${member.positionJob[lang]}</p></div>
      </div>
    `
    )
    .join("");
}
function setDataMember() {
  peopleDiv.innerHTML = ourPeople
    .map(
      (member, index) => `
      <div class="member cursor center" onclick="getPeopleDetails(${index})">
        <img class="image custom" src="${member.image}" alt="${member.name[lang]}">
       <div class="title-small"><p>${member.name[lang]}</p></div>
                <div class="descrbtion-title centerText"><p>${member.positionJob[lang]}</p></div>
      </div>
    `
    )
    .join("");
}
function openTab(tabId) {
  document.querySelectorAll(".tab").forEach((div) => {
    div.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  document
    .querySelector(`div[onclick="openTab('${tabId}')"]`)
    .classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function getMemberDetails(index) {
  localStorage.setItem("leader", JSON.stringify(members[index]));
  window.location.href = `./member-details`;
}
function getPeopleDetails(index) {
  localStorage.setItem("leader", JSON.stringify(ourPeople[index]));
  window.location.href = `./member-details`;
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
