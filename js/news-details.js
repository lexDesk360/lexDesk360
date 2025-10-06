localStorage.setItem("currentPage", "news-details");
localStorage.setItem("menuState", "false");
let lang = localStorage.getItem("lang");
let body = document.getElementById("body");
let randomTwoNews = JSON.parse(localStorage.getItem("randomTwoNews"));
let news;
fetch("./assets/json/news.json")
  .then((res) => res.json())
  .then((data) => {
    news = data;
  })
  .catch((err) => console.error(err));
if (lang == null && lang != "eng" && lang != "ar") {
  localStorage.setItem("lang", "eng");
  lang = "eng";
}
if (lang == "ar") {
  body.classList.add("rtl");
}
const item = JSON.parse(localStorage.getItem("selectedNew"));
const translationsData = {
  eng: {
    pathPage: "Home ",
    titlePage: "News",
    moreNew: "More News",
    readMore: "READ MORE",
  },
  ar: {
    pathPage: " الصفحة الرئيسية ",
    titlePage: "الأخبار ",
    moreNew: "أخبار أكثر",
    readMore: "أقرا المزيد",
  },
};
const translationsItem = {
  date: item[lang].date,
  name: item[lang].name,
  img: item[lang].img,
};

document.querySelectorAll("[data-translate]").forEach((el) => {
  const key = el.getAttribute("data-translate");
  if (el.placeholder !== undefined) {
    el.placeholder = translationsData[lang][key] || el.placeholder;
  } else {
    el.innerText = translationsData[lang][key] || el.innerText;
  }
});
document.querySelectorAll("[item-translate]").forEach((el) => {
  const key = el.getAttribute("item-translate");
  if (key === "img") {
    el.style.backgroundImage = `url('${translationsItem[key]}')`;
    console.log(translationsItem[key]);
  } else {
    el.innerText = translationsItem[key] || el.innerText;
  }
});

let contentNews = document.getElementById("contentNews");

contentNews.innerHTML = item[lang].content
  .map(
    (text, index) => `
       <div class="title-small ">
                <p >${text.name}</p>
            </div>
             
   <div class="descrbtion">
                  <p>${text.small}</p>
</div>
 <div class="descrbtion-title">
 <p>${text.smallBold}</p>
            </div>
<div class="descrbtion ">
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


let itemList = document.getElementById("itemList");
console.log(randomTwoNews);
console.log(itemList);

itemList.innerHTML = randomTwoNews
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
                    <p onclick="getDetailsNews(${item[lang].id})">${translationsData[lang].readMore}</p>
                </div>
            </div>`
  )
  .join("");

function getDetailsNews(id) {
  let index = id - 1;
  let itemDetails = news[index];
  localStorage.setItem("selectedNew", JSON.stringify(itemDetails));
  let filteredArr = news.filter((_, i) => i !== index);
  let randomTwoNews = filteredArr.sort(() => 0.5 - Math.random()).slice(0, 2);
  localStorage.setItem("randomTwoNews", JSON.stringify(randomTwoNews));
  window.location.href = "./news-details";
}

  localStorage.setItem("activeForm", null);
