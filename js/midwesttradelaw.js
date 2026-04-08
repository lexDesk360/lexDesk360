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
if(lang == "greek"){
  body.classList.add("greek");

}
if(lang == "it"){
  body.classList.add("it");

}
if(lang == "french"){
  body.classList.add("french");
}
const item = {
  id: 5,
  image: "../assets/images/our-network/network6.png",
  image2: "../assets/images/our-network/n4-1.png",
  image3: "../assets/images/our-network/n4-3.png",
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
    ar: "شركاؤنا من مكاتب المحاماة",
  },
  about: {
    eng: "Midwest Trade Law is a boutique U.S. law firm founded in 2020 by Valentin Povarchuk, an international trade attorney with over two decades of experience in global trade compliance. The firm specializes in import and export regulation, economic sanctions, embargoes, and trade compliance risk management. It is recognized for combining deep regulatory knowledge with practical insight, helping multinational companies integrate legal compliance into everyday business operations. Midwest Trade Law provides clients with direct access to senior-level expertise typically found in large law firms — at more accessible rates.",
    ar:" Midwest Trade Law هي شركة محاماة أمريكية متخصصة في قوانين وتنظيمات التجارة الدولية تأسست عام 2020 على يد فالنتين بوفارتشوك، المحامي الدولي في الامتثال التجاري والذي يتمتع بخبرة تمتد لأكثر من عشرين عامًا في الامتثال للتجارة العالمية وإدارة المخاطر. تقدم الشركة استشارات رفيعة المستوى في تنظيمات الاستيراد والتصدير، والعقوبات الاقتصادية، والحظر، وضوابط الامتثال، وتشتهر بدمج المعرفة القانونية العميقة مع حلول عملية قابلة للتنفيذ تساعد الشركات متعددة الجنسيات على دمج الامتثال في العمليات اليومية.وتوفر الشركة للعملاء خبرة تقودها الشراكة ومستوى استشاري يعادل الشركات القانونية الكبرى ولكن بنهج أكثر مرونة وتكلفة مناسبة.",
  },
  practice: {
    eng: {
      des: "",
      content: [
        {
          name: "Trade Compliance & Regulation",
          des: [
            "•	Legal opinions on complex trade laws, export controls, sanctions, and embargoes.",
            "•	Advice on “know your customer” (KYC) due diligence and high-risk transactions.",
          ],
        },
        {
          name: "Investigations & Disclosures",
          des: [
            "•	Conducting internal investigations under attorney-client privilege.",
            "•	Preparing and filing voluntary and prior disclosures with U.S. agencies.",
            "•	Representation during audits, subpoenas, and enforcement actions.",
          ],
        },
        {
          name: "Sanctions & Restricted Party Matters",
          des: [
            "•	Guidance on sanctions regimes and restricted party listings.",
            "•	Filing petitions for delisting and engagement with regulatory authorities.",
          ],
        },
        {
          name: "Corporate Transactions & Due Diligence",
          des: [
            "•	Trade compliance due diligence for mergers, acquisitions, and investments.",
            "•	Drafting compliance warranties and representations in corporate transactions.",
          ],
        },
        {
          name: "Policies, Contracts & Documentation",
          des: [
            "•	Developing compliance policies, standards, and manuals aligned with U.S. and international regulations.",
            "•	Drafting and negotiating contractual clauses and certifications that mitigate legal risk.",
          ],
        },
        {
          name: "Government Advocacy",
          des: [
            "•	Representing clients before U.S. government agencies in licensing, classification, and rule-making proceedings",
            "•	Securing favorable rulings, advisory opinions, and regulatory outcomes.",
          ],
        },
        {
          name: "Training & Education",
          des: [
            "•	Conducting workshops and executive briefings on emerging trade laws and enforcement trends.",
          ],
        },
      ],
    },
    ar: {
      des: "تشمل خدمات الشركة:",
      content: [
        {
          name: "الامتثال التجاري والتنظيمي",
          des: [
            "•	تقديم آراء قانونية حول القوانين التجارية المعقدة، وضوابط التصدير، والعقوبات، والحظر.",
            "• استشارات حول العناية الواجبة وإجراءات “اعرف عميلك” للمعاملات والمخاطر العالية.",
          ],
        },
        {
          name: "التحقيقات والإفصاحات",
          des: [
            "• إجراء تحقيقات داخلية تحت حماية علاقة المحامي بالعميل.",
            "• إعداد وتقديم الإفصاحات الطوعية والسابقة إلى الجهات الأمريكية.",
            "• التمثيل في عمليات التفتيش، والاستدعاءات، وإجراءات الإنفاذ.",
          ],
        },
        {
          name: "العقوبات والمسائل المتعلقة بالأطراف المحظورة",
          des: [
            "• إرشاد حول أنظمة العقوبات الأمريكية والدولية وقوائم الأطراف المحظورة.",
            "• تقديم التماسات للشطب والتواصل الرسمي مع الجهات الرقابية.",
          ],
        },
        {
          name: "المعاملات التجارية والعناية الواجبة",
          des: [
            "• تقييم الامتثال التجاري لعمليات الاندماج والاستحواذ والاستثمارات.",
            "• صياغة ضمانات وتعهدات الامتثال داخل العقود التجارية.",
          ],
        },
        {
          name: "السياسات والعقود والوثائق",
          des: [
            "• إعداد سياسات الامتثال والأدلة الداخلية المتوافقة مع التشريعات الأمريكية والدولية.",
            "• صياغة التزامات تعاقدية تقلل من المخاطر القانونية والتشغيلية.",
          ],
        },
        {
          name: "التواصل مع الهيئات الحكومية",
          des: [
            "• التمثيل أمام الجهات الأمريكية المختصة في التراخيص والتصنيفات والإجراءات التنظيمية.",
            "• الحصول على آراء تنظيمية وتفسيرات رسمية لصالح العملاء.",
          ],
        },
        {
          name: "التدريب والتوعية",
          des: [
            "• تقديم ورش عمل ودورات للمسؤولين التنفيذيين حول قوانين التجارة واتجاهات الإنفاذ المستجدة.",
          ],
        },
      ],
    },
  },
  sector: {
    eng: {
      des: "Midwest Trade Law serves clients across sectors where trade regulations are mission-critical:",
      content: [
        {
          des: "Manufacturing and technology",
        },
        {
          des: "Pharmaceuticals and medical devices",
        },
        {
          des: "Energy, oil & gas, and advanced materials",
        },
        {
          des: "Aerospace, aviation, and logistics",
        },
        {
          des: "Financial institutions and investment firms",
        },
        {
          des: "Family businesses and investment companies",
        },
        {
          des: "Emerging industries such as digital trade and dual-use technologies",
        },
      ],
    },
    ar: {
      des: "تقدم Midwest Trade Law خبراتها للقطاعات التي تعتمد بشكل حاسم على الامتثال التجاري، وتشمل:",
      content: [
        {
          des: "الصناعات التحويلية والتكنولوجيا",
        },
        {
          des: "الصناعات الدوائية والأجهزة الطبية",
        },
        {
          des: "الطاقة والنفط والغاز والمواد المتقدمة",
        },
        {
          des: "الطيران والفضاء والخدمات اللوجستية",
        },
        {
          des: "المؤسسات المالية وشركات الاستثمار",
        },
        {
          des: "القطاعات الناشئة مثل التجارة الرقمية والتقنيات ثنائية الاستخدام",
        }
      ],
    },
  },
  founder: {
    eng: {
      des: "",
      content: [
        {
          name: "Valentin Povarchuk is an international trade attorney and the founder of Midwest Trade Law.",
          des: [""],
        },
        {
          name: "Education:",
          des: [
            "•	Cornell University, B.A. (summa cum laude, highest honors)",
            "•	University of Washington School of Law, J.D., where he served as Editor-in-Chief of the Pacific Rim Law & Policy Journal",
          ],
        },
        {
          name: "Professional Background:",
          des: [
            "•	Early career at leading Washington, D.C. law firms including Steptoe & Johnson LLP, McDermott Will & Emery LLP, and Arent Fox LLP.",
            "•	Former in-house trade compliance counsel for major global corporations in the manufacturing, technology, and medical sectors.",
            "•	Advised corporate leadership on export controls, sanctions, antiboycott regulations, and import matters.",
          ],
        },
        {
          name: "Licenses:",
          des: [
            "•	Admitted to practice law in Minnesota, Washington, D.C., and before the U.S. Court of International Trade.",
          ],
        },
        {
          name: "Languages:",
          des: ["• Native Russian speaker, proficient in French."],
        },
        {
          name: "Professional & Civic Affiliations:",
          des: [
            "•	Counsel to the Board of Directors – Midwest Global Trade Association",
            "•	Former Chair (2022–2023) – International Business Law Section, Minnesota State Bar Association",
            "•	Counsel & Chair of the Board – Boundary Waters Advisory Committee",
          ],
        },
        {
          name: "Publications & Presentations (selected):",
          des: [
            "•	Speaker at WorldECR Forum (Washington D.C., 2023–2024).",
            "•	CLE presenter on export controls and sanctions for Minnesota State Bar Association.",
            "•	Contributor to Export Compliance Manager and Thomson Reuters compliance publications.",
          ],
        },
      ],
    },
   ar: {
      des: "",
      content: [
        {
          name: "فالنتين بوفارتشوك هو محامٍ دولي متخصص في الامتثال للتجارة ومؤسس Midwest Trade Law.",
          des: [""],
        },
        {
          name: "التعليم",
          des: [
            "•	جامعة كورنيل، بكالوريوس بمرتبة الشرف العليا.",
            "•	كلية الحقوق بجامعة واشنطن، حيث شغل منصب رئيس تحرير مجلة Pacific Rim Law & Policy.",
          ],
        },
        {
          name: "الخبرة المهنية",
          des: [
            "•	العمل في شركات محاماة رائدة بواشنطن العاصمة، منها Steptoe & Johnson LLP، McDermott Will & Emery LLP، وArent Fox LLP.",
            "•	شغل سابقًا منصب مستشار داخلي للامتثال التجاري لدى شركات عالمية في قطاعات التكنولوجيا والتصنيع والطب.",
            "•	تقديم استشارات للإدارة العليا حول ضوابط التصدير والعقوبات ولوائح مكافحة المقاطعة ومسائل الاستيراد.",
          ],
        },
        {
          name: "التراخيص",
          des: [
            "•	مرخص بمزاولة المحاماة في مينيسوتا وواشنطن العاصمة وأمام محكمة التجارة الدولية الأمريكية.",
          ],
        },
        {
          name: "اللغات",
          des: ["• الروسية (اللغة الأم)","• الفرنسية (مستوى متقدم)"],
        },
        {
          name: "العضويات المهنية والمجتمعية",
          des: [
            "• مستشار مجلس إدارة – Midwest Global Trade Association",
            "• رئيس سابق لقسم القانون التجاري الدولي – نقابة محامي مينيسوتا (2023–2022)",
            "• مستشار ورئيس مجلس إدارة – Boundary Waters Advisory Committee",
          ],
        },
        {
          name: "منشورات ومشاركات مختارة",
          des: [
            "• متحدث في منتدى WorldECR بواشنطن (2023–2024).",
            "• مقدّم برامج تدريبية حول ضوابط التصدير لنقابة محامي مينيسوتا.",
            "• مساهم في منشورات Export Compliance Manager ومنشورات الامتثال التابعة لتومسون رويترز.",
          ],
        },
      ],
    },
  },
  within: {
    eng: [
      "As part of the LexDesk360 Global Network of Law Firms, Sowaidan & Partners provides on-the-ground counsel in Egypt while coordinating seamlessly with regional and international offices. All matters follow LexDesk360 standards for conflict checks, confidentiality, and reporting. The firm offers flexible engagement formats, monthly retainers, or project-based mandates, delivered by a dedicated multidisciplinary team.",
    ],
    ar: [
      "تعمل Midwest Trade Law بصفتها الشركة الشقيقة في الولايات المتحدة ضمن منظومة LexDesk360 العالمية التي تضم شبكات من مكاتب المحاماة والخبراء القانونيين عبر عدة ولايات قضائية. وتوفر الشركة خبرة متقدمة في الامتثال التجاري والعقوبات والقواعد التنظيمية العابرة للحدود مع تنسيق كامل بين الفرق الإقليمية والدولية التابعة لـ LexDesk360.  تدار جميع الملفات وفق معايير LexDesk360 الخاصة بفحص تضارب المصالح، والسرية، وجودة التقارير. كما يقدم المكتب نماذج تعاون مرنة تشمل أتعابًا شهرية أو مشروعات محددة ينفذها فريق متعدد التخصصات.وتتيح هذه الشراكة للعملاء خدمات قانونية متكاملة وسلسة عبر جميع مراحل عملهم، من الحوكمة والامتثال إلى التجارة العالمية وتوسّع الأسواق، ضمن إطار موحد يضمن الجودة والاتساق على مستوى عالمي."
    ],
  },
};
const translations = {
  eng: {
    home: "Home",
    aboutTitle: "About the Firm",
    services: "Role Within LexDesk360",
    view: "View Partner Website",
    parac: "Practice Areas ",
    sector: "Sector Expertise",
    founder: "About The Founder ",
    coomingSoon:
      "This page is currently under maintenance and will be available again shortly.",
    underConstruction: "",
  },
  ar: {
    home: "الصفحة الرئيسية",
    aboutTitle: "نبذة عن الشركة",
    services: "الدور داخل LexDesk360 ",
    view: "زيارة موقع الشريك",
    parac: "مجالات الممارسة",
    sector: "الخبرة القطاعية",
    founder: "نبذة عن المؤسس ",
    coomingSoon: "هذه الصفحة قيد الصيانة حاليًا وستكون متاحة مرة أخرى قريبًا.",
    underConstruction: "الصفحة قيد الإنشاء.",
  },
};
const translationsData = {
  pathPage: item.titlePage[lang],
  titlePage: "Midwest Trade Law",
  about: item.about[lang],
  within: item.within[lang],
  practice: item.practice[lang].des,
  sector: item.sector[lang].des,
  founder: item.founder[lang].des,
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
let sectorList = document.getElementById("sectorList");
let founderList = document.getElementById("founderList");


practiceList.innerHTML = item.practice[lang].content
  .map(({ name, des }) => {
    const descriptionHTML = des.map((d) => `<p class="des">${d}</p>`).join("");

    return `
      <p class="bold">${name}</p>
      ${descriptionHTML}
    `;
  })
  .join("");
sectorList.innerHTML = item.sector[lang].content
  .map(
    (item, index) => `
      <p class='bold none'>${item.des}</p>

    `
  )
  .join("");

founderList.innerHTML = item.founder[lang].content
  .map(({ name, des }) => {
    const descriptionHTML = des.map((d) => `<p class="des">${d}</p>`).join("");

    return `
      <p class="bold">${name}</p>
      ${descriptionHTML}
    `;
  })
  .join("");

if (item.link == "") {
  document.getElementById("linkpage").style.display = "none";
}
localStorage.setItem("currentPageNew", 1);
localStorage.setItem("activeForm", null);
