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
  window.location.href = `./${page}`;
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
          "name": "LexDesk360",
          "email": "lexdesk360@gmail.com",

        },
        to: [{
          "email": "info@lexdesk360.com",
          "name": "LexDesk"
        }],
      
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
          "api-key": "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",
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
        <p>Effective Date: 10th Oct, 2025 </p>
      </div>
      <div class="category">
        <div class="small-title">
          <p>1. GENERAL – DATA CONTROLLER</p>
        </div>
        <div class="des">
          <p>
            This website is provided and controlled by LexDesk360 (“We”, “LexDesk360”, the “Firm”).
          </p>
          <p>This Privacy Policy applies to all users who browse our website in order to obtain information about our
            services, contact us through the contact details listed on the website, or subscribe to our newsletter.
            Clients and partners of LexDesk360 may receive additional information about their personal data processing
            during onboarding and business acceptance procedures.</p>
          <p>LexDesk360 is the Data Controller of your personal data processed while you browse our website and is
            committed to preserving privacy and processing your personal data in accordance with the General Data
            Protection Regulation (EU) 2016/679 (“GDPR”) and applicable data protection legislation.</p>
          <p>We provide this Privacy Policy to inform you about how we collect, use, protect, and otherwise process your
            personal data when browsing the website.</p>
        </div>
      </div>
      <div class="category">
        <div class="small-title">
          <p>DEFINITIONS</p>
        </div>
        <div class="des">
          <p>For the purposes of this Privacy Policy:</p>
          <p>• Applicable data protection legislation means any relevant data protection laws, regulations, directives,
            and associated instruments, including the GDPR and applicable national legislation, as well as the decisions
            and guidelines of supervisory authorities.</p>
          <p>• Personal data means any information relating to an identified or identifiable natural person.</p>
          <p>• Processing means any operation performed on personal data, such as collection, storage, use, disclosure,
            or deletion.</p>
          <p>• Data Controller means the entity that determines the purposes and means of processing personal data.</p>
          <p>• Data Processor means the entity that processes personal data on behalf of the controller.</p>
          <p>• Recipient means any natural or legal person, public authority, agency or body, to which personal data are
            disclosed.</p>
          <p>• Consent means any freely given, specific, informed, and unambiguous indication by which a data subject
            agrees to the processing of personal data.</p>
        </div>
      </div>

      <div class="category">
        <div class="small-title">
          <p>3. HOW WE COLLECT PERSONAL DATA</p>
        </div>
        <div class="des">
          <p>We may collect personal data:</p>
          <p>• Directly from you</p>
          <p>When you communicate with us via e-mail, phone, or otherwise.</p>
          <p>When you subscribe to our newsletter.</p>
          <p>When you submit information through forms on our website (e.g., contact form, event registration).</p>
          <p>• Automatically through our website</p>
          <p>When you visit our website, we may collect technical and usage data such as IP address, browser type,
            device information, operating system, and cookies.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>4. PERSONAL DATA WE MAY COLLECT</p>
        </div>
        <div class="des">
          <p>We may collect and process the following categories of personal data:</p>
          <p>• Identification and contact information (e.g., name, company, title, e-mail address, phone number).</p>
          <p>• Information you voluntarily provide during communications with us.</p>
          <p>• Technical and browsing information (e.g., IP address, browser type, operating system, website usage
            data).</p>
          <p>We do not require you to disclose sensitive personal data. Please share only what is strictly necessary for
            the purpose of your communication with us.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>5. PURPOSES AND LEGAL BASES FOR DATA PROCESSING</p>
        </div>
        <div class="des">
          <p>We may process your personal data for the following purposes:</p>
          <p>• Performance of a contract or pre-contractual steps (Art. 6§1(b) GDPR)</p>
          <p class="marginleft">- Responding to your inquiries and requests.</p>
          <p class="marginleft" >- Communicating with prospective clients.</p>
          <p>• Legitimate interests (Art. 6§1(f) GDPR)</p>
          <p class="marginleft" >- Providing information on our services.</p>
          <p class="marginleft" >- Supporting and promoting LexDesk360’s activities.</p>
          <p class="marginleft" >- Ensuring the security of our website, communications, and IT systems.</p>
          <p class="marginleft" >- Preventing fraud or malicious activity.</p>
          <p class="marginleft" >- Analyzing and improving our services and communications.</p>
          <p class="marginleft" >- Promoting our services on social media.</p>
          <p>• Legal obligations (Art. 6§1(c) GDPR)</p>
          <p class="marginleft" >- Compliance with applicable laws and regulations.</p>
          <p class="marginleft" >- Establishment, exercise, or defense of legal claims.</p>
          <p>• Consent (Art. 6§1(a) GDPR)</p>
          <p class="marginleft" >- Sending you newsletters or marketing communications when you have opted in.</p>
          <p class="marginleft" >- Use of non-essential cookies on our website.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>6. STORAGE OF PERSONAL DATA</p>
        </div>
        <div class="des">
          <p>Your personal data is stored on secure servers and we ensure adequate safeguards as required under Articles
            44–49 GDPR and applicable data privacy regulations.</p>

        </div>

      </div>
      <div class="category">
        <div class="small-title">
          <p>7. RETENTION OF PERSONAL DATA</p>
        </div>
        <div class="des">
          <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected,
            including for legal, regulatory, or contractual requirements.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>8. WHO WE SHARE YOUR PERSONAL DATA WITH</p>
        </div>
        <div class="des">
          <p>Your personal data may be shared with:</p>
          <p>• Third-party service providers (e.g., IT, website hosting).</p>
          <p>• Public authorities, where required by law.</p>
          <p>• Analytics providers in anonymized and aggregated form.</p>
          <p>All processors acting on behalf of LexDesk360 are contractually bound to comply with GDPR and maintain
            appropriate technical and organizational measures to protect your data.</p>
        </div>

      </div>
      <div class="category">
        <div class="small-title">
          <p>9. YOUR RIGHTS</p>
        </div>
        <div class="des">
          <p>You have the following rights under GDPR:</p>
          <p>• Right of access to your personal data.</p>
          <p>• Right to rectification of inaccurate or incomplete data.</p>
          <p>• Right to erasure of your personal data.</p>
          <p>• Right to restrict processing in certain cases.</p>
          <p>• Right to object to processing, including for direct marketing.</p>
          <p>• Right to data portability.</p>
          <p>• Right to withdraw consent at any time (without affecting prior lawful processing).</p>
          <p>To exercise these rights, please contact us at privacy@lexdesk360.com.</p>
          <p>You also have the right to lodge a complaint with your local Data Protection Authority if you believe your
            data is being processed unlawfully.</p>
        </div>

      </div>

      <div class="category">
        <div class="small-title">
          <p>10. HOW WE PROTECT YOUR PERSONAL DATA</p>
        </div>
        <div class="des">
          <p>We implement technical and organizational measures to ensure a high level of security, including
            encryption, secure storage, access restrictions, and staff confidentiality commitments.</p>
        </div>

      </div>
      <div class="category">
        <div class="small-title">
          <p>11. LINKS TO THIRD-PARTY WEBSITES</p>
        </div>
        <div class="des">
          <p>Our website may contain links to third-party websites and social media platforms. These sites are governed
            by their own privacy policies, and we are not responsible for their content or data practices.</p>
        </div>

      </div>
      <div class="category">
        <div class="small-title">
          <p>12. COOKIES</p>
        </div>
        <div class="des">
          <p>We use cookies to improve website functionality and user experience. Some cookies are essential, while others require your consent. For more details, please see our Cookie Policy.</p>
        </div>

      </div>
      <div class="category">
        <div class="small-title">
          <p>13. CHANGES TO THIS PRIVACY POLICY</p>
        </div>
        <div class="des">
          <p>This Privacy Policy may be updated from time to time. Changes will be posted on this page with the revised effective date. We encourage you to review it periodically.</p>
        </div>

      </div>
            <div class="category">
        <div class="small-title">
          <p>14. CONTACT US</p>
        </div>
        <div class="des">
          <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, you can contact us at:</p>
          <p class='cursor' onclick='openGmailCompose()'>privacy@lexdesk360.com</p>
        </div>

      </div>
      <div class="btns">
        <div class="btn-ploicy" id="reject">
          <p>Reject All</p>
        </div>

        <div class="btn-ploicy" id="customise">
          <p> Save My Preferences </p>
        </div>
        <div class="btn-ploicy accept" id="accept">
          <p> Accept All </p>
        </div>
      </div>
    </div>
  </div>
    `;
  policy.addEventListener("click", () => {
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

function openGmailCompose() {
  const params = new URLSearchParams();
  params.set("to", "privacy@lexdesk360.com");
  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&" + params.toString();
  window.open(gmailUrl, "_blank", "noopener");
}
