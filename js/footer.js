let langF = localStorage.getItem("lang");
let bodyF = document.getElementById("body");

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
