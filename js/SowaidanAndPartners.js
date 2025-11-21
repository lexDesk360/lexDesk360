localStorage.setItem("currentPage", "Sowaidan&Partners");
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
const item =  {
  id: 1,
  image: "../assets/images/our-network/network1.png",
  image2: "../assets/images/our-network/n1-1.jpg",
  image3: "../assets/images/our-network/n1-2.jpg",
  url: "./Sowaidan&Partners",
  counrty: {
    eng: "Egypt",
    ar: "مصر",
  },
  name: {
    eng: "LexDesk360 - Sowaidan & Partners",
    ar: "LexDesk360 - سويدان وشركاه",
  },
  titlePage: {
    eng: "  Our Law Firms ",
    ar: "Our Law Firms",
  },
  about: {
    eng: [
      "Sowaidan & Partners is a full-service Egyptian law firm founded in 2025 by Walid Sowaidan. The firm delivers business-critical counsel across corporate, commercial, and regulatory matters, complex disputes, and high-stakes investigations. Known for partner-led service and clear, actionable advice, the team helps clients anticipate risk, resolve disputes efficiently, and achieve strategic objectives",
    ],
    ar: [
      "سويدان وشركاه هي شركة محاماة مصرية متكاملة الخدمات تأسست عام 2025 على يد وليد سويدان. تقدم الشركة استشارات مهمة في الشؤون المؤسسية والتجارية والتنظيمية، والنزاعات المعقدة، والتحقيقات عالية المخاطر. يشتهر المكتب بخدمات يقودها الشركاء ونصائح واضحة قابلة للتنفيذ تساعد العملاء على توقع المخاطر وحل النزاعات بكفاءة وتحقيق الأهداف الاستراتيجية. ",
    ],
  },
  practice: {
    eng: {
      des: "The firm provides comprehensive services, including:",
      content: [
        {
          name: "Corporate & Commercial:",
          des: "mergers & acquisitions, joint ventures, governance, contracts, and regulatory advisory",
        },
        {
          name: "Litigation:",
          des: "representation in criminal, family, corporate, and commercial disputes",
        },
        {
          name: "Compliance & Risk:",
          des: "audits, programs, and internal investigations",
        },
        {
          name: "Intellectual Property:",
          des: "protection, commercialization, and enforcement",
        },
        {
          name: "Employment Law:",
          des: "workforce strategy, executive contracts, and sensitive disputes",
        },
        {
          name: "Arbitration:",
          des: "acting in institutional and ad hoc proceedings",
        },
      ],
    },
    ar: {
      des: "تشمل خدمات الشركة: ",
      content: [
        {
          name: "الشركات والتجارة:",
          des: "عمليات الدمج والاستحواذ، والمشاريع المشتركة، والحوكمة، والعقود، والاستشارات التنظيمية.",
        },
        {
          name: "التقاضي:",
          des: "التمثيل في النزاعات الجنائية والأسرية والتجارية. ",
        },
        {
          name: "الامتثال والمخاطر:",
          des: "التدقيق والبرامج والتحقيقات الداخلية. ",
        },
        {
          name: "الملكية الفكرية:",
          des: "حماية الحقوق وتسويقها وإنفاذها.",
        },
        {
          name: "قانون العمل:",
          des: " استراتيجيات القوى العاملة والعقود التنفيذية والنزاعات الحساسة.",
        },
        {
          name: "التحكيم:",
          des: "التمثيل في الإجراءات المؤسسية والخاصة. ",
        },
      ],
    },
  },
  sector: {
    eng: {
      des: "Sowaidan & Partners’ experience spans a wide range of industries, including",
      content: [
        {
          des: "Banking, finance, and capital markets",
        },
        {
          des: "Healthcare, pharmaceuticals, and medical services ",
        },
        {
          des: "Real estate, construction, and engineering consultancies ",
        },
        {
          des: "Insurance, contractors, and major corporations ",
        },
        {
          des: "Maritime, aviation, and logistics  ",
        },
        {
          des: "Energy, oil & gas, and technology   ",
        },
        {
          des: "Emerging areas such as digital currencies and investment advisory  ",
        },
      ],
    },
    ar: {
      des: "تمتد خبرة شركة سويدان وشركاه لتشمل مجموعة واسعة من الصناعات، بما في ذلك: ",
      content: [
        {
          des: "البنوك والتمويل وأسواق رأس المال",
        },
        {
          des: "الرعاية الصحية والأدوية والخدمات الطبية",
        },
        {
          des: "التطوير العقاري والبناء والاستشارات الهندسية ",
        },
        {
          des: "التأمين والمقاولون والشركات الكبرى ",
        },
        {
          des: "الشحن البحري والطيران واللوجستيات  ",
        },
        {
          des: "الطاقة والنفط والغاز والتكنولوجيا ",
        },
        {
          des: "المجالات الناشئة مثل العملات الرقمية والاستشارات الاستثمارية ",
        },
      ],
    },
  },
  within: {
    eng: [
      "As part of the LexDesk360 Global Network of Law Firms, Sowaidan & Partners provides on-the-ground counsel in Egypt while coordinating seamlessly with regional and international offices. All matters follow LexDesk360 standards for conflict checks, confidentiality, and reporting. The firm offers flexible engagement formats, monthly retainers, or project-based mandates, delivered by a dedicated multidisciplinary team.",
    ],
    ar: [
      "بصفته جزءًا من شبكة LexDesk360 العالمية لمكاتب المحاماة، يقدم مكتب سويدان وشركاه استشارات ميدانية في مصر مع تنسيق سلس مع المكاتب الإقليمية والدولية. تُدَار القضايا جميعها وفقًا لمعايير LexDesk360 الخاصة بفحص تضارب المصالح، والسرية، وإعداد التقارير. كما يقدم المكتب أشكالًا مرنة للتعاون، سواء عبر أتعاب شهرية أو مشروعات محددة، ينفذها فريق متعدد التخصصات.",
    ],
  },
  link: "",
};
console.log(item);
const translations = {
  eng: {
    home: "Home",
    aboutTitle: "About the Firm",
    services: "Role Within LexDesk360",
    view: "View Partner Website",
    parac: "Practice Areas ",
    sector: "Sector Expertise",
    name:"Sowaidan & Partners"
  },
  ar: {
    home: "الصفحة الرئيسية",
    aboutTitle: "نبذة عن الشركة",
    services: "الدور داخل LexDesk360 ",
    view: "زيارة موقع الشريك",
    parac: "مجالات الممارسة",
    sector: "الخبرة القطاعية",
    name:"سويدان وشركاه"
  },
};
const translationsData = {
  pathPage: item.titlePage[lang],
  titlePage: item.name[lang],
  about: item.about[lang],
  within: item.within[lang],
  practice: item.practice[lang].des,
  sector: item.sector[lang].des,
};
document.getElementById("img1").src = item.image2;
document.getElementById("img2").src = item.image3;

document.querySelectorAll("[translate-item]").forEach((el) => {
  const key = el.getAttribute("translate-item");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[key] || el.placeholder;
  } else {
    el.innerText = translationsData[key] || el.innerText;
  }
});
document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translations[lang][key] || el.placeholder;
  } else {
    el.innerText = translations[lang][key] || el.innerText;
  }
});

function getlinkedinProfile() {
  window.open(item.link, "_blank");
}

let practiceList = document.getElementById("practiceList");
practiceList.innerHTML = item.practice[lang].content
  .map(
    (item, index) => `
      <p class='bold'>${item.name}</p>
      <p class='des'>
      ${item.des}
      </p>
    `
  )
  .join("");

sectorList.innerHTML = item.sector[lang].content
  .map(
    (item, index) => `
      <p class='bold none'>${item.des}</p>
     
    `
  )
  .join("");
console.log(item);
if (item.link == "") {
  document.getElementById("linkpage").style.display = "none";
}
localStorage.setItem("currentPageNew", 1);
  localStorage.setItem("activeForm", null);
