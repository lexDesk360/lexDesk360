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


let translationsData ={
  "eng": {
    "pathPage": "Home",
    "titlePage": "Contact Us",
    "name": "Name",
    "emailcon": "Email",
    "phone": "Phone",
    "Subject": "Subject",
    "Message": "Message",
    "applyNow": "Send Message"
  },
  "ar": {
    "pathPage": " الصفحة الرئيسية ",
    "titlePage": "تواصل معنا",
    "name": "الاسم",
    "emailcon": "الايميل",
    "phone": "رقم التليفون",
    "Subject": "الموضوع",
    "Message": "رسالة",
    "applyNow": "إرسال"
  }
}
;

  document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerHTML = translationsData[lang][key] || el.innerHTML;
  }
});

localStorage.setItem("activeForm", null);
