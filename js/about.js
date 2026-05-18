localStorage.setItem("currentPage", "about");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
if (lang == "ar") {
  body.classList.add("rtl");
}
if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
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
const values = {
  eng: [
    {
      id: 1,
      name: "Integrity & Trust",
      des: "The Bedrock of Every Relationship",
      icon: "jewel",
    },
    {
      id: 2,
      name: "Clarity & Simplicity",
      des: "Cutting Through Complexity",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "Innovation with Purpose",
      des: "Smarter Solutions for Real Challenges",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "Global Mindset, Local Strength",
      des: "Standards with Insight",
      icon: "bi-brightness-high-fill",
    },
  ],
  ar: [
    {
      id: 1,
      name: "النزاهة والثقة",
      des: "أساس كل علاقة ",
      icon: "jewel",
    },
    {
      id: 2,
      name: "الوضوح والبساطة",
      des: "اختصار التعقيد",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "الابتكار الهادف",
      des: "حلول أذكى للتحديات الحقيقية ",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "رؤية عالمية، قوة محلية",
      des: "معايير رفيعة وبصيرة دقيقة ",
      icon: "bi-brightness-high-fill",
    },
  ],
  greek: [
    {
      id: 1,
      name: "Ακεραιότητα & Εμπιστοσύνη",
      des: "Η βάση κάθε σχέσης.",
      icon: "jewel",
    },
    {
      id: 2,
      name: "Σαφήνεια & Απλότητα",
      des: "Απλοποιώντας την πολυπλοκότητα",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "Καινοτομία με σκοπό",
      des: "Εξυπνότερες λύσεις για πραγματικές προκλήσεις",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "Παγκόσμια νοοτροπία, τοπική ισχύς.",
      des: "Παγκόσμια πρότυπα με τοπική διορατικότητα.",
      icon: "bi-brightness-high-fill",
    },
  ],
  french: [
    {
      id: 1,
      name: "Intégrité & confiance",
      des: "Le socle de chaque relation",
      icon: "jewel",
    },
    {
      id: 2,
      name: "Clarté & simplicité",
      des: "Aller à l’essentiel au cœur de la complexité",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "L'innovation au service d’un objectif Des solutions ",
      des: "intelligentes pour relever de vrais défis",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "Esprit global, force locale Des standards",
      des: "internationaux, portés par une compréhension fine du terrain",
      icon: "bi-brightness-high-fill",
    },
  ],
  it: [
    {
      id: 1,
      name: "Integrità & Fiducia",
      des: "Il fondamento di ogni relazione",
      icon: "jewel",
    },
    {
      id: 2,
      name: "Chiarezza & Semplicità",
      des: "Tagliare attraverso la complessità",
      icon: "bi-globe-americas",
    },
    {
      id: 3,
      name: "Innovazione con uno scopo",
      des: "Soluzioni più intelligenti per sfide reali",
      icon: "bi-lightbulb",
    },
    {
      id: 4,
      name: "Mentalità globale, forza locale",
      des: "Standard con conoscenza del contesto",
      icon: "bi-brightness-high-fill",
    },
  ],
};
let activeValue = 0;
let translations;

