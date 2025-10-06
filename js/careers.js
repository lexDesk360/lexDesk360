let lan5 = localStorage.getItem("lang");

let translate5;
function getDataPage5(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    translate5 = data;
  })
  .catch((err) => console.error(err));
}
getDataPage5();
let messageDiv5 = document.getElementById("message5");

document
  .getElementById("careers")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();
    if (!validateForm5()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText5");
    submitButton.disabled = true;
    submitButton.textContent = translate5[lan5].Sending;
    try {
      const name = document.getElementById("name5").value;
      const email = document.getElementById("email5").value;
      const phone = document.getElementById("phone5").value;
      const fileInput = document.getElementById("file5");
      const position = document.getElementById("position5").value;
      const notes = document.getElementById("notes5").value;
      const linkedIn = document.getElementById("linkedIn5").value;

      let attachment = null;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // تحقق من حجم الملف (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`${translate5[lan5].max}`);
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
          name: "Website Form carrers",
          email: "wessamtarek438@gmail.com", // يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
            email: "info@lexdesk360.com",
            name: "lexdesk",
          },
        ],
        subject: `careers form ${name}`,
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
        throw new Error(responseData.message || `${translate5[lan5].max}`);
      }

      messageDiv5.innerHTML = `<p class='errorMassage' style="color: green;">${translate5[lan5].succes}</p>`;
      document.getElementById("careers").reset();
      const fileName55 = document.getElementById("fileName5");
      fileName55.textContent = "";
    } catch (error) {
      messageDiv5.innerHTML = `<p class='errorMassage' style="color: red;">${translate5[lan5].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate5[lan5].Sent;
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

const uploadBox5 = document.getElementById("iconUpload5");
const fileInput5 = document.getElementById("file5");
const fileName5 = document.getElementById("fileName5");

// الامتدادات المسموحة
const allowedExtensions5 = [".pdf", ".doc", ".docx"];
const allowedMimeTypes5 = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

uploadBox5.addEventListener("click", () => {
  fileInput5.click();
});

fileInput5.addEventListener("change", () => {
  if (fileInput5.files.length > 0) {
    const file = fileInput5.files[0];
    const fileName = file.name.toLowerCase();
    fileName5.textContent = fileName;
  } else {
    fileName5.textContent = "No file chosen";
  }
});

function validateForm5() {
  const name5 = document.getElementById("name5").value.trim();
  const email5 = document.getElementById("email5").value.trim();
  const phone5 = document.getElementById("phone5").value.trim();
  const position5 = document.getElementById("position5").value.trim();
  const linkedIn5 = document.getElementById("linkedIn5").value.trim();
  const file5 = document.getElementById("file5");
  const fileName5 = document.getElementById("fileName5");

  const errorname5 = document.getElementById("errorname5");
  const erroremail5 = document.getElementById("erroremail5");
  const errorphone5 = document.getElementById("errorphone5");
  const errorposition5 = document.getElementById("errorposition5");
  const errorlinkedIn5 = document.getElementById("errorlinkedIn5");
  const errorfile5 = document.getElementById("errorfile5");

  errorname5.innerHTML = "";
  erroremail5.innerHTML = "";
  errorphone5.innerHTML = "";
  errorposition5.innerHTML = "";
  errorlinkedIn5.innerHTML = "";
  errorfile5.innerHTML = "";

  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name5.length < 3) {
    errorname5.innerHTML = `<span style="color:red">${translate5[lan5].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email5)) {
    erroremail5.innerHTML = `<span style="color:red">${translate5[lan5].validation.email}</span>`;
    return false;
  }

  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone5)) {
    errorphone5.innerHTML = `<span style="color:red">${translate5[lan5].validation.phone}</span>`;
    return false;
  }
  if (file5.files.length === 0) {
    errorfile5.innerHTML = `<span style="color: red;">${translate5[lan5].file}</span>`;
    return false;
  }
  if (file5.files.length > 0) {
    const file = file5.files[0];
    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf("."));
    const fileType = file.type;

    // تحقق من الامتداد + الـ MIME
    if (
      !allowedExtensions5.includes(fileExt) ||
      !allowedMimeTypes5.includes(fileType)
    ) {
      errorfile5.innerHTML = `<p  style="color: red;">${translate5[lan5].format}</p>`;
      file5.value = "";
      fileName5.textContent = "No file chosen";
      return false;
    }

    // تحقق من الحجم (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errorfile5.innerHTML = `<p  style="color: red;">${translate5[lan5].max}</p>`;
      file5.value = "";
      fileName5.textContent = "No file chosen";
      return false;
    }
    // لو الملف صحيح
    fileName5.textContent = fileName;
  }
  if (position5.length < 1) {
    errorposition5.innerHTML = `<span style="color:red">${translate5[lan5].validation.position}</span>`;
    return false;
  }
  // مثال: لازم الرسالة ما تقلش عن 10 حروف
  if (linkedIn5.length < 1) {
    errorlinkedIn5.innerHTML = `<span style="color:red">${translate5[lan5].validation.linkedIn}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
