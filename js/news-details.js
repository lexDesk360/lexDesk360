localStorage.setItem("currentPage", "news-details");
localStorage.setItem("menuState", "false");

let lang = localStorage.getItem("lang");
let body = document.getElementById("body");

if (lang == null || (lang != "eng" && lang != "ar")) {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}

if (lang == "ar") {
  body.classList.add("rtl");
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let itemList = document.getElementById("itemList");
let contentNews = document.getElementById("contentNews");

const translationsData = {
  eng: {
    pathPage: "Home",
    titlePage: "News",
    moreNew: "More News",
    readMore: "READ MORE",
  },
  ar: {
    pathPage: "الصفحة الرئيسية",
    titlePage: "الأخبار",
    moreNew: "أخبار أكثر",
    readMore: "أقرا المزيد",
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

fetch("./assets/json/news.json")
  .then((res) => res.json())
  .then((news) => {

    // current news
    const item = news.find(
      (item) => item[lang].id == id
    );

    if (!item) return;

    // translate item
    const translationsItem = {
      date: item[lang].date,
      name: item[lang].name,
      img: item[lang].img,
    };

    // set item data
    document.querySelectorAll("[item-translate]").forEach((el) => {

      const key = el.getAttribute("item-translate");

      if (key === "img") {
        el.style.backgroundImage = `url('${translationsItem[key]}')`;
      } else {
        el.innerText = translationsItem[key] || "";
      }

    });

    // content
    contentNews.innerHTML = item[lang].content
      .map(
        (text) => `
          <div class="title-small">
              <p>${text.name || ""}</p>
          </div>

          <div class="descrbtion">
              <p>${text.small || ""}</p>
          </div>

          <div class="descrbtion-title">
              <p>${text.smallBold || ""}</p>
          </div>

          <div class="descrbtion">
              ${text.des
                .map(
                  (desc) => `
                    <p>${desc}</p>
                  `
                )
                .join("")}
          </div>
        `
      )
      .join("");

    // random news
    let filteredArr = news.filter(
      (newsItem) => newsItem[lang].id != id
    );

    let randomTwoNews = filteredArr
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    localStorage.setItem(
      "randomTwoNews",
      JSON.stringify(randomTwoNews)
    );

    // more news
    itemList.innerHTML = randomTwoNews
      .map(
        (item) => `
          <div class="item">

              <div class="border-left">
                  <div class="date">
                      <p>${item[lang].date}</p>
                  </div>

                  <div class="title-small">
                      <p>${item[lang].name}</p>
                  </div>
              </div>

              <div class="descrbtion">
                  <p>${item[lang].des}</p>
              </div>

              <div class="link-more cursor">
                  <p onclick="getDetailsNews(${item[lang].id})">
                    ${translationsData[lang].readMore}
                  </p>
              </div>

          </div>
        `
      )
      .join("");

    // global function
    window.getDetailsNews = function (newsId) {

      window.location.href = `./news-details?id=${newsId}`;

    };

  })
  .catch((err) => console.error(err));

localStorage.setItem("activeForm", null);