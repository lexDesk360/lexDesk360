localStorage.setItem("currentPage", "home");
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
let Allnews;
let news;
let Services;
Promise.all([
  fetch("./assets/json/news.json").then(res => res.json()),
  fetch("./assets/json/services-home-page.json").then(res => res.json())
])
.then(([newsData, servicesData]) => {
  Allnews = newsData;
  Services = servicesData;
  renderData();
  setDataNews();
})
.catch(err => console.error(err));
let activerServices = 0;

let translations;
function renderData() {
  translations = {
    eng: {
      titleHome: "Simplify Global Business. Legally.",
      titleHome2: "Your Partner for Cross-Border Growth",
      descrbtionHome:
        "Running a business across borders should feel like growth, not guesswork. Yet, for many leaders, contracts, compliance, and disputes turn ambition into a 3 a.m. worry. That’s where LexDesk360 steps in. We turn legal complexity into clarity, translating frameworks, regulations, and risks into practical strategies. No jargon. No surprises. Just clear direction, steady support, and a partner who helps you scale with confidence.",
      aboutLink: "About LexDesk360",
      Explore: "Explore More",
      MeanBusiness: "Where Lawyers Mean Business",
      BussinessDes:
        "We’re not a traditional law firm. We’re a corporate legal platform built for today’s fast-moving businesses.",
      OurServices: "Our Services",
      titleServices: "Four Solutions. Infinite Possibilities.",
      ViewAll: "View All",
      LATESTNEWS: "NEWS & blogs",
      Flexible: "Flexible. Scalable. Business-Driven.",
      flexDes:
        "Most see legal as a brake pedal. We see it as the steering wheel, guiding you safely, helping you move faster.",
      disucss: "Let’s Discuss Your Matter",
      ServicesName: Services[lang][activerServices].name,
      ServicesSubName: Services[lang][activerServices].subName,
      ServicesDes: Services[lang][activerServices].des,
      KnowMore: "Know More",
      READMORE: "READ MORE",
    },
    ar: {
      titleHome: "أبعد من القانون التقليدي",
      titleHome2: "Your Partner for Cross-Border Growth",
      descrbtionHome:
        "إدارة الأعمال عبر الحدود ينبغي أن تعني توسعاً وازدهاراً، لا قلقاً وسهراً. لكن العقود المعقدة، ومتطلبات الامتثال، والنزاعات العابرة للحدود قد تحوّل الطموح إلى همٍّ يطرق بابك في الثالثة فجراً.",
      aboutLink: "عن LexDesk360",
      Explore: "تصفح المزيد",
      MeanBusiness: "حيث يجمع المحامون بين القانون والأعمال",
      BussinessDes:
        "لسنا مكتب محاماة تقليدي. نحن منصة قانونية للشركات صُممت لتخدم أعمال اليوم السريعة",
      OurServices: "خدماتنا ",
      titleServices: "أربع حلول، وإمكانات بلا حدود.",
      ViewAll: "عرض الكل",
      LATESTNEWS: "الأخبار والمدونات",
      Flexible: "مرنة، قابلة للتوسع، موجهة للأعمال.",
      flexDes:
        "كثيرون يرون القانون كفرامل تُبطئ عجلة العمل. نحن نراه عجلة القيادة، وأحياناً دواسة السرعة التي تُسرّع المسار.",
      disucss: "دعنا نناقش قضيتك",
      ServicesName: Services[lang][activerServices].name,
      ServicesSubName: Services[lang][activerServices].subName,
      ServicesDes: Services[lang][activerServices].des,
      KnowMore: "اعرف المزيد",
      READMORE: "أقرا المزيد",
    },
  };
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[lang][key] || el.innerText;
  });
}
function setDataNews() {
  let items = document.getElementById("items");
  news = Allnews.sort(() => 0.5 - Math.random()).slice(0, 2);
  items.innerHTML = news
    .map(
      (item, index) => `    <div class="news-item">
            <div class="title-line-compo">
              <div class="date">
              </div>
              <div class="title-small">
                <p>${item[lang].name}</p>
              </div>
            </div>
            <div class="descrbtion">
              <p class="des-compo">${item[lang].des}</p>
            </div>
             <div class="link-more">
                    <p class="cursor" onclick="getDetailsNews(${index})" >${translations[lang].READMORE}</p>
                </div>
          </div>`
    )
    .join("");
}
function getDetailsNews(index) {
  console.log(index);
  localStorage.setItem("selectedNew", JSON.stringify(news[index]));
  let filteredArr = Allnews.filter((_, i) => i !== index);
  let randomTwoNews = filteredArr.sort(() => 0.5 - Math.random()).slice(0, 2);
  localStorage.setItem("randomTwoNews", JSON.stringify(randomTwoNews));
  window.location.href = "./news-details.html";
}
function nextServices() {
  console.log(activerServices);
  if (activerServices != 3) {
    activerServices += 1;
  } else if (activerServices == 3) {
    activerServices = 0;
  }
  renderData();
}
function prevServices() {
  if (activerServices != 0) {
    activerServices -= 1;
  } else if (activerServices == 0) {
    activerServices = 3;
  }
  renderData();
}
function getPage(pageName) {
  window.location.href = `./${pageName}.html`;
}
function openCompanyLinkedin() {
  window.open("https://www.linkedin.com/company/lexdesk360/", "_blank");
}

function openOurServicesPage() {
  localStorage.setItem("activeTab", Services[lang][activerServices].id);
  window.location.href = "./our-services.html";
}
function openserpage() {
  localStorage.setItem("activeTab", 1);
  window.location.href = "./our-services.html";
}

function opencontactusPage() {
  window.location.href = "./contact-us.html";
}
localStorage.setItem("currentPageNew", 1);
localStorage.setItem("activeForm", null);
