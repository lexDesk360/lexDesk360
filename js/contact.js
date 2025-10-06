let lan = localStorage.getItem("lang");
let transl;
function getDataCon(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    transl = data;
  })
  .catch((err) => console.error(err));
}
getDataCon();
document
  .getElementById("contact-us")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();

    if (!validateForm()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText");
    const messageDiv = document.getElementById("messageTxt");
    submitButton.disabled = true;
    submitButton.textContent = transl[lan].Sending;

    try {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const emailData = {
        sender: {
         name: "Website Form contact",
          email: "info@lexdesk360.com",// يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
           email: "info@lexdesk360.com",
            name: "lexdesk",
          },
        ],
        subject: `contact-us form ${name}`,
        htmlContent: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">New Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Name:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                         <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone Number:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                        </tr>
                         <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Subject:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
                        </tr>
                         <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Message:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
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
                Name: ${name}
                Email: ${email}
                Phone Number: ${phone}
                Subject: ${subject}
                Message: ${message}
                Submission Time: ${new Date().toLocaleString()}
            `,
      };

      console.log("Sending email data:", emailData);

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

      messageDiv.innerHTML = `<p class='errorMassage' style="color: green;">${transl[lan].succes}</p>`;
      document.getElementById("contact-us").reset();
    } catch (error) {
      console.error("Full Error:", error);
      messageDiv.innerHTML = `<p class='errorMassage' style="color: red;">${transl[lan].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = transl[lan].SentM;
    }
  });

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorPhone = document.getElementById("errorPhone");
  const errorSubject = document.getElementById("errorSubject");
  const errorMessage = document.getElementById("errorMessage");

  errorName.innerHTML = "";
  errorEmail.innerHTML = "";
  errorPhone.innerHTML = "";
  errorSubject.innerHTML = "";
  errorMessage.innerHTML = "";
  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name.length < 3) {
    errorName.innerHTML = `<span style="color:red">${transl[lan].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEmail.innerHTML = `<span style="color:red">${transl[lan].validation.email}</span>`;
    return false;
  }

  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    errorPhone.innerHTML = `<span style="color:red">${transl[lan].validation.phone}</span>`;
    return false;
  }
  if (subject.length < 10) {
    errorSubject.innerHTML = `<span style="color:red">${transl[lan].validation.subject}</span>`;
    return false;
  }
  // مثال: لازم الرسالة ما تقلش عن 10 حروف
  if (message.length < 10) {
    errorMessage.innerHTML = `<span style="color:red">${transl[lan].validation.message}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
