let lan4 = localStorage.getItem("lang");
let translate4;
function getDataPage4(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    translate4 = data;
  })
  .catch((err) => console.error(err));
}
getDataPage4();
let messageDiv4 = document.getElementById("message4");

document
  .getElementById("lawyer")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();
    if (!validateForm4()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText4");
    submitButton.disabled = true;
    submitButton.textContent = translate4[lan4].Sending;
    try {
      const name = document.getElementById("name4").value;
      const email = document.getElementById("email4").value;
      const phone = document.getElementById("phone4").value;
      const fileInput = document.getElementById("file4");
      const position = document.getElementById("position4").value;
      const notes = document.getElementById("notes4").value;
      const linkedIn = document.getElementById("linkedIn4").value;

      let attachment = null;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // تحقق من حجم الملف (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`${translate4[lan4].max}`);
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
         name: "Website Form lawyer",
          email: "info@lexdesk360.com", // يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
           email: "info@lexdesk360.com",
            name: "lexdesk",
          },
        ],
        subject: `lawyer form ${name}`,
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
                            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>LinkedIn:</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${linkedIn}</td>
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
                LinkedIn: ${linkedIn}
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

      messageDiv4.innerHTML = `<p class='errorMassage' style="color: green;">${translate4[lan4].succes}</p>`;
      document.getElementById("lawyer").reset();
      const fileName44 = document.getElementById("fileName4");
      fileName44.textContent = "";
    } catch (error) {
      console.error("Full Error:", error);
      messageDiv4.innerHTML = `<p class='errorMassage' style="color: red;">${translate4[lan4].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate4[lan4].Sent;
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

const uploadBox4 = document.getElementById("iconUpload4");
const fileInput4 = document.getElementById("file4");
const fileName4 = document.getElementById("fileName4");

const allowedExtension4 = [".pdf", ".doc", ".docx"];
const allowedMimeTypes4 = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

uploadBox4.addEventListener("click", () => {
  fileInput4.click();
});

fileInput4.addEventListener("change", () => {
  if (fileInput4.files.length > 0) {
    const file = fileInput4.files[0];
    const fileName = file.name.toLowerCase();
    fileName4.textContent = fileName;
  } else {
    fileName4.textContent = "No file chosen";
  }
});

function validateForm4() {
  const name4 = document.getElementById("name4").value.trim();
  const email4 = document.getElementById("email4").value.trim();
  const phone4 = document.getElementById("phone4").value.trim();
  const position4 = document.getElementById("position4").value.trim();
  const linkedIn4 = document.getElementById("linkedIn4").value.trim();
  const file4 = document.getElementById("file4");
  const fileName4 = document.getElementById("fileName4");

  const errorname4 = document.getElementById("errorname4");
  const erroremail4 = document.getElementById("erroremail4");
  const errorphone4 = document.getElementById("errorphone4");
  const errorposition4 = document.getElementById("errorposition4");
  const errorlinkedIn4 = document.getElementById("errorlinkedIn4");
  const errorfile4 = document.getElementById("errorfile4");

  errorname4.innerHTML = "";
  erroremail4.innerHTML = "";
  errorphone4.innerHTML = "";
  errorposition4.innerHTML = "";
  errorlinkedIn4.innerHTML = "";
    errorfile4.innerHTML = "";

  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name4.length < 3) {
    errorname4.innerHTML = `<span style="color:red">${translate4[lan4].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email4)) {
    erroremail4.innerHTML = `<span style="color:red">${translate4[lan4].validation.email}</span>`;
    return false;
  }

  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone4)) {
    errorphone4.innerHTML = `<span style="color:red">${translate4[lan4].validation.phone}</span>`;
    return false;
  }
  if (file4.files.length === 0) {
    errorfile4.innerHTML = `<span style="color: red;">${translate4[lan4].file}</span>`;
    return false;
  }
  if (file4.files.length > 0) {
    const file = file4.files[0];
    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf("."));
    const fileType = file.type;

    // تحقق من الامتداد + الـ MIME
    if (
      !allowedExtension4.includes(fileExt) ||
      !allowedMimeTypes4.includes(fileType)
    ) {
      errorfile4.innerHTML = `<p  style="color: red;">${translate4[lan4].format}</p>`;
      file4.value = "";
      fileName4.textContent = "No file chosen";
      return false;
    }

    // تحقق من الحجم (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errorfile4.innerHTML = `<p  style="color: red;">${translate4[lan4].max}</p>`;
      file4.value = "";
      fileName4.textContent = "No file chosen";
      return false;
    }
    // لو الملف صحيح
    fileName4.textContent = fileName;
  }
  if (position4.length < 1) {
    errorposition4.innerHTML = `<span style="color:red">${translate4[lan4].validation.position}</span>`;
    return false;
  }
  // مثال: لازم الرسالة ما تقلش عن 10 حروف
  if (linkedIn4.length < 1) {
    errorlinkedIn4.innerHTML = `<span style="color:red">${translate4[lan4].validation.linkedIn}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
