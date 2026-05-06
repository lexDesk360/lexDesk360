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
if(lang == "greek"){
  body.classList.add("greek");

}
if(lang == "it"){
  body.classList.add("it");

}
if(lang == "french"){
  body.classList.add("french");
}
const item =   {
  id: 1,
  image: "../assets/images/our-network/network1.png",
  image2: "../assets/images/our-network/n1-1.jpg",
  image3: "../assets/images/our-network/n1-2.jpg",
  url: "./Sowaidan&Partners",
  counrty: {
    eng: "Egypt",
    ar: "مصر",
    it: "Egitto",
    french: "Egypte",
    greek: "Αίγυπτος"
  },
  name: {
    eng: "LexDesk360 - Sowaidan & Associates",
    ar: "LexDesk360 - سويدان وشركاؤه",
    it: "LexDesk360 - Sowaidan & Associates",
    french: "LexDesk360 - Sowaidan & Associates",
    greek: "LexDesk360 - Sowaidan & Associates"
  },
  titlePage: {
    eng: "  Our Law Firms ",
    ar: "شركاؤنا من مكاتب المحاماة",
    it: "I nostri studi legali",
    french: "NOS CABINETS D'AVOCATS",
    greek: "Our Law Firms"
  },
  about: {
    eng: [
      "Sowaidan & Associates is a full-service Egyptian law firm founded in 2025 by Walid Sowaidan. The firm delivers business-critical counsel across corporate, commercial, and regulatory matters, complex disputes, and high-stakes investigations. Known for partner-led service and clear, actionable advice, the team helps clients anticipate risk, resolve disputes efficiently, and achieve strategic objectives."
    ],
    ar: [
      "سويدان وشركاؤه هي شركة محاماة مصرية متكاملة الخدمات تأسست عام 2025 على يد وليد سويدان. تقدم الشركة استشارات قانونية حاسمة للأعمال في مختلف المجالات، بما في ذلك الشؤون المؤسسية والتجارية والتنظيمية، والنزاعات المعقدة، والتحقيقات ذات المخاطر العالية. يشتهر فريق العمل بخدماته التي يقودها الشركاء ونصائحه الواضحة والقابلة للتنفيذ، حيث يساعد العملاء على توقع المخاطر وحل النزاعات بكفاءة وتحقيق الأهداف الاستراتيجية."
    ],
    it: ["Sowaidan & Associates è uno studio legale egiziano a servizio completo fondato nel 2025 da Walid Sowaidan. Lo studio fornisce consulenza strategica in materia societaria, commerciale e normativa, controversie complesse e indagini ad alto rischio. Noto per il servizio guidato dai partner e per la consulenza chiara e concreta, il team aiuta i clienti ad anticipare i rischi, risolvere le controversie in modo efficiente e raggiungere gli obiettivi strategici."],
    french: ["Sowaidan & Associates est un cabinet d'avocats égyptien offrant une gamme complète de services, fondé en 2025 par Walid Sowaidan. Le cabinet fournit des conseils essentiels aux entreprises dans les domaines du droit des sociétés, du droit commercial et du droit réglementaire, ainsi que dans le cadre de litiges complexes et d'enquêtes à enjeux élevés. Réputée pour ses services dirigés par des associés et ses conseils clairs et concrets, l'équipe aide ses clients à anticiper les risques, à résoudre efficacement les litiges et à atteindre leurs objectifs stratégiques."],
    greek: ["Η Sowaidan & Associates είναι μια αιγυπτιακή δικηγορική εταιρεία πλήρους εξυπηρέτησης που ιδρύθηκε το 2025 από τον Walid Sowaidan. Η εταιρεία παρέχει συμβουλές ζωτικής σημασίας για τις επιχειρήσεις σε εταιρικά, εμπορικά και ρυθμιστικά θέματα, πολύπλοκες διαφορές και έρευνες υψηλού κινδύνου. Γνωστή για την εξυπηρέτηση υπό την καθοδήγηση των εταίρων και τις σαφείς, εφαρμόσιμες συμβουλές, η ομάδα βοηθά τους πελάτες να προβλέπουν τους κινδύνους, να επιλύουν αποτελεσματικά τις διαφορές και να επιτυγχάνουν τους στρατηγικούς τους στόχους."]
  },
  practice: {
    eng: {
      des: "The firm provides comprehensive services, including:",
      content: [{
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
      des: "يقدم المكتب خدمات شاملة، بما في ذلك: ",
      content: [{
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
    it: {
      des: "Lo studio offre servizi completi, tra cui:",
      content: [{
          name: "Societario e commerciale:",
          des: "fusioni e acquisizioni, joint venture, governance, contratti e consulenza normativa",
        },
        {
          name: "Contenzioso:",
          des: "rappresentanza in controversie penali, familiari, societarie e commerciali",
        },
        {
          name: "Conformità e rischio:",
          des: "audit, programmi e indagini interne",
        },
        {
          name: "Proprietà intellettuale:",
          des: "protezione, commercializzazione e applicazione",
        },
        {
          name: "Diritto del lavoro:",
          des: "strategia della forza lavoro, contratti dei dirigenti e controversie delicate",
        },
        {
          name: "Arbitrato:",
          des: "rappresentanza in procedimenti istituzionali e ad hoc",
        },
      ],
    },
    french: {
      des: "Le cabinet propose des services complets, notamment :",
      content: [{
          name: "Droit des sociétés et droit commercial :",
          des: "fusions et acquisitions, coentreprises, gouvernance, contrats et conseil en matière de réglementation",
        },
        {
          name: "Contentieux :",
          des: "représentation dans les litiges pénaux, familiaux, d'entreprise et commerciaux",
        },
        {
          name: "Conformité et risques :",
          des: "audits, programmes et enquêtes internes",
        },
        {
          name: "Propriété intellectuelle :",
          des: "protection, commercialisation et application",
        },
        {
          name: "Droit du travail :",
          des: "stratégie de gestion des effectifs, contrats de cadres et litiges sensibles",
        },
        {
          name: "Arbitrage :",
          des: "intervention dans le cadre de procédures institutionnelles et ad hoc",
        },
      ],
    },
    greek: {
      des: "Η εταιρεία παρέχει ολοκληρωμένες υπηρεσίες, μεταξύ των οποίων:",
      content: [{
          name: "Εταιρικό & Εμπορικό Δίκαιο:",
          des: "συγχωνεύσεις & εξαγορές, κοινοπραξίες, διακυβέρνηση, συμβάσεις και συμβουλευτικές υπηρεσίες σε θέματα κανονιστικής συμμόρφωσης",
        },
        {
          name: "Δικαστικές Διαφορές:",
          des: "εκπροσώπηση σε ποινικές, οικογενειακές, εταιρικές και εμπορικές διαφορές",
        },
        {
          name: "Συμμόρφωση & Κίνδυνοι:",
          des: "έλεγχοι, προγράμματα και εσωτερικές έρευνες",
        },
        {
          name: "Δικαίωμα Πνευματικής Ιδιοκτησίας:",
          des: "προστασία, εμπορευματοποίηση και επιβολή δικαιωμάτων",
        },
        {
          name: "Εργατικό Δίκαιο:",
          des: "στρατηγική εργατικού δυναμικού, συμβάσεις στελεχών και ευαίσθητες διαφορές",
        },
        {
          name: "Διαιτησία:",
          des: "εκπροσώπηση σε θεσμικές και ad hoc διαδικασίες",
        },
      ],
    }
  },
  sector: {
    eng: {
      des: "Sowaidan & Associates’ experience spans a wide range of industries, including",
      content: [{
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
      des: "تمتد خبرة مكتب سويدان وشركاه لتشمل مجموعة واسعة من الصناعات، بما في ذلك: ",
      content: [{
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
    it: {
      des: "L'esperienza di Sowaidan & Associates abbraccia un'ampia gamma di settori, tra cui",
      content: [{
          des: "Banca, finanza e mercati dei capitali",
        },
        {
          des: "Sanità, farmaceutica e servizi medici ",
        },
        {
          des: "Immobiliare, edilizia e consulenze ingegneristiche",
        },
        {
          des: "Assicurazioni, appaltatori e grandi società",
        },
        {
          des: "Marittimo, aviazione e logistica",
        },
        {
          des: "Energia, petrolio e gas e tecnologia ",
        },
        {
          des: "Settori emergenti quali valute digitali e consulenza in materia di investimenti ",
        },
      ],
    },
    french: {
      des: "L'expérience de Sowaidan & Associates couvre un large éventail de secteurs, notamment",
      content: [{
          des: "Banque, finance et marchés de capitaux",
        },
        {
          des: "Santé, industrie pharmaceutique et services médicaux",
        },
        {
          des: "Immobilier, construction et conseil en ingénierie",
        },
        {
          des: "Assurance, entrepreneurs et grandes entreprises",
        },
        {
          des: "Transport maritime, aviation et logistique",
        },
        {
          des: "Énergie, pétrole et gaz, et technologie ",
        },
        {
          des: "Secteurs émergents tels que les monnaies numériques et le conseil en investissement",
        },
      ],
    },
    greek: {
      des: "Η εμπειρία της Sowaidan & Associates καλύπτει ένα ευρύ φάσμα κλάδων, όπως",
      content: [{
          des: "Τραπεζικός, χρηματοοικονομικός και κεφαλαιαγορές",
        },
        {
          des: "Υγειονομική περίθαλψη, φαρμακευτικά προϊόντα και ιατρικές υπηρεσίες",
        },
        {
          des: "Ακίνητα, κατασκευές και συμβουλευτικές υπηρεσίες μηχανικών ",
        },
        {
          des: "Ασφάλειες, εργολάβοι και μεγάλες εταιρείες",
        },
        {
          des: "Ναυτιλία, αεροπορία και logistics ",
        },
        {
          des: "Ενέργεια, πετρέλαιο & φυσικό αέριο και τεχνολογία  ",
        },
        {
          des: "Αναδυόμενοι τομείς όπως τα ψηφιακά νομίσματα και η επενδυτική συμβουλευτική ",
        },
      ],
    }
  },
  within: {
    eng: [
      "As part of the LexDesk360 Global Network of Law Firms, Sowaidan & Associates provides on-the-ground counsel in Egypt while coordinating seamlessly with regional and international offices. All matters follow LexDesk360 standards for conflict checks, confidentiality, and reporting. The firm offers flexible engagement formats, monthly retainers, or project-based mandates, delivered by a dedicated multidisciplinary team."
    ],
    ar: [
      "كجزء من شبكة LexDesk360 العالمية للمكاتب القانونية، تقدم شركة سويدان وشركاؤه الاستشارات القانونية الميدانية في مصر مع التنسيق السلس مع المكاتب الإقليمية والدولية. تتبع جميع القضايا معايير LexDesk360 فيما يتعلق بفحص تضارب المصالح والسرية وإعداد التقارير. تقدم الشركة صيغ تعاقد مرنة، مثل أتعاب شهرية أو تفويضات على أساس المشاريع، يتم تنفيذها بواسطة فريق متعدد التخصصات مخصص."
    ],
    it: [
      "Come parte della rete globale di studi legali LexDesk360, Sowaidan & Associates fornisce consulenza in loco in Egitto, coordinandosi perfettamente con gli uffici regionali e internazionali. Tutte le questioni seguono gli standard di LexDesk360 in materia di verifica dei conflitti di interesse, riservatezza e rendicontazione. Lo studio offre modalità di collaborazione flessibili, con retibuzioni mensili o mandati basati su progetti, gestiti da un team multidisciplinare dedicato."
    ],
    french: [
      "En tant que membre du réseau mondial de cabinets d'avocats LexDesk360, Sowaidan & Associates fournit des conseils sur le terrain en Égypte tout en assurant une coordination fluide avec les bureaux régionaux et internationaux. Toutes les affaires sont traitées conformément aux normes de LexDesk360 en matière de vérification des conflits d'intérêts, de confidentialité et de reporting. Le cabinet propose des formules d'engagement flexibles, des honoraires mensuels ou des mandats par projet, pris en charge par une équipe multidisciplinaire dédiée."
    ],
    greek: [
      "Ως μέλος του παγκόσμιου δικτύου δικηγορικών γραφείων LexDesk360, η Sowaidan & Associates παρέχει επιτόπια νομική συμβουλή στην Αίγυπτο, συντονιζόμενη άψογα με τα περιφερειακά και διεθνή γραφεία. Όλες οι υποθέσεις ακολουθούν τα πρότυπα του LexDesk360 όσον αφορά τον έλεγχο συγκρούσεων συμφερόντων, την εμπιστευτικότητα και την υποβολή εκθέσεων. Η εταιρεία προσφέρει ευέλικτες μορφές συνεργασίας, μηνιαίες αμοιβές ή εντολές βάσει έργου, οι οποίες εκτελούνται από μια εξειδικευμένη πολυεπιστημονική ομάδα."
    ]
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
    name:"Sowaidan & Associates"
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
  it: {
    home: "Home",
    aboutTitle: "INFORMAZIONI SULLO STUDIO",
    services: "Ruolo all’interno di LexDesk360",
    view: "",
    parac: "AREE DI ATTIVITÀ",
    sector: "COMPETENZE SETTORIALI",
    name:"Sowaidan & Associates"
  },
  greek: {
    home: "Αρχκή",
    aboutTitle: "ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΤΑΙΡΕΙΑ ",
    services: "Ρόλος στο πλαίσιο του LexDesk360",
    view: "",
    parac: "ΤΟΜΕΙΣ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ  ",
    sector: "ΕΞΕΙΔΙΚΕΥΣΗ ΑΝΑ ΤΟΝ ΚΛΑΔΟ ",
    name:"Sowaidan & Associates"
  },
  french: {
    home: "Accueil",
    aboutTitle: "À PROPOS DU CABINET ",
    services: "Rôle au sein de LexDesk360",
    view: "",
    parac: "DOMAINES D'ACTIVITÉ",
    sector: "EXPERTISE SECTORIELLE",
    name:"Sowaidan & Associates"
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
