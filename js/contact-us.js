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
if(lang == "greek"){
  body.classList.add("greek");

}
if(lang == "it"){
  body.classList.add("it");

}
if(lang == "french"){
  body.classList.add("french");
}

let translationsData = {
  eng: {
    pathPage: "Home",
    titlePage: "Contact Us",
    name: "Name",
    emailcon: "Email",
    phone: "Phone",
    Subject: "Subject",
    Message: "Message",
    applyNow: "Send Message",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "تواصل معنا",
    name: "الاسم",
    emailcon: "الايميل",
    phone: "رقم التليفون",
    Subject: "الموضوع",
    Message: "رسالة",
    applyNow: "إرسال",
  },
  greek: {
    pathPage: "ΑΡΧΙΚΗ",
    titlePage: "Επικοινώνησε μαζί μας",
    name: "Ονοματεπώνυμο",
    emailcon: "Ηλεκτρονικό ταχυδρομείο ",
    phone: "Τηλέφωνο",
    Subject: "Αντικείμενα",
    Message: "Μήνυμα",
    applyNow: "Στείλε μας μήνυμα ",
  },
  french: {
    pathPage: "Accueil",
    titlePage: "CONTACTEZ-NOUS",
    name: "Nom",
    emailcon: "E-mail",
    phone: "Téléphone",
    Subject: "Objet",
    Message: "Message",
    applyNow: "Envoyer le message",
  },
  it: {
    pathPage: "Home",
    titlePage: "CONTATTACI",
    name: "Nome",
    emailcon: "Email",
    phone: "Telefono",
    Subject: "Oggetto",
    Message: "Messaggio",
    applyNow: "Invia messaggio",
  },
};
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerHTML = translationsData[lang][key] || el.innerHTML;
  }
});

localStorage.setItem("activeForm", null);
