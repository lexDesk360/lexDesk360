let scriptNav;
let scriptFooter;

function loadComponents() {
  let loaded = 0;
  function checkLoaded() {
    loaded++;
    if (loaded === 2) {
      let loadingDiv = document.getElementById("loading");
      if (loadingDiv) {
        loadingDiv.style.display = "none";
      }
      let contentDiv = document.getElementById("content")
      if(contentDiv){
        contentDiv.style.display = "block";
      }
    }
  }
  // تحميل Navbar
  fetch("./navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
      scriptNav = document.createElement("script");
      scriptNav.src = "./js/navbar.js";
      scriptNav.onload = checkLoaded;
      document.body.appendChild(scriptNav);
    })
    .catch((error) => console.error("Error loading navbar:", error));
  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      scriptFooter = document.createElement("script");
      scriptFooter.src = "./js/footer.js";
      scriptFooter.onload = checkLoaded;
      document.body.appendChild(scriptFooter);
    });
}
loadComponents();

function getHome() {
  window.location.href = `./home.html`;
}
function getNetwork() {
  window.location.href = `./network-firms.html`;
}
function getTeam() {
  window.location.href = `./team.html`;
}
