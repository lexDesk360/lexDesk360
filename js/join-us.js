localStorage.setItem("currentPage", "join-us");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
let activeForm = localStorage.getItem("activeForm");

const translationsData = {
  eng: {
    pathPage: "Home",
    titlePage: "Join Us International",
    "tab1-title": "Counsel",
    "tab2-title": "International Network Law Firm",
    "tab3-title": "Channel Partner",
    "tab4-title": "Lawyers",
    "tab5-title": "Careers",

    t1: "Counsel Application Form",
    t2: "International Network Law Firm Application Form",
    t3: "Channel Partner Application Form",
    t4: "Lawyers Application Forms",
    t5: "Careers Forms",

    name: "Name",
    email: "Email",
    phone: "Phone",
    UploadFirm: "Upload Firm Profile",
    UploadProfile: "Upload Profile",
    linkedIn: "LinkedIn",
    fileTypes: "PDF, DOC, DOCX, Max size 5MB",
    applyNow: "Apply Now",
    Posion: "Position",
    Notes: "Notes",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "انضم إلينا عالميًا",
    "tab1-title": "المستشارون",
    "tab2-title": "مكاتب المحاماة الدولية",
    "tab3-title": "الشركاء ",
    "tab4-title": "المحامون",
    "tab5-title": "الوظائف ",

    t1: "نموذج تقديم المستشار القانوني",
    t2: "نموذج تقديم لشبكة محاماة دولية",
    t3: "نموذج تقديم شريك القناة",
    t4: "نماذج تقديم المحامين",
    t5: "نموذج الوظائف ",

    name: "الاسم",
    email: "الايميل",
    phone: "رقم التليفون",
    UploadResume: "تحميل السيرة الذاتية",
    UploadFirm: "تحميل ملف الشركة",
    UploadProfile: "تحميل الملف الشخصي",
    linkedIn: "لينكد ان",

    fileTypes: "PDF, DOC, DOCX، الحد الأقصى للحجم 5 ميغابايت",
    applyNow: "قدّم الآن",
    Posion: "الوظيفة",
    Notes: "ملاحظات",
  },
  greek: {
    pathPage: "ΑΡΧΙΚΗ",
    titlePage: "ΓΙΝΕ ΜΕΛΟΣ ΔΙΕΘΝΩΣ",
    "tab1-title": "Σύμβουλος",
    "tab2-title": "Διεθνές Δίκτυο Δικηγορικών Γραφείων",
    "tab3-title": "Συνεργαζόμενος Εταίρος / Partner Δικτύου ",
    "tab4-title": "Δικηγόροι",
    "tab5-title": "Καριέρες",

    t1: "Φόρμα Αίτησης Counsel",
    t2: "Φόρμα Αίτησης Διεθνούς Δικτύου Δικηγορικών Γραφείων",
    t3: "Φόρμα Αίτησης Channel Partner",
    t4: "Φόρμες Αίτησης Δικηγόρων",
    t5: "Φόρμα Καριέρες",

    name: "Ονοματεπώνυμο",
    email: "Email",
    phone: "Τηλέφωνο",
    UploadFirm: "Upload Firm Profile",
    UploadProfile: "Προφίλ",
    linkedIn: "LinkedIn",
    fileTypes: "PDF, DOC, DOCX – Μέγιστο μέγεθος 5MB",
    applyNow: "Υποβολή Αίτησης",
    Posion: "Θέση",
    Notes: "Σημειώσεις",
  },
  french: {
    pathPage: "ACCUEIL",
    titlePage: "NOUS REJOINDRE À L’INTERNATIONAL",
    "tab1-title": "Conseiller",
    "tab2-title": "Cabinet d’avocats membre du réseau international",
    "tab3-title": "Partenaire Commercial ",
    "tab4-title": "Avocats",
    "tab5-title": "Carrières",

    t1: "Formulaire de candidature – Counsel",
    t2: "FORMULAIRE DE CANDIDATURE – CABINET MEMBRE DU RÉSEAU INTERNATIONAL",
    t3: "Formulaire de candidature – Channel Partner",
    t4: "Formulaires de candidature – Avocats",
    t5: "Formulaires de Carrièra",

    name: "Nom",
    email: "Votre e-mail ",
    phone: "Téléphone",
    UploadFirm: "Upload Firm Profile",
    UploadProfile: "Téléverser le profil",
    linkedIn: "LinkedIn",
    fileTypes: "PDF, DOC, DOCX, Max size 5MB",
    applyNow: "Postuler maintenant",
    Posion: "Poste",
    Notes: "Remarques",
  }
};
let items;
function getData() {
  fetch("./assets/json/join-us-page.json")
    .then((res) => res.json())
    .then((data) => {
      items = data;
      setData();
    })
    .catch((err) => console.error(err));
}
getData();
if (lang == "ar") {
  body.classList.add("rtl");
}
if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerText = translationsData[lang][key] || el.innerText;
  }
});

