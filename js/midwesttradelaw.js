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
if (lang == "greek") {
  body.classList.add("greek");

}
if (lang == "it") {
  body.classList.add("it");

}
if (lang == "french") {
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
    french: "Our Law Firms",
    greek: "Our Law Firms"
  },
  about: {
    eng: "Midwest Trade Law is a boutique legal practice dedicated to advising clients on compliance with international trade laws and regulations, including economic sanctions and embargoes, export controls, antiboycott matters, as well as customs, free trade agreements, and other trade-related issues.",
    ar: "Midwest Trade Law هي مؤسسة قانونية متخصصة مخصصة لتقديم المشورة للعملاء بشأن الامتثال لقوانين وأنظمة التجارة الدولية، بما في ذلك العقوبات الاقتصادية والحظر، وضوابط التصدير، ومسائل مكافحة المقاطعة، بالإضافة إلى الجمارك، واتفاقيات التجارة الحرة، وغيرها من القضايا المتعلقة بالتجارة.",
    greek: "Η Midwest Trade Law είναι μια εξειδικευμένη αμερικανική δικηγορική εταιρεία που ιδρύθηκε το 2020 από τον Valentin Povarchuk, δικηγόρο ειδικευμένο στο διεθνές εμπόριο με πάνω από δύο δεκαετίες εμπειρίας στον τομέα της συμμόρφωσης με τους κανόνες του παγκόσμιου εμπορίου.  Η εταιρεία ειδικεύεται σε θέματα κανονισμών εισαγωγών και εξαγωγών, οικονομικών κυρώσεων, εμπάργκο και διαχείρισης κινδύνων συμμόρφωσης στο εμπόριο. Είναι αναγνωρισμένη για τον συνδυασμό βαθιάς γνώσης των κανονισμών με πρακτική διορατικότητα, βοηθώντας πολυεθνικές εταιρείες να ενσωματώσουν τη νομική συμμόρφωση στις καθημερινές επιχειρηματικές τους δραστηριότητες. Η Midwest Trade Law παρέχει στους πελάτες της άμεση πρόσβαση σε εξειδικευμένη γνώση υψηλού επιπέδου, όπως αυτή που συνήθως προσφέρουν μεγάλα δικηγορικά γραφεία — σε πιο προσιτές τιμές. ",
    it: "Midwest Trade Law è uno studio legale boutique statunitense fondato nel 2020 da Valentin Povarchuk, avvocato specializzato in commercio internazionale con oltre vent’anni di esperienza nel settore della conformità commerciale globale. Lo studio è specializzato in normative di importazione ed esportazione, sanzioni economiche, embarghi e gestione dei rischi di conformità commerciale. È rinomato per la sua capacità di combinare una profonda conoscenza normativa con una visione pratica, aiutando le multinazionali a integrare la conformità legale nelle operazioni commerciali quotidiane. Midwest Trade Law offre ai clienti l’accesso diretto a competenze di alto livello, tipicamente presenti nei grandi studi legali, a tariffe più accessibili. ",
    french:"Midwest Trade Law est un cabinet d'avocats américain spécialisé, fondé en 2020 par Valentin Povarchuk, avocat spécialisé en commerce international comptant plus de vingt ans d'expérience dans le domaine de la conformité commerciale internationale.  Le cabinet est spécialisé dans la réglementation des importations et des exportations, les sanctions économiques, les embargos et la gestion des risques liés à la conformité commerciale. Il est reconnu pour allier une connaissance approfondie de la réglementation à une vision pratique, aidant ainsi les multinationales à intégrer la conformité juridique dans leurs opérations commerciales quotidiennes. Midwest Trade Law offre à ses clients un accès direct à une expertise de haut niveau, généralement réservée aux grands cabinets d'avocats, à des tarifs plus abordables. "
  },
  practice: {
    eng: {
      des: "",
      content: [{
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
      content: [{
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
    greek: {
      "des": "ΤΟΜΕΙΣ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ",
      "content": [{
          "name": "Συμμόρφωση και Ρύθμιση του Εμπορίου",
          "des": [
            "• Νομικές γνωμοδοτήσεις σχετικά με πολύπλοκους εμπορικούς νόμους, ελέγχους εξαγωγών, κυρώσεις και εμπάργκο.",
            "• Συμβουλές σχετικά με τη δέουσα επιμέλεια «γνώρισε τον πελάτη σου» (KYC) και τις συναλλαγές υψηλού κινδύνου."
          ]
        },
        {
          "name": "Έρευνες και Γνωστοποιήσεις",
          "des": [
            "• Διεξαγωγή εσωτερικών ερευνών υπό το πρίσμα του απορρήτου δικηγόρου-πελάτη.",
            "• Προετοιμασία και υποβολή εθελοντικών και εκ των προτέρων γνωστοποιήσεων σε αμερικανικές αρχές.",
            "• Εκπροσώπηση κατά τη διάρκεια ελέγχων, κλήσεων σε δικαστήριο και μέτρων επιβολής."
          ]
        },
        {
          "name": "Κυρώσεις & Θέματα Περιορισμένων Μερών",
          "des": [
            "• Καθοδήγηση σχετικά με κυρώσεις καθεστώτων και καταλόγους περιορισμένων μερών.",
            "• Υποβολή αιτήσεων για διαγραφή από καταλόγους και συνεργασία με ρυθμιστικές αρχές."
          ]
        },
        {
          "name": "Εταιρικές Συναλλαγές & Δέουσα Επιμέλεια",
          "des": [
            "• Δέουσα επιμέλεια εμπορικής συμμόρφωσης για συγχωνεύσεις, εξαγορές και επενδύσεις.",
            "• Σύνταξη εγγυήσεων και δηλώσεων συμμόρφωσης σε εταιρικές συναλλαγές."
          ]
        },
        {
          "name": "Πολιτικές, συμβάσεις και τεκμηρίωση",
          "des": [
            "• Ανάπτυξη πολιτικών, προτύπων και εγχειριδίων συμμόρφωσης σύμφωνα με τους αμερικανικούς και διεθνείς κανονισμούς.",
            "• Σύνταξη και διαπραγμάτευση συμβατικών ρητρών και πιστοποιήσεων που μετριάζουν τον νομικό κίνδυνο."
          ]
        },
        {
          "name": "Υπεράσπιση ενώπιον της κυβέρνησης",
          "des": [
            "• Εκπροσώπηση πελατών ενώπιον αμερικανικών κυβερνητικών οργανισμών σε διαδικασίες αδειοδότησης, ταξινόμησης και θέσπισης κανόνων.",
            "• Εξασφάλιση ευνοϊκών αποφάσεων, συμβουλευτικών γνωμοδοτήσεων και ρυθμιστικών αποτελεσμάτων."
          ]
        },
        {
          "name": "Εκπαίδευση & Κατάρτιση",
          "des": [
            "• Διοργάνωση εργαστηρίων και ενημερωτικών συναντήσεων για στελέχη σχετικά με τις νέες εμπορικές νομοθεσίες και τις τάσεις στην επιβολή τους."
          ]
        }
      ]
    },
    it: {
      "des": "AREE DI ATTIVITÀ",
      "content": [
        {
          "name": "Conformità commerciale e regolamentazione",
          "des": [
            "• Pareri legali su leggi commerciali complesse, controlli sulle esportazioni, sanzioni ed embarghi.",
            "• Consulenza sulla due diligence “know your customer” (KYC) e sulle transazioni ad alto rischio."
          ]
        },
        {
          "name": "Indagini e divulgazioni",
          "des": [
            "• Conduzione di indagini interne nell'ambito del segreto professionale.",
            "• Preparazione e presentazione di comunicazioni volontarie e preventive alle agenzie statunitensi.",
            "• Rappresentanza durante verifiche, citazioni in giudizio e azioni di esecuzione."
          ]
        },
        {
          "name": "Sanzioni e questioni relative alle parti soggette a restrizioni",
          "des": [
            "• Consulenza sulle sanzioni dei regimi e sugli elenchi delle parti soggette a restrizioni.",
            "• Presentazione di istanze di cancellazione dagli elenchi e interazione con le autorità di regolamentazione."
          ]
        },
        {
          "name": "Operazioni societarie e due diligence",
          "des": [
            "• Due diligence in materia di conformità commerciale per fusioni, acquisizioni e investimenti.",
            "• Redazione di garanzie e dichiarazioni di conformità nelle operazioni societarie."
          ]
        },
        {
          "name": "Politiche, contratti e documentazione",
          "des": [
            "• Sviluppo di politiche, standard e manuali di conformità in linea con le normative statunitensi e internazionali.",
            "• Redazione e negoziazione di clausole contrattuali e certificazioni che mitigano il rischio legale."
          ]
        },
        {
          "name": "Rappresentanza presso le autorità governative",
          "des": [
            "• Rappresentanza dei clienti dinanzi alle agenzie governative statunitensi in procedimenti di licenza, classificazione e regolamentazione.",
            "• Ottenimento di sentenze favorevoli, pareri consultivi e risultati normativi."
          ]
        },
        {
          "name": "Formazione e istruzione",
          "des": [
            "• Organizzazione di workshop e briefing per dirigenti sulle leggi commerciali emergenti e sulle tendenze in materia di applicazione."
          ]
        }
      ]
    },
    french: {
      "des": "DOMAINES D'ACTIVITÉ",
      "content": [
        {
          "name": "Conformité et réglementation commerciales",
          "des": [
            "• Avis juridiques sur les lois commerciales complexes, les contrôles à l'exportation, les sanctions et les embargos.",
            "• Conseils sur la diligence raisonnable « Know Your Customer » (KYC) et les transactions à haut risque."
          ]
        },
        {
          "name": "Enquêtes et divulgations",
          "des": [
            "• Conduite d'enquêtes internes dans le cadre du secret professionnel.",
            "• Préparation et dépôt de déclarations volontaires et préalables auprès des agences américaines.",
            "• Représentation lors d’audits, de citations à comparaître et de mesures coercitives."
          ]
        },
        {
          "name": "Sanctions et questions relatives aux parties soumises à des restrictions",
          "des": [
            "• Conseils sur les régimes de sanctions et les listes de parties soumises à des restrictions.",
            "• Dépôt de demandes de radiation de liste et collaboration avec les autorités réglementaires."
          ]
        },
        {
          "name": "Opérations d’entreprise et diligence raisonnable",
          "des": [
            "• Diligence raisonnable en matière de conformité commerciale pour les fusions, acquisitions et investissements.",
            "• Rédaction de garanties et de déclarations de conformité dans le cadre d'opérations d'entreprise."
          ]
        },
        {
          "name": "Politiques, contrats et documentation",
          "des": [
            "• Élaboration de politiques, de normes et de manuels de conformité conformes aux réglementations américaines et internationales.",
            "• Rédaction et négociation de clauses contractuelles et de certifications visant à atténuer les risques juridiques."
          ]
        },
        {
          "name": "Représentation auprès des pouvoirs publics",
          "des": [
            "• Représentation des clients devant les agences gouvernementales américaines dans le cadre de procédures d'octroi de licences, de classification et d'élaboration de règles.",
            "• Obtention de décisions favorables, d’avis consultatifs et de résultats réglementaires positifs."
          ]
        },
        {
          "name": "Formation et éducation",
          "des": [
            "• Organisation d’ateliers et de séances d’information à l’intention des dirigeants sur les nouvelles lois commerciales et les tendances en matière d’application de la loi."
          ]
        }
      ]
    }
  },
  sector: {
    eng: {
      des: "Midwest Trade Law serves clients across sectors where trade regulations are mission-critical:",
      content: [{
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
      content: [{
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
    greek: {
      "des": "Η Midwest Trade Law εξυπηρετεί πελάτες σε όλους τους κλάδους όπου οι εμπορικοί κανονισμοί είναι ζωτικής σημασίας:",
      "content": [{
          "des": "Βιομηχανία και τεχνολογία"
        },
        {
          "des": "Φαρμακευτικά προϊόντα και ιατρικές συσκευές"
        },
        {
          "des": "Ενέργεια, πετρέλαιο και φυσικό αέριο, καθώς και προηγμένα υλικά"
        },
        {
          "des": "Αεροδιαστημική, αεροπορία και logistics"
        },
        {
          "des": "Χρηματοπιστωτικά ιδρύματα και εταιρείες επενδύσεων"
        },
        {
          "des": "Οικογενειακές επιχειρήσεις και επενδυτικές εταιρείες"
        },
        {
          "des": "Αναδυόμενοι κλάδοι όπως το ψηφιακό εμπόριο και οι τεχνολογίες διπλής χρήσης"
        }
      ]
    },
    it: {
      "des": "Midwest Trade Law assiste clienti in tutti i settori in cui le normative commerciali sono fondamentali:",
      "content": [
        { "des": "Produzione e tecnologia" },
        { "des": "Prodotti farmaceutici e dispositivi medici" },
        { "des": "Energia, petrolio e gas e materiali avanzati" },
        { "des": "Aerospaziale, aviazione e logistica" },
        { "des": "Istituzioni finanziarie e società di investimento" },
        { "des": "Settori emergenti quali il commercio digitale e le tecnologie a duplice uso" }
      ]
    },
    french: {
      "des": "Midwest Trade Law sert des clients dans tous les secteurs où les réglementations commerciales sont essentielles à la mission :",
      "content": [
        { "des": "Fabrication et technologie" },
        { "des": "Produits pharmaceutiques et dispositifs médicaux" },
        { "des": "Énergie, pétrole et gaz, et matériaux avancés" },
        { "des": "Aérospatiale, aviation et logistique" },
        { "des": "Institutions financières et sociétés d'investissement" },
        { "des": "Secteurs émergents tels que le commerce numérique et les technologies à double usage" }
      ]
    }
  },
  founder: {
    eng: {
      des: "",
      content: [{
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
      content: [{
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
          des: ["• الروسية (اللغة الأم)", "• الفرنسية (مستوى متقدم)"],
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
    greek: {
      "des": "",
      "content": [{
          "name": "Ο Valentin Povarchuk είναι δικηγόρος διεθνούς εμπορίου και ιδρυτής της Midwest Trade Law.",
          "des": [""]
        },
        {
          "name": "Εκπαίδευση:",
          "des": [
            "• Πανεπιστήμιο Cornell, B.A. (summa cum laude, με την υψηλότερη διάκριση)",
            "• Νομική Σχολή του Πανεπιστημίου της Ουάσιγκτον, J.D., όπου διετέλεσε αρχισυντάκτης του Pacific Rim Law & Policy Journal"
          ]
        },
        {
          "name": "Επαγγελματικό υπόβαθρο:",
          "des": [
            "• Ξεκίνησε την καριέρα του σε κορυφαία δικηγορικά γραφεία της Ουάσιγκτον όπως Steptoe & Johnson LLP, McDermott Will & Emery LLP και Arent Fox LLP.",
            "• Πρώην εσωτερικός νομικός σύμβουλος σε παγκόσμιες εταιρείες στους τομείς μεταποίησης, τεχνολογίας και ιατρικής.",
            "• Παρείχε συμβουλές σε ελέγχους εξαγωγών, κυρώσεις, κανονισμούς κατά μποϊκοτάζ και εισαγωγές."
          ]
        },
        {
          "name": "Άδειες:",
          "des": [
            "• Δικαίωμα άσκησης δικηγορίας στη Μινεσότα, στην Ουάσιγκτον D.C. και ενώπιον του U.S. Court of International Trade."
          ]
        },
        {
          "name": "Γλώσσες:",
          "des": [
            "• Μητρική γλώσσα η ρωσική, άριστη γνώση της γαλλικής."
          ]
        },
        {
          "name": "Επαγγελματικές και κοινωνικές συνεργασίες:",
          "des": [
            "• Σύμβουλος του Διοικητικού Συμβουλίου – Midwest Global Trade Association",
            "• Πρώην Πρόεδρος (2022–2023) – Τμήμα Διεθνούς Εμπορικού Δικαίου, Δικηγορικός Σύλλογος Μινεσότα",
            "• Σύμβουλος και Πρόεδρος του Διοικητικού Συμβουλίου – Boundary Waters Advisory Committee"
          ]
        },
        {
          "name": "Δημοσιεύσεις και παρουσιάσεις (επιλεγμένες):",
          "des": [
            "• Ομιλητής στο WorldECR Forum (Ουάσιγκτον 2023–2024).",
            "• Εισηγητής σε σεμινάρια CLE για ελέγχους εξαγωγών και κυρώσεις.",
            "• Συνεργάτης σε εκδόσεις Export Compliance Manager και Thomson Reuters."
          ]
        }
      ]
    },
   it: {
      "des": "IL FONDATORE",
      "content": [
        {
          "name": "Valentin Povarchuk è un avvocato specializzato in commercio internazionale e fondatore di Midwest Trade Law.",
          "des": [""]
        },
        {
          "name": "Formazione:",
          "des": [
            "• Cornell University, B.A. (summa cum laude, con il massimo dei voti)",
            "• University of Washington School of Law, J.D., dove ha ricoperto il ruolo di redattore capo del Pacific Rim Law & Policy Journal"
          ]
        },
        {
          "name": "Esperienza professionale:",
          "des": [
            "• Ha iniziato la sua carriera presso importanti studi legali di Washington, D.C., tra cui Steptoe & Johnson LLP, McDermott Will & Emery LLP e Arent Fox LLP.",
            "• Ex consulente legale interno per multinazionali nei settori manifatturiero, tecnologico e medico.",
            "• Ha fornito consulenza su controlli sulle esportazioni, sanzioni, normative anti-boicottaggio e importazioni."
          ]
        },
        {
          "name": "Abilitazioni:",
          "des": [
            "• Abilitato all’esercizio della professione in Minnesota, Washington D.C. e dinanzi alla Corte di Commercio Internazionale degli Stati Uniti."
          ]
        },
        {
          "name": "Lingue:",
          "des": [
            "• Madrelingua russa, ottima conoscenza del francese."
          ]
        },
        {
          "name": "Affiliazioni professionali e civiche:",
          "des": [
            "• Consulente del Consiglio di Amministrazione – Midwest Global Trade Association",
            "• Ex Presidente (2022–2023) – Sezione di Diritto Commerciale Internazionale, Ordine degli Avvocati dello Stato del Minnesota",
            "• Consulente e Presidente del Consiglio – Boundary Waters Advisory Committee"
          ]
        },
        {
          "name": "Pubblicazioni e presentazioni (selezione):",
          "des": [
            "• Relatore al WorldECR Forum (Washington D.C., 2023–2024).",
            "• Relatore CLE sui controlli alle esportazioni e sulle sanzioni.",
            "• Collaboratore per Export Compliance Manager e Thomson Reuters."
          ]
        }
      ]
    },
    french: {
      "des": "À PROPOS DU FONDATEUR",
      "content": [
        {
          "name": "Valentin Povarchuk est avocat spécialisé en commerce international et fondateur de Midwest Trade Law.",
          "des": [""]
        },
        {
          "name": "Formation :",
          "des": [
            "• Université Cornell, licence (summa cum laude, mention très bien)",
            "• Faculté de droit de l'Université de Washington, doctorat en droit (J.D.), où il a été rédacteur en chef du Pacific Rim Law & Policy Journal"
          ]
        },
        {
          "name": "Parcours professionnel :",
          "des": [
            "• Début de carrière au sein de grands cabinets d'avocats à Washington, D.C., notamment Steptoe & Johnson LLP, McDermott Will & Emery LLP et Arent Fox LLP.",
            "• Ancien conseiller juridique interne en conformité commerciale pour de grandes multinationales dans les secteurs manufacturier, technologique et médical.",
            "• A conseillé des dirigeants sur les contrôles à l'exportation, les sanctions, les réglementations anti-boycott et les questions d'importation."
          ]
        },
        {
          "name": "Licences :",
          "des": [
            "• Admis au barreau du Minnesota, de Washington, D.C., et devant la Cour américaine du commerce international."
          ]
        },
        {
          "name": "Langues :",
          "des": [
            "• Langue maternelle russe, maîtrise du français."
          ]
        },
        {
          "name": "Affiliations professionnelles et civiques :",
          "des": [
            "• Conseiller auprès du conseil d'administration – Midwest Global Trade Association",
            "• Ancien président (2022–2023) – Section du droit des affaires internationales, Barreau de l'État du Minnesota",
            "• Conseiller et président du conseil d'administration – Boundary Waters Advisory Committee"
          ]
        },
        {
          "name": "Publications et présentations (sélection) :",
          "des": [
            "• Intervenant au WorldECR Forum (Washington D.C., 2023–2024).",
            "• Intervenant CLE sur les contrôles à l'exportation et les sanctions.",
            "• Contributeur pour Export Compliance Manager et Thomson Reuters."
          ]
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
      "Μέσω αυτής της συνεργασίας, οι πελάτες αποκτούν πρόσβαση στους ευρείς πόρους, τα τεχνολογικά συστήματα και το συντονισμένο πλαίσιο υπηρεσιών της LexDesk360 — ενώ παράλληλα επωφελούνται από τη βαθιά γνώση της Midwest Trade Law σχετικά με τη νομοθεσία των ΗΠΑ.",
      "Αυτή η συνεργασία διασφαλίζει ότι οι πολυεθνικοί πελάτες λαμβάνουν απρόσκοπτη, ολοκληρωμένη νομική υποστήριξη σε όλα τα στάδια των δραστηριοτήτων τους.",
      "Ενώ η Midwest Trade Law διατηρεί την ανεξάρτητη πρακτική της, μοιράζεται τη δέσμευση της LexDesk360 για ποιότητα, ακεραιότητα και καινοτομία, παρέχοντας διασυνοριακές νομικές λύσεις με ενιαίο παγκόσμιο πρότυπο."
    ],
    it: [
      "Midwest Trade Law opera sotto l’egida di LexDesk360, una piattaforma legale globale che riunisce studi legali internazionali ed esperti legali in diverse giurisdizioni.",
      "In qualità di studio affiliato di LexDesk360 con sede negli Stati Uniti, Midwest Trade Law integra la presenza internazionale del gruppo fornendo consulenza specializzata in materia di conformità commerciale, sanzioni e questioni normative transfrontaliere.",
      "Grazie a questa collaborazione, i clienti hanno accesso alle risorse, ai sistemi tecnologici e al quadro di servizi coordinati di LexDesk360, beneficiando al contempo della profonda conoscenza delle normative statunitensi di Midwest Trade Law.",
      "Questa partnership garantisce un supporto legale end-to-end senza soluzione di continuità in tutte le fasi delle operazioni dei clienti.",
      "Pur mantenendo la propria indipendenza, Midwest Trade Law condivide l’impegno di LexDesk360 verso qualità, integrità e innovazione, fornendo soluzioni legali transfrontaliere secondo uno standard globale unificato."
    ],
    french: [
      "Midwest Trade Law opère sous l’égide de LexDesk360, une plateforme juridique mondiale réunissant des cabinets d’avocats internationaux et des experts juridiques dans de multiples juridictions.",
      "En tant que cabinet partenaire de LexDesk360 basé aux États-Unis, Midwest Trade Law complète la présence internationale du groupe en fournissant des conseils spécialisés en matière de conformité commerciale, de sanctions et de questions réglementaires transfrontalières.",
      "Grâce à ce partenariat, les clients ont accès aux ressources étendues, aux systèmes technologiques et au cadre de services coordonnés de LexDesk360, tout en bénéficiant de la connaissance approfondie de la réglementation américaine de Midwest Trade Law.",
      "Ce partenariat garantit aux clients multinationaux un accompagnement juridique fluide et complet à toutes les étapes de leurs activités.",
      "Tout en conservant son indépendance, Midwest Trade Law partage l’engagement de LexDesk360 en matière de qualité, d’intégrité et d’innovation, en fournissant des solutions juridiques transfrontalières selon une norme mondiale unifiée."
    ]
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
    founder: "نبذة عن المؤسس ",
    coomingSoon: "هذه الصفحة قيد الصيانة حاليًا وستكون متاحة مرة أخرى قريبًا.",
    underConstruction: "الصفحة قيد الإنشاء.",
  },
  it: {
    home: "Home",
    aboutTitle: "INFORMAZIONI SULLO STUDIO",
    services: "Ruolo all’interno di LexDesk360",
    view: "",
    parac: "AREE DI ATTIVITÀ",
    sector: "COMPETENZE SETTORIALI",
    founder: "IL FONDATORE ",
    coomingSoon: "",
    underConstruction: "",
  },
  greek: {
    home: "Αρχκή",
    aboutTitle: "ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ ΕΤΑΙΡΕΙΑ ",
    services: "Ρόλος στο πλαίσιο του LexDesk360",
    view: "",
    parac: "ΤΟΜΕΙΣ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ  ",
    sector: "ΕΞΕΙΔΙΚΕΥΣΗ ΑΝΑ ΤΟΝ ΚΛΑΔΟ ",
    founder: "ΣΧΕΤΙΚΑ ΜΕ ΤΟΝ ΙΔΡΥΤΗ  ",
    coomingSoon: "",
    underConstruction: "",
  },
  french: {
    home: "Accueil",
    aboutTitle: "À PROPOS DU CABINET ",
    services: "Rôle au sein de LexDesk360",
    view: "",
    parac: "DOMAINES D'ACTIVITÉ",
    sector: "EXPERTISE SECTORIELLE",
    founder: "À PROPOS DU FONDATEUR ",
    coomingSoon: "",
    underConstruction: "",
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
  .map(({
    name,
    des
  }) => {
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
  .map(({
    name,
    des
  }) => {
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