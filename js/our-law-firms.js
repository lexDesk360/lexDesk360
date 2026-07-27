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
if (lang == "greek") {
  body.classList.add("greek");

}
if (lang == "it") {
  body.classList.add("it");

}
if (lang == "french") {
  body.classList.add("french");
}
let networkMidwest = [
  {
    id: 1,
    image: "./assets/images/our-network/network1.png",
    image2: "./assets/images/our-network/n1-1.jpg",
    image3: "./assets/images/our-network/n1-2.jpg",
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
        "Sowaidan & Associates is a full-service Egyptian law firm founded in 2025 by Walid Sowaidan. The firm delivers business-critical counsel across corporate, commercial, and regulatory matters, complex disputes, and high-stakes investigations. Known for partner-led service and clear, actionable advice, the team helps clients anticipate risk, resolve disputes efficiently, and achieve strategic objectives",
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
        "As part of the LexDesk360 Global Network of Law Firms, Sowaidan & Associates provides on-the-ground counsel in Egypt while coordinating seamlessly with regional and international offices. All matters follow LexDesk360 standards for conflict checks, confidentiality, and reporting. The firm offers flexible engagement formats, monthly retainers, or project-based mandates, delivered by a dedicated multidisciplinary team.",
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
  },
  {
    id: 5,
    image: "./assets/images/our-network/network6.png",
    image2: "./assets/images/our-network/n4-1.png",
    image3: "./assets/images/our-network/n4-2.png",
    url: "./midwesttradelaw",
    counrty: {
      eng: "United States Of America",
      ar: "الولايات المتحددة الأمريكية",
      greek: "Ηνωμένες Πολιτείες Αμερικής",
      it: "Stati Uniti d'America",
      french: "Les états-unis d'Amérique"
    },
    name: {
      eng: "LexDesk360 - Midwest Trade Law",
      ar: "LexDesk360 - Midwest Trade Law",
      french: "LexDesk360 - Midwest Trade Law",
      it: "LexDesk360 - Midwest Trade Law",
      greek: "LexDesk360 - Midwest Trade Law",

    },
    titlePage: {
      eng: "  Our Law Firms ",
      ar: "شركاؤنا من مكاتب المحاماة",
      it: "I nostri studi legali",
      french: "NOS CABINETS D'AVOCATS",
      greek: "Our Law Firms"
    },
    about: {
      eng: "Midwest Trade Law is a boutique legal practice dedicated to advising clients on compliance with international trade laws and regulations, including economic sanctions and embargoes, export controls, antiboycott matters, as well as customs, free trade agreements, and other trade-related issues.",
      ar: "Midwest Trade Law هي مؤسسة قانونية متخصصة مخصصة لتقديم المشورة للعملاء بشأن الامتثال لقوانين وأنظمة التجارة الدولية، بما في ذلك العقوبات الاقتصادية والحظر، وضوابط التصدير، ومسائل مكافحة المقاطعة، بالإضافة إلى الجمارك، واتفاقيات التجارة الحرة، وغيرها من القضايا المتعلقة بالتجارة.",
      greek: "Η Midwest Trade Law είναι μια εξειδικευμένη αμερικανική δικηγορική εταιρεία που ιδρύθηκε το 2020 από τον Valentin Povarchuk, δικηγόρο ειδικευμένο στο διεθνές εμπόριο με πάνω από δύο δεκαετίες εμπειρίας στον τομέα της συμμόρφωσης με τους κανόνες του παγκόσμιου εμπορίου.  Η εταιρεία ειδικεύεται σε θέματα κανονισμών εισαγωγών και εξαγωγών, οικονομικών κυρώσεων, εμπάργκο και διαχείρισης κινδύνων συμμόρφωσης στο εμπόριο. Είναι αναγνωρισμένη για τον συνδυασμό βαθιάς γνώσης των κανονισμών με πρακτική διορατικότητα, βοηθώντας πολυεθνικές εταιρείες να ενσωματώσουν τη νομική συμμόρφωση στις καθημερινές επιχειρηματικές τους δραστηριότητες. Η Midwest Trade Law παρέχει στους πελάτες της άμεση πρόσβαση σε εξειδικευμένη γνώση υψηλού επιπέδου, όπως αυτή που συνήθως προσφέρουν μεγάλα δικηγορικά γραφεία — σε πιο προσιτές τιμές. ",
      it:"Midwest Trade Law è uno studio legale boutique statunitense fondato nel 2020 da Valentin Povarchuk, avvocato specializzato in commercio internazionale con oltre vent’anni di esperienza nel settore della conformità commerciale globale. Lo studio è specializzato in normative di importazione ed esportazione, sanzioni economiche, embarghi e gestione dei rischi di conformità commerciale. È rinomato per la sua capacità di combinare una profonda conoscenza normativa con una visione pratica, aiutando le multinazionali a integrare la conformità legale nelle operazioni commerciali quotidiane. Midwest Trade Law offre ai clienti l’accesso diretto a competenze di alto livello, tipicamente presenti nei grandi studi legali, a tariffe più accessibili. "
    },
    practice: {
      eng: {
        des: "The firm provides comprehensive legal services, including:",
        content: [{
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
        content: [{
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
      greek: {
        des: "Η δικηγορική εταιρεία παρέχει ολοκληρωμένες νομικές υπηρεσίες, συμπεριλαμβανομένων:",
        content: [
          {
            name: "Συμμόρφωση και Ρύθμιση του Εμπορίου:",
            des: "Νομικές γνωμοδοτήσεις σχετικά με πολύπλοκους εμπορικούς νόμους, ελέγχους εξαγωγών, κυρώσεις και εμπάργκο. Συμβουλές σχετικά με τη δέουσα επιμέλεια «γνώρισε τον πελάτη σου» (KYC) και συναλλαγές υψηλού κινδύνου."
          },
          {
            name: "Έρευνες και Γνωστοποιήσεις:",
            des: "Διεξαγωγή εσωτερικών ερευνών υπό το πρίσμα του απορρήτου δικηγόρου-πελάτη. Προετοιμασία και υποβολή εθελοντικών και εκ των προτέρων γνωστοποιήσεων σε αμερικανικές αρχές. Εκπροσώπηση κατά τη διάρκεια ελέγχων, κλήσεων και μέτρων επιβολής."
          },
          {
            name: "Κυρώσεις & Θέματα Περιορισμένων Μερών:",
            des: "Καθοδήγηση σχετικά με καθεστώτα κυρώσεων και λίστες περιορισμένων μερών. Υποβολή αιτήσεων διαγραφής από καταλόγους και συνεργασία με ρυθμιστικές αρχές."
          },
          {
            name: "Εταιρικές Συναλλαγές & Δέουσα Επιμέλεια:",
            des: "Δέουσα επιμέλεια εμπορικής συμμόρφωσης για συγχωνεύσεις, εξαγορές και επενδύσεις. Σύνταξη εγγυήσεων και δηλώσεων συμμόρφωσης σε εταιρικές συναλλαγές."
          },
          {
            name: "Πολιτικές, Συμβάσεις και Τεκμηρίωση:",
            des: "Ανάπτυξη πολιτικών, προτύπων και εγχειριδίων συμμόρφωσης σύμφωνα με αμερικανικούς και διεθνείς κανονισμούς. Σύνταξη και διαπραγμάτευση συμβατικών ρητρών και πιστοποιήσεων που μετριάζουν τον νομικό κίνδυνο."
          },
          {
            name: "Υπεράσπιση ενώπιον της κυβέρνησης:",
            des: "Εκπροσώπηση πελατών ενώπιον αμερικανικών κυβερνητικών οργανισμών σε διαδικασίες αδειοδότησης, ταξινόμησης και θέσπισης κανόνων. Εξασφάλιση ευνοϊκών αποφάσεων και ρυθμιστικών αποτελεσμάτων."
          },
          {
            name: "Εκπαίδευση & Κατάρτιση:",
            des: "Διοργάνωση εργαστηρίων και ενημερωτικών συναντήσεων για στελέχη σχετικά με νέες εμπορικές νομοθεσίες και τάσεις επιβολής."
          }
        ]
      },
      it: {
        des: "The firm provides comprehensive legal services, including:",
        content: [{
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
    },
    sector: {
      eng: {
        des: "The team’s experience covers a broad range of industries, including:",
        content: [{
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
        content: [{
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
      greek: {
        des: "Η ομάδα εξυπηρετεί πελάτες σε ένα ευρύ φάσμα κλάδων, συμπεριλαμβανομένων:",
        content: [{
            des: "Βιομηχανία και τεχνολογία"
          },
          {
            des: "Φαρμακευτικά προϊόντα και ιατρικές συσκευές"
          },
          {
            des: "Ενέργεια, πετρέλαιο και φυσικό αέριο, καθώς και προηγμένα υλικά"
          },
          {
            des: "Αεροδιαστημική, αεροπορία και logistics"
          },
          {
            des: "Χρηματοπιστωτικά ιδρύματα και εταιρείες επενδύσεων"
          },
          {
            des: "Αναδυόμενοι κλάδοι, όπως το ψηφιακό εμπόριο και οι τεχνολογίες διπλής χρήσης"
          }
        ]
      }
    },
    within: {
      eng: [
        "Midwest Trade Law operates under the umbrella of LexDesk360, a global legal platform uniting international law firms and legal experts across multiple jurisdictions.",
        "As LexDesk360’s U.S.-based sister firm, Midwest Trade Law complements the group’s international presence by providing specialized counsel on trade compliance, sanctions, and cross-border regulatory matters. Through this",
        "alignment, clients gain access to LexDesk360’s broad resources, technology-driven systems, and coordinated service framework — while benefiting from Midwest Trade Law’s deep U.S. regulatory insight and hands-on experience.",
        "This partnership ensures that multinational clients receive seamless, end-to-end legal support across all stages of their operations — from corporate governance and compliance to global trade and market entry.",
        "While Midwest Trade Law maintains its independent practice, it shares LexDesk360’s commitment to quality, integrity, and innovation, working collaboratively to deliver consistent, cross-border legal solutions under a unified global standard."
      ],
      ar: [
        "تعمل Midwest Trade Law بصفتها الشركة الشقيقة في الولايات المتحدة ضمن منظومة LexDesk360 العالمية التي تضم شبكات من مكاتب المحاماة والخبراء القانونيين عبر عدة ولايات قضائية.",
        "وتوفر الشركة خبرة متقدمة في الامتثال التجاري والعقوبات والقواعد التنظيمية العابرة للحدود مع تنسيق كامل بين الفرق الإقليمية والدولية التابعة لـ LexDesk360.",
        "تدار جميع الملفات وفق معايير LexDesk360 الخاصة بفحص تضارب المصالح، والسرية، وجودة التقارير.",
        "كما يقدم المكتب نماذج تعاون مرنة تشمل أتعابًا شهرية أو مشروعات محددة ينفذها فريق متعدد التخصصات.",
        "وتتيح هذه الشراكة للعملاء خدمات قانونية متكاملة وسلسة عبر جميع مراحل عملهم، من الحوكمة والامتثال إلى التجارة العالمية وتوسّع الأسواق، ضمن إطار موحد يضمن الجودة والاتساق على مستوى عالمي."
      ],
      greek: [
        "Η Midwest Trade Law λειτουργεί υπό την αιγίδα της LexDesk360, μιας παγκόσμιας νομικής πλατφόρμας που ενώνει διεθνή δικηγορικά γραφεία και νομικούς εμπειρογνώμονες σε πολλαπλές δικαιοδοσίες.",
        "Ως αδελφή εταιρεία της LexDesk360 με έδρα τις ΗΠΑ, η Midwest Trade Law συμπληρώνει τη διεθνή παρουσία του ομίλου παρέχοντας εξειδικευμένες συμβουλές σε θέματα εμπορικής συμμόρφωσης, κυρώσεων και διασυνοριακών ρυθμιστικών θεμάτων.",
        "Μέσω αυτής της συνεργασίας, οι πελάτες αποκτούν πρόσβαση στους ευρείς πόρους, τα τεχνολογικά συστήματα και το συντονισμένο πλαίσιο υπηρεσιών της LexDesk360, ενώ παράλληλα επωφελούνται από τη βαθιά γνώση της Midwest Trade Law στη ρυθμιστική νομοθεσία των ΗΠΑ.",
        "Αυτή η συνεργασία διασφαλίζει ότι οι πολυεθνικοί πελάτες λαμβάνουν απρόσκοπτη, ολοκληρωμένη νομική υποστήριξη σε όλα τα στάδια των δραστηριοτήτων τους, από την εταιρική διακυβέρνηση και τη συμμόρφωση έως το παγκόσμιο εμπόριο και την είσοδο στην αγορά.",
        "Ενώ η Midwest Trade Law διατηρεί την ανεξάρτητη πρακτική της, μοιράζεται τη δέσμευση της LexDesk360 για ποιότητα, ακεραιότητα και καινοτομία, συνεργαζόμενη για την παροχή συνεπών, διασυνοριακών νομικών λύσεων σύμφωνα με ένα ενοποιημένο παγκόσμιο πρότυπο.",
        "ΣΧΕΤΙΚΑ ΜΕ ΤΟΝ ΙΔΡΥΤΗ: Ο Valentin Povarchuk είναι δικηγόρος διεθνούς εμπορίου και ιδρυτής της Midwest Trade Law. Εκπαίδευση στο Πανεπιστήμιο Cornell (B.A. summa cum laude) και στη Νομική Σχολή του Πανεπιστημίου της Ουάσιγκτον (J.D.).",
        "Επαγγελματική εμπειρία σε κορυφαία δικηγορικά γραφεία της Ουάσιγκτον και ως εσωτερικός νομικός σύμβουλος σε πολυεθνικές εταιρείες στους τομείς της μεταποίησης, τεχνολογίας και ιατρικής.",
        "Άδειες άσκησης δικηγορίας στη Μινεσότα, στην Ουάσιγκτον D.C. και ενώπιον του Διεθνούς Εμπορικού Δικαστηρίου των Η.Π.Α.",
        "Μητρική γλώσσα η ρωσική και άριστη γνώση της γαλλικής. Επαγγελματικές συνεργασίες και συμμετοχή σε διοικητικά συμβούλια και επιτροπές διεθνούς εμπορίου.",
        "Συμμετοχή σε συνέδρια όπως το WorldECR Forum και δημοσιεύσεις σχετικά με εμπορική συμμόρφωση και κυρώσεις σε συνεργασία με διεθνείς εκδόσεις.",
        "Η Midwest Trade Law λειτουργεί υπό την αιγίδα της LexDesk360, παρέχοντας εξειδικευμένες υπηρεσίες συμμόρφωσης και διασυνοριακής ρύθμισης, συνδυάζοντας διεθνή πρόσβαση με βαθιά αμερικανική νομική εμπειρία."
      ]
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
    titlePage: "شركاؤنا من مكاتب المحاماة",
    moreToCome: "“والمزيد قادم…”",
    cominfSoon: "“قريبًا...”",
    viewMore: "عرض المزيد",
    become: "انضم إلى شبكتنا كشركة",
  },
  it: {
    pathPage: "Home ",
    titlePage: "I nostri studi partner",
    moreToCome: "",
    cominfSoon: "",
    viewMore: "Visualizza altro",
    become: "",
  },
  greek: {
    pathPage: "Αρχκή ",
    titlePage: "Our Law Firms",
    moreToCome: "",
    cominfSoon: "",
    viewMore: "Δείτε περισσότερα",
    become: "",
  },
  french: {
    pathPage: "Accueil ",
    titlePage: "NOS CABINETS D'AVOCATS",
    moreToCome: "",
    cominfSoon: "",
    viewMore: "Voir plus",
    become: "",
  }
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
  window.location.href = "./join-us.html";
}