function openTab(tabId) {
  this.resetAllFORM();
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
let activeItem;
function setData() {
   activeItem = items[lang][0];
  if (activeForm != "null") {
    openTab("tab2");
    activeItem = items[lang][1];
  }
  let dataItem1 = document.getElementById("dataItem1");
  let item1 = items[lang][0];
  dataItem1.innerHTML = `
  <div class="big-title">
    <p>${item1.title}</p>
  </div>
  <div class="descrbtion">
    ${item1.des.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="title-small">
    <p>${item1.foryou}</p>
  </div>
  <div class="descrbtion">
    ${item1.you.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="descrbtion">
    <p>${item1.des2[0]}</p>
  </div>
   <div class="title-small">
    <p>${item1.question}</p>
  </div>
   <div class="descrbtion">
    <p>${item1.des2[1]}</p>
  </div>
`;

  let dataItem2 = document.getElementById("dataItem2");
  let item2 = items[lang][1];
  dataItem2.innerHTML = `
  <div class="big-title">
    <p>${item2.title}</p>
  </div>
  <div class="descrbtion">
    ${item2.des.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="title-small">
    <p>${item2.foryou}</p>
  </div>
  <div class="descrbtion">
    ${item2.you.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
 <div class="descrbtion">
    <p>${item2.des2[0]}</p>
  </div>
   <div class="title-small">
    <p>${item2.question}</p>
  </div>
   <div class="descrbtion">
    <p>${item2.des2[1]}</p>
  </div>
`;

  let dataItem3 = document.getElementById("dataItem3");
  let item3 = items[lang][2];
  dataItem3.innerHTML = `
  <div class="big-title">
    <p>${item3.title}</p>
  </div>
  <div class="descrbtion">
    ${item3.des.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="title-small">
    <p>${item3.foryou}</p>
  </div>
  <div class="descrbtion">
    ${item3.you.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
 <div class="descrbtion">
    <p>${item3.des2[0]}</p>
  </div>
   <div class="title-small">
    <p>${item3.question}</p>
  </div>
   <div class="descrbtion">
    <p>${item3.des2[1]}</p>
  </div>
`;

  let dataItem4 = document.getElementById("dataItem4");
  let item4 = items[lang][3];
  dataItem4.innerHTML = `
  <div class="big-title">
    <p>${item4.title}</p>
  </div>
  <div class="descrbtion">
    ${item4.des.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="title-small">
    <p>${item4.foryou}</p>
  </div>
  <div class="descrbtion">
    ${item4.you.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
 <div class="descrbtion">
    <p>${item4.des2[0]}</p>
  </div>
   <div class="title-small">
    <p>${item4.question}</p>
  </div>
   <div class="descrbtion">
    <p>${item4.des2[1]}</p>
  </div>
`;

  let dataItem5 = document.getElementById("dataItem5");
  let item5 = items[lang][4];
  dataItem5.innerHTML = `
  <div class="big-title">
    <p>${item5.title}</p>
  </div>
  <div class="descrbtion">
    ${item5.des.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
  <div class="title-small">
    <p>${item5.foryou}</p>
  </div>
  <div class="descrbtion">
    ${item5.you.map((desc) => `<p>${desc}</p>`).join("")}
  </div>
<div class="descrbtion">
    <p>${item5.des2[0]}</p>
  </div>
   <div class="title-small">
    <p>${item5.question}</p>
  </div>
   <div class="descrbtion">
    <p>${item5.des2[1]}</p>
  </div>
`;
}
function resetAllFORM() {
  document.getElementById("careers").reset();
  document.getElementById("Counsel").reset();
  document.getElementById("lawyer").reset();
  document.getElementById("network-law").reset();
  document.getElementById("partner").reset();
  document.getElementById("fileName1").textContent = "";
  document.getElementById("fileName2").textContent = "";
  document.getElementById("fileName3").textContent = "";
  document.getElementById("fileName4").textContent = "";
  document.getElementById("fileName5").textContent = "";
  document.getElementById("message1").innerHTML = "";
  document.getElementById("message2").innerHTML = "";
  document.getElementById("message3").innerHTML = "";
  document.getElementById("message4").innerHTML = "";
  document.getElementById("message5").innerHTML = "";
  document.getElementById("errorname1").innerHTML = "";
  document.getElementById("erroremail1").innerHTML = "";
  document.getElementById("errorphone1").innerHTML = "";
  document.getElementById("errorposition1").innerHTML = "";
  document.getElementById("errorlinkedIn1").innerHTML = "";
  document.getElementById("errorfile1").innerHTML = "";
  document.getElementById("errorname2").innerHTML = "";
  document.getElementById("erroremail2").innerHTML = "";
  document.getElementById("errorphone2").innerHTML = "";
  document.getElementById("errorposition2").innerHTML = "";
  document.getElementById("errorfile2").innerHTML = "";
  document.getElementById("errorname3").innerHTML = "";
  document.getElementById("erroremail3").innerHTML = "";
  document.getElementById("errorphone3").innerHTML = "";
  document.getElementById("errorposition3").innerHTML = "";
  document.getElementById("errorfile3").innerHTML = "";
  document.getElementById("errorname4").innerHTML = "";
  document.getElementById("erroremail4").innerHTML = "";
  document.getElementById("errorphone4").innerHTML = "";
  document.getElementById("errorposition4").innerHTML = "";
  document.getElementById("errorlinkedIn4").innerHTML = "";
  document.getElementById("errorfile4").innerHTML = "";
  document.getElementById("errorname5").innerHTML = "";
  document.getElementById("erroremail5").innerHTML = "";
  document.getElementById("errorphone5").innerHTML = "";
  document.getElementById("errorposition5").innerHTML = "";
  document.getElementById("errorlinkedIn5").innerHTML = "";
  document.getElementById("errorfile5").innerHTML = "";
}
localStorage.setItem("currentPageNew", 1);
