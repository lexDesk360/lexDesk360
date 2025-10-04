let lang = localStorage.getItem("lang");
let body = document.getElementById("body");

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}
const translations = {
  eng: {
    Who: "Who we are",
    Home: "Home",
    About: "About",
    Team: "Team",
    OurNetworkFirms: "Our Network Firms",
    News: "News",
    JoinUsInternational: "Join Us International",
    Contact: "Contact Us",
    OurServices: "Our Services",
    LexFend: "LexFend",
    LexTend: "LexTend",
    LexTrack: "LexTrack",
    LexFound: "LexFound",
    Contactinfo: "Contact info",
    titleMenu1: "LexDesk360 - FZ LLE",
    des1: "Fujairah – Twin Towers, P.O.Box 4422 Fujairah, UAE ",
    titleMenu2: "LexDesk360 - International Limited",
    des2: "Galatas, 5 Agios Athanasios, 4106, Limassol, Cyprus",
    titleMenu3: "LexDesk360 - Sowaidan & Partners",
    des3: "Rehana Plaza, Zahraa El Maadi, Cairo, Egypt",
  },
  ar: {
    Who: "من نحن",
    Home: "الصفحة الرئيسية",
    About: "عن",
    Team: "الفريق",
    OurNetworkFirms: "شبكتنا من الشركاء",
    News: "الأخبار",
    JoinUsInternational: "انضم إلينا عالميًا",
    Contact: "تواصل معنا",
    OurServices: "خدماتنا",
    LexFend: "LexFend",
    LexTend: "LexTend",
    LexTrack: "LexTrack",
    LexFound: "LexFound",
    Contactinfo: "معلومات الاتصال",
    titleMenu1: "  LexDesk360 - شركة ذات مسؤولية محدودة في المنطقة الحرة",
    des1: "الفجيرة – الأبراج التوأم، ص.ب 4422 الفجيرة، الإمارات العربية المتحدة ",
    titleMenu2: "  LexDesk360 - الدولية المحدودة",
    des2: "غالاطاس، 5 أيوس أثناسيوس، 4106، ليماسول، قبرص ",
    titleMenu3: "LexDesk360 - Sowaidan & Partners",
    des3: "مبنى ريحانة، زهراء المعادي، القاهرة، مصر  ",
  },
};
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  el.innerText = translations[lang][key] || el.innerText;
});
function openGmailCompose() {
  const params = new URLSearchParams();
  params.set("to", "info@lexdesk360.com");
  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&" + params.toString();

  window.open(gmailUrl, "_blank", "noopener");
}
function getServ(id) {
  localStorage.setItem("activeTab", id);
  window.location.href = `./our-services.html`;
}
