localStorage.setItem("currentPage", "news");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
let currentPageNew = localStorage.getItem("currentPageNew");

let news;
fetch("./assets/json/news.json")
  .then((res) => res.json())
  .then((data) => {
    news = data;
    renderItems();
  })
  .catch((err) => console.error(err));

if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}

let itemDetails;
// Pagination settings
const itemsPerPage = 4;
let currentPagex;
if (currentPageNew == null) {
  currentPagex = 1;
} else {
  currentPagex = Number(currentPageNew);
  console.log(currentPagex);
}
const translations = {
  eng: {
    pathPage: "Home  ",
    titlePage: "News",
    readMore: "READ MORE",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "الأخبار",
    readMore: "أقرا المزيد",
  },
};

document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translations[lang][key] || el.placeholder;
  } else {
    el.innerText = translations[lang][key] || el.innerText;
  }
});
function renderItems() {
  const list = document.getElementById("item-list");
  const pagination = document.getElementById("pagination");

  // Calculate start and end indices for the current page
  const start = (currentPagex - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = news.slice(start, end);

  // Render items
  list.innerHTML = paginatedItems
    .map(
      (item, index) => `   <div class="item">
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
                    <p onclick="getDetailsNews(${start + index})" >${
        translations[lang].readMore
      }</p>
                </div>
            </div>`
    )
    .join("");

  // Render pagination controls
  const totalPages = Math.ceil(news.length / itemsPerPage);
  pagination.innerHTML = `
               <div class="btn prev" onclick="changePage('prev')"></div>
                <p> ${currentPagex} / ${totalPages}</p>
                <div class="btn next" onclick="changePage('next')"></div>
            `;
}

function changePage(type) {
  let newPage;
  if (type == "prev") {
    newPage = currentPagex - 1;
  } else if (type == "next") {
    newPage = currentPagex + 1;
  }
  console.log(newPage);
  const totalPages = Math.ceil(news.length / itemsPerPage);
  console.log(totalPages);

  if (newPage >= 1 && newPage <= totalPages) {
    currentPagex = newPage;
    console.log(currentPagex);
    localStorage.setItem("currentPageNew", currentPagex);
    renderItems();
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getDetailsNews(index) {
  itemDetails = news[index];
  localStorage.setItem("selectedNew", JSON.stringify(news[index]));
  let filteredArr = news.filter((_, i) => i !== index);
  let randomTwoNews = filteredArr.sort(() => 0.5 - Math.random()).slice(0, 2);
  localStorage.setItem("randomTwoNews", JSON.stringify(randomTwoNews));
  window.location.href = "./news-details";
}
// Initialize
  localStorage.setItem("activeForm", null);
