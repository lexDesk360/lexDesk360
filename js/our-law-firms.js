localStorage.setItem("currentPage", "network-firms");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
localStorage.setItem("activeForm", null);

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}

let networkMidwest = [
  {
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
  },
  {
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
  },
];

let container = document.getElementById("network-content");
let template = document.getElementById("network");
networkMidwest.forEach((item) => {
  let clone = template.content.cloneNode(true);
  clone.querySelector("img").src = item.image;
  clone.querySelector(".country").textContent = item.counrty[lang];
  clone.querySelector(".name").textContent = item.name[lang];
  let viewMore = clone.querySelector(".link-parag");
  viewMore.addEventListener("click", () => {
    itemDetails = item;
    localStorage.setItem("selectedNetwork", JSON.stringify(itemDetails));
    window.location.href = item.url;
  });
  container.appendChild(clone);
});

const translationsData = {
  eng: {
    pathPage: "Home ",
    titlePage: "Our Law Firms",
    moreToCome: "“And more to come…”",
    cominfSoon: "“Coming soon…”",
    viewMore: "View More",
    become: "Become A Law Firm",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "شبكتنا من الشركاء ",
    moreToCome: "“والمزيد قادم…”",
    cominfSoon: "“قريبًا...”",
    viewMore: "عرض المزيد",
    become: "انضم إلى شبكتنا كشركة",
  },
};

document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerText = translationsData[lang][key] || el.innerText;
  }
});

localStorage.setItem("currentPageNew", 1);

function getPageJoin() {
  localStorage.setItem("activeForm", "tab1");
  window.location.href = "./join-us";
}
