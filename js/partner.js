let lan3 = localStorage.getItem("lang");
let translate3;
function getDataPage3(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    translate3 = data;
  })
  .catch((err) => console.error(err));
}
getDataPage3();
let messageDiv3 = document.getElementById("message3");

document
  .getElementById("partner")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();
    if (!validateForm3()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText3");
    submitButton.disabled = true;
    submitButton.textContent = translate3[lan3].Sending;
    try {
      const name = document.getElementById("name3").value;
      const email = document.getElementById("email3").value;
      const phone = document.getElementById("phone3").value;
      const fileInput = document.getElementById("file3");
      const position = document.getElementById("position3").value;
      const notes = document.getElementById("notes3").value;

      let attachment = null;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // تحقق من حجم الملف (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`${translate3[lan3].max}`);
        }
        const base64File = await toBase64(file);
        attachment = [
          {
            name: file.name,
            content: base64File.split(",")[1],
          },
        ];
      }

      const emailData = {
        sender: {
        name: "Website Form partner",
          email: "info@lexdesk360.com", // يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
            email: "info@lexdesk360.com",
            name: "lexdesk",
          },
        ],
        subject: `partner form ${name}`,
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
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Position:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${position}</td>
                        </tr>
                         
                         <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Notes:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${notes}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>File:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${
                              fileInput.files[0]
                                ? fileInput.files[0].name
                                : "No file attached"
                            }</td>
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
                Position: ${position}
                Notes: ${notes}
                File: ${
                  fileInput.files[0]
                    ? fileInput.files[0].name
                    : "No file attached"
                }
                Submission Time: ${new Date().toLocaleString()}
            `,
        attachment: attachment,
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

      messageDiv3.innerHTML = `<p class='errorMassage' style="color: green;">${translate3[lan3].succes}</p>`;
      document.getElementById("partner").reset();
      const fileName33 = document.getElementById("fileName3");
      fileName33.textContent = "";
    } catch (error) {
      console.error("Full Error:", error);
      messageDiv3.innerHTML = `<p class='errorMassage' style="color: red;">${translate3[lan3].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate3[lan3].Sent;
    }
  });

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const uploadBox3 = document.getElementById("iconUpload3");
const fileInput3 = document.getElementById("file3");
const fileName3 = document.getElementById("fileName3");

// عند الضغط على الديف، نفتح input file
const allowedExtensions3 = [".pdf", ".doc", ".docx"];
const allowedMimeTypes3 = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

uploadBox3.addEventListener("click", () => {
  fileInput3.click();
});

fileInput3.addEventListener("change", () => {
  if (fileInput3.files.length > 0) {
    const file = fileInput3.files[0];
    const fileName = file.name.toLowerCase();
    fileName3.textContent = fileName;
  } else {
    fileName3.textContent = "No file chosen";
  }
});

function validateForm3() {
  const name3 = document.getElementById("name3").value.trim();
  const email3 = document.getElementById("email3").value.trim();
  const phone3 = document.getElementById("phone3").value.trim();
  const position3 = document.getElementById("position3").value.trim();
  const file3 = document.getElementById("file3");
  const fileName3 = document.getElementById("fileName3");

  const errorname3 = document.getElementById("errorname3");
  const erroremail3 = document.getElementById("erroremail3");
  const errorphone3 = document.getElementById("errorphone3");
  const errorposition3 = document.getElementById("errorposition3");
  const errorfile3 = document.getElementById("errorfile3");

  errorname3.innerHTML = "";
  erroremail3.innerHTML = "";
  errorphone3.innerHTML = "";
  errorposition3.innerHTML = "";
  errorfile3.innerHTML = "";

  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name3.length < 3) {
    errorname3.innerHTML = `<span style="color:red">${translate3[lan3].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email3)) {
    erroremail3.innerHTML = `<span style="color:red">${translate3[lan3].validation.email}</span>`;
    return false;
  }

  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone3)) {
    errorphone3.innerHTML = `<span style="color:red">${translate3[lan3].validation.phone}</span>`;
    return false;
  }
  if (file3.files.length === 0) {
    errorfile3.innerHTML = `<span style="color: red;">${translate3[lan3].file}</span>`;
    return false;
  }
  if (file3.files.length > 0) {
    const file = file3.files[0];
    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf("."));
    const fileType = file.type;

    // تحقق من الامتداد + الـ MIME
    if (
      !allowedExtensions3.includes(fileExt) ||
      !allowedMimeTypes3.includes(fileType)
    ) {
      errorfile3.innerHTML = `<p  style="color: red;">${translate3[lan3].format}</p>`;
      file3.value = "";
      fileName3.textContent = "No file chosen";
      return false;
    }

    // تحقق من الحجم (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errorfile3.innerHTML = `<p  style="color: red;">${translate3[lan3].max}</p>`;
      file3.value = "";
      fileName3.textContent = "No file chosen";
      return false;
    }
    // لو الملف صحيح
    fileName3.textContent = fileName;
  }
  if (position3.length < 1) {
    errorposition3.innerHTML = `<span style="color:red">${translate3[lan3].validation.position}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