function renderData() {
  translations = {
    eng: {
      pathpage: "Home",
      titlepage: "About",
      titleAbout: "Seamless International Legal Solutions",
      desAbout1:
        "LexDesk360 is a next-generation legal solutions platform, built for businesses that move fast, cross borders, and need legal and compliance support that matches their pace.",
      desAbout2:
        "With hubs in Dubai, Limassol, and Cairo, and a network spanning the US, EMEA, and South Asia, LexDesk360 combines global standards with local expertise. Our solutions are designed to simplify business, minimize risk, and empower growth. Whether it’s compliance, dispute management, or strategic legal guidance, LexDesk360 is the partner that keeps your business moving without roadblocks.",
      Vision: "Vision",
      tilteVision: "WHERE LAWYERS MEAN BUSINESS.",
      desVesion1:
        "At LexDesk360, we envision a world where legal expertise drives business progress. By fusing integrity with innovation, we are redefining legal services to be not only sound in law but strategic in commerce.",
      desVesion2:
        "We empower top-tier legal minds to deliver agile, cost-effective solutions that help businesses thrive, scale, and lead across borders.",
      desVesion3:
        "This vision reimagines legal counsel as a strategic growth engine, not a cost center. We are committed to transforming compliance into a competitive advantage and complex regulatory landscapes into clear pathways for expansion.",
      desVesion4:
        "Our goal is to ensure that from startups to multinationals, every business has access to legal strategies that not only protect value but actively create it, turning ambition into an achievable reality.",
      Mission: "Mission",
      MissionT: "Business-focused legal solutions; without boundaries.",
      desMission1:
        "To provide elite, cross-border legal services with transparency, flexibility, and business alignment, empowering clients to focus on growth while we take care of legal complexity.",
      desMission2:
        "We achieve this by deeply embedding ourselves in our clients' industries and strategic goals. Our team of top-tier legal professionals delivers tailored, actionable advice that is both timely and commercially focused.",
      desMission3:
        "Through our global hub-network spanning Dubai, Cairo, Limassol, and key international markets, we combine world-class standards with precise local insight. We are raising the bar for legal excellence by transforming potential obstacles into opportunities for sustainable growth and market leadership.",
      Expanding: "Expanding our global presence",
      e1: "Expanding across the GCC, scaling through EMEA, or reaching into South Asia, LexDesk360 is already there. ",
      e2: "Our footprint spans the Middle East, Africa, Europe, the U.S., and beyond. We combine international standards with regional insight, so your business can enter new markets with confidence.",
      e3: "Wherever you grow, you’ll have a trusted partner who understands both the global stage and the local rules.",
      location1: "LexDesk360, Network Firms, or Counsels",
      location2: "Strategic Alliance Partners (TDJ)",
      OurFounder: "Our Founder",
      positionJob: "Founder & CEO, LexDesk360 ",
      desFounder1:
        "Walid Sowaidan is a seasoned cross-border legal leader with nearly 30 years of experience spanning in-house, private practice, and strategic advisory roles across Europe, the Middle East, Africa, and South Asia.",
      desFounder2:
        "He is the Founder and CEO of LexDesk360, a modern legal services platform designed to deliver flexible, cross-jurisdictional legal solutions to businesses and in-house legal teams. He also serves as Managing Partner of Sowaidan, Advocates & Legal Consultants, the first LexDesk360-branded law firm in Cairo, Egypt. Walid has served as General Counsel and Chief Legal Officer at prominent organizations including G42, 3M, Pfizer, Citigroup, and Al-Kharafi, leading International and Regional legal and compliance functions across complex and highly regulated industries such as pharmaceuticals, healthcare, technology, finance, and infrastructure. He has directed regional and global legal teams, structured multi-jurisdictional M&A deals, designed world-class compliance programs, and resolved high-value disputes, including successfully defending multibillion-dollar litigation claims.",
      desFounder3:
        "His track record includes spearheading landmark initiatives, such as securing one of the first 100% foreign ownership trading licenses in Saudi Arabia, and playing key roles in regulatory negotiations, cross-border restructurings, and major public advocacy efforts. Walid is trilingual in Arabic, English, and French and holds a law degree from Ain Shams University, as well as executive legal training from NYU Stern. Operating between Dubai and Cairo, he continues to advise businesses and law firms on legal strategy, regulatory risk, and market entry across the EMEA region and beyond.",
      viewLinkin: "View Linkedin Profile",
      OurVALUES: "Our VALUES",
      desValues: "The LexDesk360 Commitment",
      desValue2:
        "At LexDesk360, our values are the foundation of how we serve, protect, and empower businesses navigating global complexity. They ensure every interaction is built on trust, clarity, and results.",
      valueName: values[lang][activeValue].name,
      valueDes: values[lang][activeValue].des,
    },
    ar: {
      pathpage: " الصفحة الرئيسية ",
      titlepage: "عن ",
      titleAbout: "حلول قانونية دولية متكاملة",
      desAbout1:
        " هي منصة قانونية من الجيل الجديد، صُممت لتخدم الشركات التي تتحرك بسرعة، وتتوسع عبر الحدود، وتحتاج إلى دعم قانوني وامتثال يواكب وتيرتها. ",
      desAbout2:
        "من مراكزنا في دبي، وليماسول، والقاهرة، وشبكتنا الممتدة عبر الولايات المتحدة، وأوروبا، والشرق الأوسط، وإفريقيا، وجنوب آسيا، نمزج بين المعايير العالمية والخبرة المحلية. حلولنا تهدف إلى تبسيط الأعمال، وتقليل المخاطر، وتمكين النمو. سواء كان الأمر يتعلق بالامتثال، أو إدارة النزاعات، أو الاستشارات القانونية الاستراتيجية، فنحن الشريك الذي يحافظ على استمرارية أعمالك بلا عوائق. ",
      Vision: "رؤيتنا ",
      tilteVision: "حيث يلتقي القانون بالأعمال.",
      desVesion1:
        "في LexDesk360، نتصور عالمًا تكون فيه الخبرة القانونية محركًا لتقدم الأعمال. من خلال دمج النزاهة مع الابتكار، نعيد تعريف الخدمات القانونية لتكون سليمة من الناحية القانونية وذات قيمة استراتيجية في الوقت نفسه.",
      desVesion2:
        "نُمكّن العقول القانونية المتميزة من تقديم حلول رشيقة وفعّالة من حيث التكلفة تساعد الشركات على النمو، والتوسع، والقيادة عبر الحدود.",
      desVesion3:
        "هذه الرؤية تعيد تعريف المستشار القانوني كمحرّك للنمو لا كمركز تكلفة. نحن ملتزمون بتحويل الامتثال إلى ميزة تنافسية، وتحويل التعقيدات التنظيمية إلى مسارات واضحة للتوسع. هدفنا أن نتيح لكل شركة، من الناشئة إلى متعددة الجنسيات، الوصول إلى استراتيجيات قانونية لا تحمي القيمة فقط؛ بل تخلقها أيضًا، فتحوّل الطموح إلى واقع يمكن تحقيقه. ",
      desVesion4: "",
      Mission: "رسالتنا",
      MissionT: "حلول قانونية موجهة للأعمال؛ بلا حدود.",
      desMission1:
        "مهمتنا هي تقديم خدمات قانونية عابرة للحدود تتسم بالشفافية، والمرونة، والتوافق مع أهداف عملائنا التجارية، لنمكّنهم من التركيز على النمو بينما نتولى نحن التعقيد القانوني.",
      desMission2:
        "نحقق ذلك عبر الاندماج العميق في صناعات عملائنا وأهدافهم الاستراتيجية. فريقنا من الخبراء القانونيين يقدّم استشارات عملية، مصممة خصيصًا، وقابلة للتنفيذ في الوقت المناسب.",
      desMission3:
        "ومن خلال شبكة محاورنا الممتدة بين دبي، والقاهرة، وليماسول، وأسواق رئيسية أخرى، ندمج بين أفضل الممارسات العالمية والبصيرة المحلية الدقيقة. نحن نرفع معايير التميز القانوني بتحويل التحديات المحتملة إلى فرص للنمو المستدام والريادة.",
      Expanding: "حضورنا العالمي",
      e1: "سواء كنت تتوسع في الخليج، أو تنمو عبر أوروبا والشرق الأوسط وإفريقيا، أو تدخل جنوب آسيا، فإن LexDesk360 موجودة بالفعل. ",
      e2: "انتشارنا يغطي الشرق الأوسط، وإفريقيا، وأوروبا، والولايات المتحدة، وغيرها. نحن نوفر مزيجًا من المعايير الدولية والفهم المحلي، حتى تتمكن شركتك من دخول أسواق جديدة بثقة.",
      e3: "أينما توسعت، سيكون لديك شريك موثوق يفهم المسرح العالمي كما يفهم القواعد المحلية.",
      location1: "LexDesk360, Network Firms, or Counsels",
      location2: "Strategic Alliance Partners (TDJ)",
      OurFounder: "مؤسسنا",
      positionJob: "المؤسس والرئيس التنفيذي: LexDesk360",
      desFounder1:
        "وليد سويدان قائد قانوني مخضرم في القضايا العابرة للحدود، بخبرة تقارب 30 عامًا تشمل العمل الداخلي، والممارسة الخاصة، والأدوار الاستشارية الاستراتيجية عبر أوروبا، والشرق الأوسط، وإفريقيا، وجنوب آسيا. هو مؤسس ورئيس تنفيذي لـ LexDesk360، منصة خدمات قانونية حديثة صُممت لتقديم حلول قانونية مرنة وعابرة للولايات القضائية للشركات والفرق القانونية الداخلية. كما يشغل منصب الشريك المدير في Sowaidan للمحاماة والاستشارات القانونية، أول مكتب يحمل علامة LexDesk360 في القاهرة، مصر. شغل وليد مناصب المستشار العام والمدير القانوني التنفيذي في منظمات بارزة مثل G42، 3M، Pfizer، Citigroup، والخرافي، حيث قاد الوظائف القانونية والإقليمية والدولية في صناعات معقدة ومنظمة بشدة مثل الصناعات الدوائية، والرعاية الصحية، والتكنولوجيا، والتمويل، والبنية التحتية.",
      desFounder2:
        "قاد فرقًا قانونية إقليمية وعالمية، وأدار صفقات اندماج واستحواذ متعددة الولايات، وصمم برامج امتثال عالمية المستوى، وحل نزاعات ذات قيمة عالية، بما في ذلك الدفاع الناجح عن دعاوى قضائية بمليارات الدولارات.",
      desFounder3:
        "من إنجازاته البارزة قيادته لمبادرات تاريخية، مثل الحصول على إحدى أولى رخص الملكية الأجنبية الكاملة للتجارة في السعودية، والمشاركة في مفاوضات تنظيمية، وإعادة هيكلة عابرة للحدود، وجهود كبرى في المناصرة العامة.",
      viewLinkin: "عرض الملف الشخصي على لينكدإن",
      OurVALUES: "قيمنا ",
      desValues: "التزام LexDesk360 ",
      desValue2:
        "قيمنا هي الأساس الذي نرتكز عليه في خدمة الشركات، وحمايتها، وتمكينها من مواجهة التعقيدات العالمية. وهي ما يجعل كل تعامل مبنيًا على الثقة، والوضوح، والنتائج. ",
      valueName: values[lang][activeValue].name,
      valueDes: values[lang][activeValue].des,
    },
    greek: {
      pathpage: "ΑΡΧΙΚΗ",
      titlepage: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
      titleAbout: "ΑΠΑΡΑΜΙΛΕΣ ΔΙΕΘΝΕΙΣ ΝΟΜΙΚΕΣ ΛΥΣΕΙΣ",
      desAbout1:
        "Το LexDesk360 είναι μια πλατφόρμα νέας γενιάς νομικών λύσεων, σχεδιασμένη για επιχειρήσεις που κινούνται γρήγορα, δραστηριοποιούνται διεθνώς και χρειάζονται νομική και κανονιστική υποστήριξη που να ανταποκρίνεται στον ρυθμό τους.",
      desAbout2:
        "Με κέντρα δραστηριότητας στο Ντουμπάι, τη Λεμεσό και το Κάιρο, και με ένα δίκτυο που εκτείνεται σε ΗΠΑ, Ευρώπη, Μέση Ανατολή και Νότια Ασία, το LexDesk360 συνδυάζει παγκόσμια νομικά πρότυπα με εξειδικευμένη τοπική γνώση. Οι λύσεις μας έχουν σχεδιαστεί για να απλοποιούν τις επιχειρηματικές διαδικασίες, να μειώνουν τους κινδύνους και να ενισχύουν την ανάπτυξη.Είτε πρόκειται για συμμόρφωση, διαχείριση διαφορών ή στρατηγική νομική καθοδήγηση, το LexDesk360 είναι ο συνεργάτης που κρατά την επιχείρησή σας σε συνεχή κίνηση — χωρίς εμπόδια.",
      Vision: "ΟΡΑΜΑ",
      tilteVision: "ΕΚΕΙ ΟΠΟΥ ΟΙ ΔΙΚΗΓΟΡΟΙ ΜΙΛΟΥΝ ΕΠΙΧΕΙΡΗΣΕΙΣ.",
      desVesion1:
        "Στο LexDesk360, οραματιζόμαστε έναν κόσμο όπου η νομική εξειδίκευση οδηγεί την επιχειρηματική πρόοδο. Συνδυάζοντας ακεραιότητα με καινοτομία, επαναπροσδιορίζουμε τις νομικές υπηρεσίες ώστε να είναι όχι μόνο ορθές νομικά αλλά και στρατηγικά ευθυγραμμισμένες με το εμπόριο.",
      desVesion2:
        "Ενδυναμώνουμε κορυφαία νομικά στελέχη να παρέχουν ευέλικτες, αποτελεσματικές και οικονομικά αποδοτικές λύσεις που βοηθούν τις επιχειρήσεις να αναπτυχθούν, να κλιμακωθούν και να ηγηθούν πέρα από τα σύνορα.",
      desVesion3:
        "Αυτό το όραμα επανασχεδιάζει τον νομικό σύμβουλο ως κινητήρια δύναμη ανάπτυξης και όχι ως κέντρο κόστους. Δεσμευόμαστε να μετατρέπουμε τη συμμόρφωση σε ανταγωνιστικό πλεονέκτημα και τα πολύπλοκα ρυθμιστικά περιβάλλοντα σε ξεκάθαρους δρόμους επέκτασης.",
      desVesion4:
        "Στόχος μας είναι να διασφαλίσουμε ότι από τις startups έως τις πολυεθνικές, κάθε επιχείρηση έχει πρόσβαση σε νομικές στρατηγικές που όχι μόνο προστατεύουν την αξία αλλά και τη δημιουργούν — μετατρέποντας τη φιλοδοξία σε μια επιτεύξιμη πραγματικότητα.",
      Mission: "ΑΠΟΣΤΟΛΗ",
      MissionT: "ΕΠΙΧΕΙΡΗΜΑΤΟΚΕΝΤΡΙΚΕΣ ΝΟΜΙΚΕΣ ΛΥΣΕΙΣ, ΧΩΡΙΣ ΣΥΝΟΡΑ.",
      desMission1:
        "Παρέχουμε υψηλού επιπέδου, διασυνοριακές νομικές υπηρεσίες με διαφάνεια, ευελιξία και επιχειρηματική ευθυγράμμιση, επιτρέποντας στους πελάτες μας να επικεντρώνονται στην ανάπτυξη ενώ εμείς αναλαμβάνουμε την πολυπλοκότητα της νομικής τους πραγματικότητας.",
      desMission2:
        "Το επιτυγχάνουμε ενσωματώνοντας βαθιά τις ομάδες μας στις βιομηχανίες και τους στρατηγικούς στόχους των πελατών μας. Η ομάδα μας από κορυφαίους νομικούς επαγγελματίες προσφέρει στοχευμένες και άμεσα εφαρμόσιμες συμβουλές, επίκαιρες και εμπορικά προσανατολισμένες.",
      desMission3:
        "Μέσω του διεθνούς δικτύου “hubs” σε Ντουμπάι, Κάιρο, Λεμεσό και σε βασικές διεθνείς αγορές, συνδυάζουμε παγκόσμιας κλάσης πρότυπα με ακριβή τοπική γνώση. Θέτουμε νέα πρότυπα στη νομική αριστεία, μετατρέποντας πιθανά εμπόδια σε ευκαιρίες για βιώσιμη ανάπτυξη και ηγετική θέση στην αγορά.",
      Expanding: "ΕΠΕΚΤΕΙΝΟΝΤΑΣ ΤΗΝ ΠΑΓΚΟΣΜΙΑ ΠΑΡΟΥΣΙΑ ΜΑΣ",
      e1: "Καθώς επεκτείνεστε στον Κόλπο, αναπτύσσεστε στην περιοχή EMEA ή εισέρχεστε στη Νότια Ασία, το LexDesk360 είναι ήδη εκεί.",
      e2: "Το αποτύπωμά μας εκτείνεται στη Μέση Ανατολή, την Αφρική, την Ευρώπη, τις ΗΠΑ και ακόμη πιο πέρα. Συνδυάζουμε διεθνή πρότυπα με βαθιά τοπική γνώση, ώστε η επιχείρησή σας να εισέρχεται σε νέες αγορές με αυτοπεποίθηση.",
      e3: "Όπου κι αν αναπτυχθείτε, θα έχετε έναν αξιόπιστο συνεργάτη που κατανοεί τόσο το παγκόσμιο περιβάλλον όσο και τους τοπικούς κανόνες.",
      location1: "LexDesk360, Network Firms, or Counsels",
      location2: "Strategic Alliance Partners (TDJ)",

      OurFounder: "Ο ΙΔΡΥΤΗΣ ΜΑΣ",
      positionJob: "Founder & CEO, LexDesk360",
      desFounder1:
        "Ο Walid Sowaidan είναι ένας καταξιωμένος, διεθνής νομικός ηγέτης με σχεδόν 30 χρόνια εμπειρίας σε in-house θέσεις, ιδιωτική δικηγορία και στρατηγικούς συμβουλευτικούς ρόλους σε Ευρώπη, Μέση Ανατολή, Αφρική και Νότια Ασία.",
      desFounder2:
        "Είναι ο Ιδρυτής και CEO της LexDesk360, μιας σύγχρονης πλατφόρμας νομικών υπηρεσιών σχεδιασμένης να προσφέρει ευέλικτες, διασυνοριακές λύσεις σε επιχειρήσεις και σε in-house νομικές ομάδες. Παράλληλα, είναι Managing Partner της Sowaidan, Advocates & Legal Consultants, της πρώτης δικηγορικής εταιρείας με brand LexDesk360 στο Κάιρο της Αιγύπτου. Ο Walid έχει διατελέσει General Counsel και Chief Legal Officer σε κορυφαίους οργανισμούς όπως οι G42, 3M, Pfizer, Citigroup και Al-Kharafi, ηγούμενος διεθνών και περιφερειακών νομικών και κανονιστικών λειτουργιών σε σύνθετα και ιδιαίτερα ρυθμιζόμενα πεδία όπως φαρμακευτικά, υγεία, τεχνολογία, χρηματοοικονομικές υπηρεσίες και υποδομές.",
      desFounder3:
        "Έχει διευθύνει περιφερειακές και παγκόσμιες νομικές ομάδες, έχει δομήσει πολυδικαιοδοτικές συμφωνίες M&A, σχεδιάσει προγράμματα συμμόρφωσης παγκόσμιας κλάσης και έχει επιλύσει υποθέσεις υψηλής αξίας — συμπεριλαμβανομένης της επιτυχούς υπεράσπισης αξιώσεων δισεκατομμυρίων δολαρίων. Το έργο του περιλαμβάνει πρωτοποριακές πρωτοβουλίες, όπως την εξασφάλιση μίας από τις πρώτες άδειες 100% ξένης ιδιοκτησίας για trading στη Σαουδική Αραβία, καθώς και κομβικούς ρόλους σε ρυθμιστικές διαπραγματεύσεις, διασυνοριακές αναδιαρθρώσεις και σημαντικές δημόσιες παρεμβάσεις. Ο Walid μιλά άπταιστα Αραβικά, Αγγλικά και Γαλλικά και είναι κάτοχος πτυχίου νομικής από το Πανεπιστήμιο Ain Shams, καθώς και executive legal training από το NYU Stern. Δραστηριοποιούμενος μεταξύ Ντουμπάι και Καΐρου, συνεχίζει να συμβουλεύει επιχειρήσεις και δικηγορικές ομάδες σε νομική στρατηγική, κανονιστικό κίνδυνο και είσοδο στην αγορά σε ολόκληρη την περιοχή EMEA και πέρα.",
      viewLinkin: "Δες το προφίλ του",

      OurVALUES: "ΟΙ ΑΞΙΕΣ ΜΑΣ",
      desValues: "The LexDesk360 Commitment",
      desValue2:
        "Στο LexDesk360, οι αξίες μας αποτελούν το θεμέλιο του τρόπου με τον οποίο εξυπηρετούμε, προστατεύουμε και ενδυναμώνουμε τις επιχειρήσεις που navig-άρουν την παγκόσμια πολυπλοκότητα. Εξασφαλίζουν ότι κάθε συνεργασία βασίζεται στην εμπιστοσύνη, τη διαφάνεια και το αποτέλεσμα.",
      valueName: values[lang][activeValue].name,
      valueDes: values[lang][activeValue].des,
    },
    french: {
      pathpage: "Accueil",
      titlepage: "À propos",
      titleAbout: "SOLUTIONS JURIDIQUES INTERNATIONALES INTÉGRÉES",
      desAbout1:
        "LexDesk360 est une plateforme de solutions juridiques de nouvelle génération, conçue pour les entreprises à forte croissance, actives à l’international et qui ont besoin d’un accompagnement juridique et conformité en conformite leur rythme.",
      desAbout2:
        "Avec des hubs à Dubaï, Limassol et Le Caire, et un réseau couvrant les États-Unis, la région EMEA et l’Asie du Sud, LexDesk360 combine des standards juridiques internationaux avec une expertise locale pointue. Nos solutions sont conçues pour simplifier le business, minimiser les risques et soutenir la croissance. Qu’il s’agisse de conformité, de gestion des litiges ou de conseiller  juridique stratégique, LexDesk360 est le partenaire qui fait avancer votre entreprise sans obstacles.",
      Vision: "Vision",
      tilteVision: "LÀ OÙ LES AVOCATS PARLENT BUSINESS.",
      desVesion1:
        "Chez LexDesk360, nous imaginons un monde où l’expertise juridique porte le progrès des entreprises. En alliant intégrité et innovation, nous redéfinissons les services juridiques pour qu’ils soient non seulement irréprochables en droit, mais aussi stratégiques sur le plan commercial.",
      desVesion2:
        "Nous donnons aux meilleurs talents juridiques les moyens de proposer des solutions agiles et rentables, qui aident les entreprises à prospérer, à se développer et à s’imposer au-delà des frontières.",
      desVesion3:
        "Cette vision repense le rôle du conseil juridique comme un moteur stratégique de croissance, plutôt qu’un centre de coût. Nous nous engageons à transformer la conformité en avantage concurrentiel et les environnements réglementaires complexes en parcours clairs d’expansion.",
      desVesion4:
        "Notre objectif est de faire en sorte que, des startups aux multinationales, chaque entreprise ait accès à des stratégies juridiques qui non seulement protègent la valeur, mais en créent activement, transformant l’ambition en réalité concrète.",
      Mission: "Mission",
      MissionT:
        "DES SOLUTIONS JURIDIQUES AXÉES SUR LE BUSINESS, SANS FRONTIÈRES.",
      desMission1:
        "Offrir des services juridiques transfrontaliers de tout premier plan, avec transparence, flexibilité et alignement sur les enjeux business, afin de permettre à nos clients de se concentrer sur leur croissance pendant que nous prenons en charge la complexité juridique.",
      desMission2:
        "Nous y parvenons en nous immergeant au cœur des secteurs d’activité et des objectifs stratégiques de nos clients. Notre équipe de professionnels du droit de haut niveau délivre des conseils sur mesure, concrets et opérationnels, à la fois réactifs et orientés vers les résultats commerciaux.",
      desMission3:
        "Grâce à notre réseau de hubs mondiaux – de Dubaï, du Caire et de Limassol jusqu’aux principaux marchés internationaux – nous allions des standards de classe mondiale à une connaissance locale précise. Nous élevons les standards d’excellence juridique en transformant les obstacles potentiels en opportunités de croissance durable et de leadership sur le marché.",
      Expanding: "DÉVELOPPER NOTRE PRÉSENCE MONDIALE",
      e1: "Que vous vous développiez dans le Golfe (GCC), que vous montiez en puissance à l’échelle de la région EMEA ou que vous étendiez votre présence en Asie du Sud, LexDesk360 est déjà sur place.",
      e2: "Notre empreinte couvre le Moyen-Orient, l’Afrique, l’Europe, les États-Unis et au-delà. Nous combinons des standards internationaux avec une compréhension fine des réalités régionales pour que votre entreprise puisse entrer sur de nouveaux marchés en toute confiance.",
      e3: "Où que vous choisissiez de croître, vous aurez à vos côtés un partenaire de confiance qui maîtrise à la fois la scène internationale et les règles locales.",
      location1:
        "LexDesk360, cabinets membres du réseau ou conseillers juridiques",
      location2: "Partenaires d’alliance stratégique (TDJ)",
      OurFounder: "NOTRE FONDATEUR",
      positionJob: "Fondateur & CEO, LexDesk360",
      desFounder1:
        "Walid Sowaidan est un leader chevronné du droit transfrontalier, avec près de 30 ans d’expérience couvrant des fonctions en entreprise, en cabinet privé et en conseil stratégique à travers l’Europe, le Moyen-Orient, l’Afrique et l’Asie du Sud.",
      desFounder2:
        "Il est le Fondateur et CEO de LexDesk360, une plateforme moderne de services juridiques conçue pour offrir aux entreprises et aux directions juridiques internes des solutions flexibles, couvrant plusieurs juridictions. Il est également Managing Partner de Sowaidan, Advocates & Legal Consultants, le premier cabinet d’avocats sous la marque LexDesk360 au Caire, en Égypte. Walid a occupé les postes de General Counsel et de Chief Legal Officer au sein d’organisations de premier plan telles que G42, 3M, Pfizer, Citigroup et Al-Kharafi, où il a dirigé des fonctions juridiques et compliance internationales et régionales dans des secteurs complexes et fortement réglementés tels que la pharmacie, la santé, la technologie, la finance et les infrastructures. Il a piloté des équipes juridiques régionales et mondiales, structuré des opérations de M&A multi-juridictionnelles, conçu des programmes de compliance de classe mondiale et géré des contentieux de très grande valeur, incluant la défense réussie de litiges portant sur plusieurs milliards de dollars.",
      desFounder3:
        "Son parcours inclut la direction d’initiatives majeures, comme l’obtention de l’une des premières licences commerciales à 100 % de propriété étrangère en Arabie Saoudite, ainsi que des rôles clés dans des négociations réglementaires, des restructurations transfrontalières et de grandes actions de plaidoyer public. Walid est trilingue en arabe, anglais et français et est titulaire d’un diplôme de droit de l’Université Ain Shams, ainsi que d’une formation juridique exécutive à la NYU Stern. Partageant son temps entre Dubaï et Le Caire, il continue de conseiller entreprises et cabinets d’avocats sur la stratégie juridique, le risque réglementaire et l’entrée sur de nouveaux marchés dans la région EMEA et au-delà.",
      viewLinkin: "VOIR LE PROFIL LINKEDIN",
      OurVALUES: "NOS VALEURS",
      desValues: "",
      desValue2:
        "Chez LexDesk360, nos valeurs sont le socle de la manière dont nous servons, protégeons et accompagnons les entreprises qui naviguent dans la complexité mondiale. Elles garantissent que chaque interaction repose sur la confiance, la clarté et les résultats.",
      valueName: values[lang][activeValue].name,
      valueDes: values[lang][activeValue].des,
    },
    it: {
      pathpage: "Home",
      titlepage: "CHI SIAMO",
      titleAbout: "SOLUZIONI LEGALI INTERNAZIONALI SENZA SOLUZIONE DI CONTINUITÀ",
      desAbout1:
        "LexDesk360 è una piattaforma di soluzioni legali di nuova generazione, progettata per aziende che si muovono rapidamente, operano oltre confine e necessitano di supporto legale e di compliance in linea con il loro ritmo.",
      desAbout2:
        "Con hub a Dubai, Limassol e Il Cairo e una rete che si estende negli Stati Uniti, EMEA e Asia meridionale, LexDesk360 combina standard globali con competenze locali. Le nostre soluzioni semplificano il business, riducono i rischi e favoriscono la crescita. Che si tratti di compliance, gestione delle controversie o consulenza legale strategica, LexDesk360 è il partner che mantiene la tua azienda in movimento, senza ostacoli.",
      Vision: "VISIONE",
      tilteVision: "DOVE GLI AVVOCATI PARLANO IL LINGUAGGIO DEL BUSINESS",
      desVesion1:
        "In LexDesk360 immaginiamo un mondo in cui l’expertise legale guida il progresso aziendale. Unendo integrità e innovazione, stiamo ridefinendo i servizi legali affinché siano non solo giuridicamente solidi, ma anche strategici dal punto di vista commerciale",
      desVesion2:
        "Mettiamo i migliori professionisti legali nelle condizioni di offrire soluzioni agili ed efficienti in termini di costi, aiutando le aziende a crescere, scalare e guidare oltre confine.",
      desVesion3:
        "Questa visione ripensa la consulenza legale come un motore strategico di crescita, non come un centro di costo. Ci impegniamo a trasformare la compliance in un vantaggio competitivo e i contesti normativi complessi in percorsi chiari di espansione.",
      desVesion4:
        "Il nostro obiettivo è garantire che, dalle startup alle multinazionali, ogni azienda abbia accesso a strategie legali che non solo proteggono il valore, ma lo creano attivamente, trasformando l’ambizione in una realtà raggiungibile",
      Mission: "MISSIONE",
      MissionT: "SOLUZIONI LEGALI ORIENTATE VERSO IL BUSINESS, SENZA CONFINI.",
      desMission1:
        "Fornire servizi legali d’élite e transfrontalieri con trasparenza, flessibilità e pieno allineamento agli obiettivi aziendali, consentendo ai clienti di concentrarsi sulla crescita mentre noi gestiamo la complessità legale.",
      desMission2:
        "Raggiungiamo questo obiettivo integrandoci profondamente nei settori e nelle strategie dei nostri clienti. Il nostro team di professionisti legali di alto livello offre consulenza su misura, concreta, tempestiva e orientata al business.",
      desMission3:
        "Attraverso la nostra rete globale di hub a Dubai, Il Cairo, Limassol e nei principali mercati internazionali, uniamo standard di livello mondiale a una conoscenza locale precisa. Stiamo alzando l’asticella dell’eccellenza legale, trasformando potenziali ostacoli in opportunità di crescita sostenibile e leadership di mercato.",
      Expanding: "ESPANSIONE DELLA NOSTRA PRESENZA GLOBALE",
      e1: "Che si tratti di espandersi nel GCC, scalare nell’EMEA o entrare nell’Asia meridionale, LexDesk360 è già presente.",
      e2: "La nostra presenza si estende in Medio Oriente, Africa, Europa, Stati Uniti e oltre. Uniamo standard internazionali e competenze regionali, permettendo alla tua azienda di entrare in nuovi mercati con sicurezza.",
      e3: "Ovunque tu cresca, avrai un partner di fiducia che comprende sia il contesto globale sia le regole locali.",
      location1: "LexDesk360, Studi del Network o Counsel",
      location2: "Partner di Alleanza Strategica (TDJ)",
      OurFounder: "IL NOSTRO FONDATORE",
      positionJob: "Fondatore & CEO, LexDesk360",
      desFounder1:
      "Walid Sowaidan è un esperto leader legale transfrontaliero con quasi 30 anni di esperienza, maturata in ruoli in-house, nella libera professione e in incarichi di consulenza strategica in Europa, Medio Oriente, Africa e Asia meridionale.",
      desFounder2:
      "È il Fondatore e CEO di LexDesk360, una moderna piattaforma di servizi legali progettata per offrire soluzioni legali flessibili e multi-giurisdizionali ad aziende e team legali interni. Ricopre inoltre il ruolo di Managing Partner di Sowaidan, Advocates & Legal Consultants, il primo studio legale a marchio LexDesk360 al Cairo, in Egitto. Walid ha ricoperto incarichi come General Counsel e Chief Legal Officer presso organizzazioni di primo piano, tra cui G42, 3M, Pfizer, Citigroup e Al-Kharafi, guidando funzioni legali e di compliance internazionali e regionali in settori complessi e altamente regolamentati quali farmaceutico, sanitario, tecnologico, finanziario e infrastrutturale. Ha diretto team legali regionali e globali, strutturato operazioni di M&A multi-giurisdizionali, progettato programmi di compliance di livello mondiale e risolto controversie di elevato valore, inclusa la difesa con successo di pretese risarcitorie in contenziosi da diversi miliardi di dollari.",
      desFounder3:
      "Il suo percorso include la guida di iniziative di rilievo, come l’ottenimento di una delle prime licenze commerciali in Arabia Saudita con proprietà estera al 100%, e ruoli chiave in negoziazioni regolamentari, ristrutturazioni transfrontaliere e importanti attività di advocacy pubblica. Walid è trilingue in arabo, inglese e francese e possiede una laurea in giurisprudenza dell’Università Ain Shams, oltre a formazione legale executive presso NYU Stern. Operando tra Dubai e Il Cairo, continua a supportare aziende e studi legali su strategia legale, rischio normativo e ingresso nei mercati in tutta la regione EMEA e oltre.",
      viewLinkin: "VISUALIZZA PROFILO LINKEDIN",
      OurVALUES: "I NOSTRI VALORI",
      desValues: "",
      desValue2:
        "In LexDesk360, i nostri valori sono il fondamento di come serviamo, proteggiamo e rafforziamo le aziende che navigano la complessità globale. Garantiscono che ogni interazione sia costruita su fiducia, chiarezza e risultati.",
      valueName: values[lang][activeValue].name,
      valueDes: values[lang][activeValue].des,
    },
  };
  let classname = values[lang][activeValue].icon;
  let el = document.getElementById("iconValue");
  el.className = "";
  el.classList.add(`${classname}`);
  el.classList.add("bi");

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[lang][key] || el.innerText;
  });
}
renderData();

function nextValue() {
  if (activeValue != 3) {
    activeValue += 1;
  } else if (activeValue == 3) {
    activeValue = 0;
  }
  renderData();
}

function prevValue() {
  if (activeValue != 0) {
    activeValue -= 1;
  } else if (activeValue == 0) {
    activeValue = 3;
  }
  renderData();
}

function openFounderLinkedin() {
  window.open("https://www.linkedin.com/in/walid-sowaidan-9818364/", "_blank");
}
localStorage.setItem("currentPageNew", 1);
