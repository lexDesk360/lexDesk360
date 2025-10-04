let langF = localStorage.getItem("lang");
let bodyF = document.getElementById("body");
let hiddenPopup = localStorage.getItem("hiddenPopup");

if (langF == "ar") {
  bodyF.classList.add("rtl");
}
if (langF == null && langF != "eng" && langF != "ar") {
  localStorage.setItem("lang", "eng");
  langF = "eng";
}
console.log(langF);
let translationsF;
function getData() {
  fetch("./assets/json/footer-page.json")
    .then((res) => res.json())
    .then((data) => {
      translationsF = data;
      setData();
    })
    .catch((err) => console.error(err));
}
getData();
function setData() {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (el.placeholder !== undefined) {
      el.placeholder = translationsF[langF][key] || el.placeholder;
    } else {
      el.innerText = translationsF[langF][key] || el.innerText;
    }
  });
}
function openCompanyLinkedin() {
  window.open("https://www.linkedin.com/company/lexdesk360/", "_blank");
}
function getPage(page, id) {
  if (page == "our-services") {
    localStorage.setItem("activeTab", id);
  }
  window.location.href = `./${page}.html`;
}
const erroremailSub = document.getElementById("erroremailSub");

document
  .getElementById("Subscribe")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();
    if (!validateFormFooter()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const buttonFooter = document.getElementById("buttonFooter");
    buttonFooter.disabled = true;
    buttonFooter.textContent = translationsF[langF].Sending;
    try {
      const email = document.getElementById("emailSub").value;

      const emailData = {
        sender: {
          name: "Website Form",
          email: "wessamtarek438@gmail.com", // يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
            email: "amr.tawfek@outlook.com", // يجب أن يكون مُتحققاً عليه
            name: "amr",
          },
        ],
        subject: `Subscribe form ${email}`,
        htmlContent: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">New Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                       
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                        
                        
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Submission Time:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
                        </tr>
                    </table>
                </div>
            `,
        textContent: `
                New Form Submission
                Email: ${email}
                Submission Time: ${new Date().toLocaleString()}
            `,
      };

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key":
            "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",
          "content-type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const responseData = await response.json();
      console.log("Brevo Response:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData.message || `HTTP error! status: ${response.status}`
        );
      }
      erroremailSub.innerHTML = `<p class='errorMassage' style="color: green;">${translationsF[langF].succes}</p>`;

      document.getElementById("Subscribe").reset();
    } catch (error) {
      console.error("Full Error:", error);
      erroremailSub.innerHTML = `<p class='errorMassage' style="color: red;">${translationsF[langF].fail}</p>`;
    } finally {
      buttonFooter.disabled = false;
      buttonFooter.textContent = translationsF[langF].Subscribe;
    }
  });
function validateFormFooter() {
  const emailSub = document.getElementById("emailSub").value.trim();
  const erroremailSub = document.getElementById("erroremailSub");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailSub)) {
    erroremailSub.innerHTML = `<span style="color:red">${translationsF[langF].emailVal}</span>`;
    return false;
  }

  return true;
}

bodyF.style.display = "block";
const policyHTML = `
      <div id="policy" class="policy">
      </div>
    `;
if (hiddenPopup === null || hiddenPopup === "false") {
  const popupHTML = `
      <div id="popup" class="popup">
        <div class="popup-content">
          <div class="title-ploicy">
            <p>We value your privacy</p>
          </div>
          <div class="descrbtion-ploicy">
            <p>
              We use local storage to remember your preferences and improve your browsing experience.
              By clicking "Accept All", you consent to the use of local storage on this site.
            </p>
          </div>
          <div class="btns">
            <div class="btn-ploicy" id="customise"><p>Customise</p></div>
            <div class="btn-ploicy" id="reject"><p>Reject All</p></div>
            <div class="btn-ploicy accept" id="accept"><p>Accept All</p></div>
          </div>
        </div>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", popupHTML);
  const popup = document.getElementById("popup");
  const acceptBtn = document.getElementById("accept");
  const rejectBtn = document.getElementById("reject");
  const customiseBtn = document.getElementById("customise");
  [acceptBtn, rejectBtn, customiseBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.remove();
      localStorage.setItem("hiddenPopup", "true");
      hiddenPopup = "true";
      policyFun();
    });
  });
}
if (hiddenPopup === "true") {
  policyFun();
}

function policyFun() {
  document.body.insertAdjacentHTML("beforeend", policyHTML);
  const policy = document.getElementById("policy");
  const policyContent = `
       <div id="popupPolicey">
    <div class="popup-content">
    <div class='close' id='close'></div>
      <div class="tilte">
        <p>Customise Consent Preferences</p>
      </div>
      <div class="des">
        <p>
          We use <strong>local storage</strong> to help you navigate efficiently and perform certain functions.
          You will find detailed information about each consent category below.
        </p>
      </div>

      <div class="category">
        <div class="small-title">
          <p>Necessary</p>
        </div>
        <div class="des">
          <p>These settings are required for the site to function properly and cannot be disabled.</p>

        </div>
      </div>

      <div class="category">
        <div class="small-title">
          <p>Functional</p>
        </div>
        <div class="des">
          <p>Helps perform site functionalities like feedback and third-party features.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>Analytics</p>
        </div>
        <div class="des">
          <p>Used to understand how visitors interact with the website.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>Performance</p>
        </div>
        <div class="des">
          <p>Helps improve website speed and user experience.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>Advertisement</p>
        </div>
        <div class="des">
          <p>Used to show relevant content or ads based on your interests.</p>

        </div>

      </div>

      <div class="btns">
        <div class="btn-ploicy" id="reject">
          <p>Reject All</p>
        </div>

        <div class="btn-ploicy" id="customise">
          <p > Save My Preferences </p>
        </div>
        <div class="btn-ploicy accept" id="accept">
          <p> Accept All </p>
        </div>
      </div>
    </div>
  </div>
    `;
  policy.addEventListener("click", () => {
    console.log("hi");
    document.body.insertAdjacentHTML("beforeend", policyContent);
    const popupPolicey = document.getElementById("popupPolicey");
    console.log(popupPolicey);
    const closeBtn = document.getElementById("close");
    const acceptBtn = document.getElementById("accept");
    const rejectBtn = document.getElementById("reject");
    const customiseBtn = document.getElementById("customise");
    [acceptBtn, rejectBtn, customiseBtn, closeBtn].forEach((btn) => {
      btn.addEventListener("click", () => {
        popupPolicey.remove();
      });
    });
  });
}
