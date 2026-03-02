localStorage.setItem("currentPage", "our-services");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
let activeTab = localStorage.getItem("activeTab");

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}
let tabID;
if (activeTab == null) {
  tabID = 1;
} else {
  tabID = activeTab;
}
let activeContent = 0;
let items;
let defaultItem;
function getData() {
  fetch("./assets/json/our-services.json")
    .then((res) => res.json())
    .then((data) => {
      items = data;
      defaultItem = items[0];
      openTab(tabID);
      renderActiveContent();
      onload();
    })
    .catch((err) => console.error(err));
}
getData();

function openTab(tabId) {
  document.querySelectorAll(".tab").forEach((div) => {
    div.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  document.querySelectorAll(".tab-content").forEach((content) => {
    if (content.id == `content${tabId}`) {
      content.classList.add("active");
    }
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    if (tab.id == `tab${tabId}`) {
      tab.classList.add("active");
    }
  });
  activeContent = tabId - 1;
  defaultItem = items[tabId - 1];
  tabID = tabId;
  onload();
  renderActiveContent();
}
function onload() {
  const dataTranslations = {
    eng: {
      pathPage: "Home ",
      titlePage: "Our Services",
      WhatWeOffer: "What We Offer",
      whoFor: "Who It’s For",
      tab1: "LexFend",
      tab2: "LexTend",
      tab3: "LexTrack",
      tab4: "LexFound",
    },
    ar: {
      pathPage: " الصفحة الرئيسية ",
      titlePage: "خدماتنا",
      WhatWeOffer: "ما نقدمه",
      whoFor: "لمن صُمّم",
      tab1: "LexFend",
      tab2: "LexTend",
      tab3: "LexTrack",
      tab4: "LexFound",
    },
    greek: {
      pathPage: "ΑΡΧΙΚΗ",
      titlePage: "Οι υπηρεσίες μας ",
      WhatWeOffer: "Τι Προσφέρουμε ",
      whoFor: "Σε ποιους απευθύνεται",
      tab1: "LexFend",
      tab2: "LexTend",
      tab3: "LexTrack",
      tab4: "LexFound",
    },
  };
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (el.placeholder !== undefined) {
      el.placeholder = dataTranslations[lang][key] || el.placeholder;
    } else {
      el.innerText = dataTranslations[lang][key] || el.innerText;
    }
  });

  const itemTranslations = {
    tilte: defaultItem[lang].title,
    des: defaultItem[lang].des,
  };
  document.querySelectorAll("[item-translate]").forEach((el) => {
    const key = el.getAttribute("item-translate");
    if (el.placeholder !== undefined) {
      el.placeholder = itemTranslations[key] || el.placeholder;
    } else {
      el.innerText = itemTranslations[key] || el.innerText;
    }
  });
  let offerList = document.getElementById(`offerList${tabID}`);
  offerList.innerHTML = defaultItem[lang].weOffer
    .map(
      (item, index) => `
      <div class="descrbtion-title">
    <p>${item.name}</p>
   </div>
  <div class="descrbtion">
 <p>${item.des}</p>
       </div>
    `
    )
    .join("");

  let whoForList = document.getElementById(`whoForList${tabID}`);

  whoForList.innerHTML = defaultItem[lang].whoFor
    .map(
      (item, index) => `
      <div class="row">
       <i class="image bi ${item.icon}"></i>
  <div class="data">
 <div class="descrbtion-title">
         <p>${item.name}</p>
     </div>
  <div class="descrbtion">
      <p>${item.des}</p>
  </div>
    </div>

</div>
    `
    )
    .join("");
}
function renderActiveContent() {
  const TranslationsContent = {
    eng: {
      p1: defaultItem[lang].p1,
      p2: defaultItem[lang].p2,
      button: defaultItem[lang].button,
    },
    ar: {
      p1: defaultItem[lang].p1,
      p2: defaultItem[lang].p2,
      button: defaultItem[lang].button,
    },
  };
  document.querySelectorAll("[data-Content]").forEach((el) => {
    const key = el.getAttribute("data-Content");
    if (el.placeholder !== undefined) {
      el.placeholder = TranslationsContent[lang][key] || el.placeholder;
    } else {
      el.innerText = TranslationsContent[lang][key] || el.innerText;
    }
  });
}

function getContact() {
  window.location.href = `./contact-us`;
}
localStorage.setItem("currentPageNew", 1);
localStorage.setItem("activeForm", null);
