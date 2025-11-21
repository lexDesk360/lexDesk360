localStorage.setItem("currentPage", "midwesttradelaw");
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
const item = {
  id: 5,
  image: "../assets/images/our-network/network6.png",
  image2: "../assets/images/our-network/n4-1.png",
  image3: "../assets/images/our-network/n4-2.png",
  url: "./midwesttradelaw",
  counrty: {
    eng: "United States Of America",
    ar: "الولايات المتحددة الأمريكية",
  },
  name: {
    eng: "LexDesk360 - Midwest Trade Law",
    ar: "LexDesk360 - Midwest Trade Law",
  },
  titlePage: {
    eng: "  Our Law Firms ",
    ar: "Our Law Firms",
  },
  about: {
    eng: "Midwest Trade Law is a boutique legal practice dedicated to advising clients on compliance with international trade laws and regulations, including economic sanctions and embargoes, export controls, antiboycott matters, as well as customs, free trade agreements, and other trade-related issues.",
    ar: "Midwest Trade Law هي مؤسسة قانونية متخصصة مخصصة لتقديم المشورة للعملاء بشأن الامتثال لقوانين وأنظمة التجارة الدولية، بما في ذلك العقوبات الاقتصادية والحظر، وضوابط التصدير، ومسائل مكافحة المقاطعة، بالإضافة إلى الجمارك، واتفاقيات التجارة الحرة، وغيرها من القضايا المتعلقة بالتجارة.",
  },
  practice: {
    eng: {
      des: "The firm provides comprehensive legal services, including:",
      content: [
        {
          name: "Corporate & Commercial :",
          des: "joint ventures, acquisitions, partnerships, and regulatory compliance.",
        },
        {
          name: "Governance & Risk :",
          des: "corporate governance, restructuring, and compliance frameworks.",
        },
        {
          name: "Litigation & Dispute Resolution :",
          des: "commercial, civil, family, and labor law cases.",
        },
        {
          name: "Regulatory & Trade :",
          des: "investment, licensing, and trade law advisory.",
        },
        {
          name: "Contracts :",
          des: "drafting, negotiating, and reviewing commercial agreements.",
        },
        {
          name: "Advisory :",
          des: "strategic counsel on adapting to shifting legal and regulatory environments.",
        },
      ],
    },
    ar: {
      des: "تقدم الشركة خدمات قانونية شاملة، بما في ذلك: ",
      content: [
        {
          name: "الشركات والتجارة :",
          des: "المشاريع المشتركة، وعمليات الاستحواذ، والشراكات، والامتثال للوائح التنظيمية.",
        },
        {
          name: "الحوكمة والمخاطر :",
          des: "حوكمة الشركات، وإعادة الهيكلة، وأطر الامتثال.",
        },
        {
          name: "التقاضي وتسوية المنازعات :",
          des: "القضايا التجارية والمدنية والأسرية وقضايا قانون العمل.",
        },
        {
          name: "التنظيم والتجارة :",
          des: "الاستثمار والترخيص والاستشارات القانونية التجارية.",
        },
        {
          name: "العقود :",
          des: "صياغة الاتفاقيات التجارية والتفاوض بشأنها ومراجعتها.",
        },
        {
          name: "الاستشارات :",
          des: "المشورة الاستراتيجية بشأن التكيف مع البيئات القانونية والتنظيمية المتغيرة",
        },
      ],
    },
  },
  sector: {
    eng: {
      des: "The team’s experience covers a broad range of industries, including:",
      content: [
        {
          des: "Real estate development and infrastructure",
        },
        {
          des: "Trade, transportation, and supply chains",
        },
        {
          des: "Contractors and engineering consultancies",
        },
        {
          des: "Healthcare, pharmaceuticals, and education",
        },
        {
          des: "Oil, gas, and energy",
        },
        {
          des: "Family businesses and investment companies",
        },
      ],
    },
    ar: {
      des: "تغطي خبرة الفريق مجموعة واسعة من الصناعات، بما في ذلك: ",
      content: [
        {
          des: "تطوير العقارات والبنية التحتية",
        },
        {
          des: "التجارة والنقل وسلاسل التوريد ",
        },
        {
          des: "المقاولون والاستشارات الهندسية ",
        },
        {
          des: "الرعاية الصحية والأدوية والتعليم ",
        },
        {
          des: "النفط والغاز والطاقة ",
        },
        {
          des: "الشركات العائلية وشركات الاستثمار ",
        },
      ],
    },
  },
}
const translations = {
  eng: {
    home: "Home",
    aboutTitle: "About the Firm",
    services: "Role Within LexDesk360",
    view: "View Partner Website",
    parac: "Practice Areas ",
    sector: "Sector Expertise",
    coomingSoon: "This page is currently under maintenance and will be available again shortly.",
    underConstruction: "",
  },
  ar: {
    home: "الصفحة الرئيسية",
    aboutTitle: "نبذة عن الشركة",
    services: "الدور داخل LexDesk360 ",
    view: "زيارة موقع الشريك",
    parac: "مجالات الممارسة",
    sector: "الخبرة القطاعية",
    coomingSoon: "هذه الصفحة قيد الصيانة حاليًا وستكون متاحة مرة أخرى قريبًا.",
    underConstruction: "الصفحة قيد الإنشاء.",
  },
};
const translationsData = {
  pathPage: item.titlePage[lang],
  titlePage: 'Midwest Trade Law',
  about: item.about[lang],
  // within: item.within[lang],
  // practice: item.practice[lang].des,
  // sector: item.sector[lang].des,
};
document.getElementById("img1").src = item.image2;
// document.getElementById("img2").src = item.image3;

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

// let practiceList = document.getElementById("practiceList");
// practiceList.innerHTML = item.practice[lang].content
//   .map(
//     (item, index) => `
//       <p class='bold'>${item.name}</p>
//       <p class='des'>
//       ${item.des}
//       </p>
//     `
//   )
//   .join("");

// sectorList.innerHTML = item.sector[lang].content
//   .map(
//     (item, index) => `
//       <p class='bold none'>${item.des}</p>

//     `
//   )
//   .join("");
// if (item.link == "") {
//   document.getElementById("linkpage").style.display = "none";
// }
localStorage.setItem("currentPageNew", 1);
localStorage.setItem("activeForm", null);
