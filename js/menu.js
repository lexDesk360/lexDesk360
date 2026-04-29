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
const translations = {
  eng: {
    WhoMenu: "Who we are",
    HomeMenu: "Home",
    AboutMenu: "About",
    TeamMenu: "Team",
    OurNetworkFirmsMenu: "Our Network Firms",
    OurLawFirmsMenu: "Our Law Firms",
    NewsMenu: "News",
    JoinUsInternationalMenu: "Join Us International",
    ContactMenu: "Contact Us",
    OurServicesMenu: "Our Services",
    LexFendMenu: "LexFend",
    LexTendMenu: "LexTend",
    LexTrackMenu: "LexTrack",
    LexFoundMenu: "LexFound",
    ContactinfoMenu: "Contact info",
    titleMenu1Menu: "LexDesk360 - FZ LLE",
    des1Menu: "Fujairah – Twin Towers, P.O.Box 4422 Fujairah, UAE ",
    titleMenu2Menu: "LexDesk360 - International Limited",
    des2Menu: "Galatas, 5 Agios Athanasios, 4106, Limassol, Cyprus",
    titleMenu3Menu: "LexDesk360 - Sowaidan & Partners",
    des3Menu: "Rehana Plaza, Zahraa El Maadi, Cairo, Egypt",
  },
  ar: {
    WhoMenu: "من نحن",
    HomeMenu: "الصفحة الرئيسية",
    AboutMenu: "عن",
    TeamMenu: "الفريق",
    OurNetworkFirmsMenu: "شبكتنا من الشركاء",
    OurLawFirmsMenu: "شركاؤنا من مكاتب المحاماة",
    NewsMenu: "الأخبار",
    JoinUsInternationalMenu: "انضم إلينا عالميًا",
    ContactMenu: "تواصل معنا",
    OurServicesMenu: "خدماتنا",
    LexFendMenu: "LexFend",
    LexTendMenu: "LexTend",
    LexTrackMenu: "LexTrack",
    LexFoundMenu: "LexFound",
    ContactinfoMenu: "معلومات الاتصال",
    titleMenu1Menu: "  LexDesk360 - شركة ذات مسؤولية محدودة في المنطقة الحرة",
    des1Menu: "الفجيرة – الأبراج التوأم، ص.ب 4422 الفجيرة، الإمارات العربية المتحدة ",
    titleMenu2Menu: "  LexDesk360 - الدولية المحدودة",
    des2Menu: "غالاطاس، 5 أيوس أثناسيوس، 4106، ليماسول، قبرص ",
    titleMenu3Menu: "LexDesk360 - Sowaidan & Partners",
    des3Menu: "مبنى ريحانة، زهراء المعادي، القاهرة، مصر  ",
  },
  greek: {
    WhoMenu: "Ποιοι",
    HomeMenu: "Αρχκή",
    AboutMenu: "Σχετικά με εμάς ",
    TeamMenu: "Ομάδα",
    OurNetworkFirmsMenu: "Εταιρείες δικτύου",
    OurLawFirmsMenu: "Our Law Firms",
    NewsMenu: "Νεότερα ",
    JoinUsInternationalMenu: "Γίνετε μέλος του διεθνούς μας δικτύου",
    ContactMenu: "Επικοινωνήστε μαζί μας",
    OurServicesMenu: "Οι υπηρεσίες μας",
    LexFendMenu: "LexFend",
    LexTendMenu: "LexTend",
    LexTrackMenu: "LexTrack",
    LexFoundMenu: "LexFound",
    ContactinfoMenu: "Στοιχεία Επικοινωνίας",
    titleMenu1Menu: "LexDesk360 - FZ LLE",
    des1Menu: "Fujairah – Twin Towers, P.O.Box 4422 Fujairah, UAE ",
    titleMenu2Menu: "LexDesk360 - International Limited",
    des2Menu: "Galatas, 5 Agios Athanasios, 4106, Limassol, Cyprus",
    titleMenu3Menu: "LexDesk360 - Sowaidan & Partners",
    des3Menu: "Rehana Plaza, Zahraa El Maadi, Cairo, Egypt",
  },
  french: {
    WhoMenu: "QUI SOMMES-NOUS",
    HomeMenu: "Accueil",
    AboutMenu: "À propos",
    TeamMenu: "Notre équipe",
    OurNetworkFirmsMenu: "Nos cabinets partenaires ",
    OurLawFirmsMenu: "Nos cabinets d'avocats ",
    NewsMenu: "Actualités",
    JoinUsInternationalMenu: "Rejoignez-nous à l'international",
    ContactMenu: "Contactez-nous",
    OurServicesMenu: "NOS SERVICES",
    LexFendMenu: "LexFend",
    LexTendMenu: "LexTend",
    LexTrackMenu: "LexTrack",
    LexFoundMenu: "LexFound",
    ContactinfoMenu: "COORDONNÉES",
    titleMenu1Menu: "LexDesk360 - FZ LLE",
    des1Menu: "Fujairah – Twin Towers, P.O.Box 4422 Fujairah, UAE ",
    titleMenu2Menu: "LexDesk360 - International Limited",
    des2Menu: "Galatas, 5 Agios Athanasios, 4106, Limassol, Cyprus",
    titleMenu3Menu: "LexDesk360 - Sowaidan & Partners",
    des3Menu: "Rehana Plaza, Zahraa El Maadi, Cairo, Egypt",
  },
  it: {
    WhoMenu: "CHI SIAMO",
    HomeMenu: "Home",
    AboutMenu: "Chi siamo",
    TeamMenu: "Team",
    OurNetworkFirmsMenu: "I nostri studi legali",
    OurLawFirmsMenu: "I nostri studi partner ",
    NewsMenu: "News",
    JoinUsInternationalMenu: "Unisciti a noi a livello internazionale",
    ContactMenu: "Contattaci",
    OurServicesMenu: "I NOSTRI SERVIZI",
    LexFendMenu: "LexFend",
    LexTendMenu: "LexTend",
    LexTrackMenu: "LexTrack",
    LexFoundMenu: "LexFound",
    ContactinfoMenu: "CONTATTI",
    titleMenu1Menu: "LexDesk360 - FZ LLE",
    des1Menu: "Fujairah – Twin Towers, P.O.Box 4422 Fujairah, UAE ",
    titleMenu2Menu: "LexDesk360 - International Limited",
    des2Menu: "Galatas, 5 Agios Athanasios, 4106, Limassol, Cyprus",
    titleMenu3Menu: "LexDesk360 - Sowaidan & Partners",
    des3Menu: "Rehana Plaza, Zahraa El Maadi, Cairo, Egypt",
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
