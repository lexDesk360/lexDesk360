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



    // {
    //     "image": "../assets/images/members/member8.png",
    //     "name": {
    //         "eng": "Mahmoud Nassef ",
    //         "ar": "محمود ناصف "
    //     },
    //     "positionJob": {
    //         "eng": "Chief Financial Officer",
    //         "ar": "المدير المالي: LexDesk360"
    //     },
    //     "descripation": {
    //         "eng": [
    //             "Mahmoud Nassef is the Founder and Owner of Nassef & Partners International (NPI), a leading Egyptian accounting, auditing, and tax consultancy firm, and currently serves as Chief Financial Officer of LexDesk360. With over 11 years of experience, he has advised domestic and multinational enterprises on complex tax, accounting, and compliance matters.",
    //             "Mahmoud’s expertise spans direct and indirect taxation, VAT advisory for resident and non-resident entities, and the application of double taxation agreements and OECD guidelines.",
    //             "He has led numerous corporate tax restructuring and planning projects, identified and mitigated tax risk areas, and advised on transfer pricing across multiple industries.",
    //             "Throughout his career, he has delivered strategic tax and financial solutions to global companies such as Deezer SA, Italgen SPA, and CAF SA, as well as a wide range of clients in sectors including hospitality, manufacturing, finance, oil and gas, contracting, and food and beverage.",
    //             "His experience also includes tax due diligence for mergers, acquisitions, and IPOs, as well as designing and evaluating internal control systems for large enterprises.",
    //             "A member of the Egyptian Record of Chartered Accountants and the Egyptian Society of Taxation (MEST), Mahmoud holds a B.Sc.",
    //             "in Accounting from Ain Shams University. He regularly participates in national and international accounting and tax conferences, seminars, and training programs, and continues to bring strategic financial insight to support LexDesk360’s cross-border legal and business operations."
    //         ],
    //         "ar": [
    //             "محمود ناصف هو مؤسس ورئيس شركة Nassef & Partners International (NPI)، إحدى الشركات الرائدة في الاستشارات المحاسبية والضريبية في مصر. يشغل حاليًا منصب المدير المالي لـLexDesk360.",
    //             "بخبرة تفوق 11 عامًا، قدّم المشورة لمؤسسات محلية ودولية حول قضايا ضريبية ومحاسبية وامتثال معقدة. تشمل خبرته الضرائب المباشرة وغير المباشرة، والاستشارات الخاصة بضريبة القيمة المضافة للكيانات المقيمة وغير المقيمة، وتطبيق اتفاقيات منع الازدواج الضريبي وإرشادات منظمة التعاون الاقتصادي والتنمية (OECD).",
    //             "قاد العديد من مشاريع إعادة الهيكلة الضريبية والتخطيط، وحدد وعالج مجالات المخاطر الضريبية، وقدم المشورة بشأن تسعير التحويلات عبر صناعات متعددة.",
    //             "قدّم حلولًا استراتيجية لشركات عالمية مثل Deezer SA، Italgen SPA، CAF SA، إلى جانب مجموعة واسعة من العملاء في قطاعات تشمل الضيافة، والتصنيع، والتمويل، والنفط والغاز، والمقاولات، والأغذية والمشروبات.",
    //             "تشمل خبرته أيضًا العناية الواجبة الضريبية في صفقات الاندماج والاستحواذ والعروض العامة الأولية (IPOs)، بالإضافة إلى تصميم وتقييم أنظمة الرقابة الداخلية للمؤسسات الكبرى.",
    //             "عضو في سجل المحاسبين القانونيين المصريين والجمعية المصرية للضرائب (MEST). يحمل بكالوريوس محاسبة من جامعة عين شمس. يشارك بانتظام في مؤتمرات وندوات وبرامج تدريبية محلية ودولية في المحاسبة والضرائب، ويواصل تقديم رؤى مالية استراتيجية لدعم عملياتLexDesk360 القانونية والتجارية العابرة للحدود."
    //         ]
    //     },
    //     "linkedin": "https://www.linkedin.com/in/mahmoud-nassef-ca-mest-esaa-intermediate-3331bb157/"
    // }