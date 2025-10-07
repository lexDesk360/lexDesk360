let lan1 = localStorage.getItem("lang");
let translate1;
function getDataPage1(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    translate1 = data;
  })
  .catch((err) => console.error(err));
}
getDataPage1();
let messageDiv1 = document.getElementById("message1");

document
  .getElementById("Counsel")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validateForm1()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText1");
    submitButton.disabled = true;
    submitButton.textContent = translate1[lan1].Sending;
    try {
      const name = document.getElementById("name1").value;
      const email = document.getElementById("email1").value;
      const phone = document.getElementById("phone1").value;
      const fileInput = document.getElementById("file1");
      const position = document.getElementById("position1").value;
      const notes = document.getElementById("notes1").value;
      const linkedIn = document.getElementById("linkedIn1").value;

      let attachment = null;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // تحقق من حجم الملف (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`${translate1[lan1].max}`);
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
          "name": "LexDesk360",
          "email": "lexdesk360@gmail.com",

        },
        to: [{
          "email": "info@lexdesk360.com",
          "name": "LexDesk"
        }],
        subject: `Counsel form ${name}`,
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

      messageDiv1.innerHTML = `<p class='errorMassage' style="color: green;">${translate1[lan1].succes}</p>`;
      document.getElementById("Counsel").reset();
      const fileName11 = document.getElementById("fileName1");
      fileName11.textContent = "";
    } catch (error) {
      console.error("Full Error:", error);
      messageDiv1.innerHTML = `<p class='errorMassage' style="color: red;">${translate1[lan1].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate1[lan1].Sent;
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

const uploadBox1 = document.getElementById("iconUpload1");
const fileInput1 = document.getElementById("file1");
const fileName1 = document.getElementById("fileName1");

// الامتدادات المسموحة
const allowedExtensions1 = [".pdf", ".doc", ".docx"];
const allowedMimeTypes1 = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
fileInput1.addEventListener("change", () => {
  if (fileInput1.files.length > 0) {
    const file = fileInput1.files[0];
    const fileName = file.name.toLowerCase();
    fileName1.textContent = fileName;
  } else {
    fileName1.textContent = "No file chosen";
  }
});

uploadBox1.addEventListener("click", () => {
  fileInput1.click();
});

function validateForm1() {
  const name1 = document.getElementById("name1").value.trim();
  const email1 = document.getElementById("email1").value.trim();
  const phone1 = document.getElementById("phone1").value.trim();
  const file1 = document.getElementById("file1");
  const fileName1 = document.getElementById("fileName1");

  const position1 = document.getElementById("position1").value.trim();
  const linkedIn1 = document.getElementById("linkedIn1").value.trim();

  const errorname1 = document.getElementById("errorname1");
  const erroremail1 = document.getElementById("erroremail1");
  const errorphone1 = document.getElementById("errorphone1");
  const errorfile1 = document.getElementById("errorfile1");

  const errorposition1 = document.getElementById("errorposition1");
  const errorlinkedIn1 = document.getElementById("errorlinkedIn1");

  errorname1.innerHTML = "";
  erroremail1.innerHTML = "";
  errorphone1.innerHTML = "";
  errorfile1.innerHTML = "";
  errorposition1.innerHTML = "";
  errorlinkedIn1.innerHTML = "";
  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name1.length < 3) {
    errorname1.innerHTML = `<span style="color:red">${translate1[lan1].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email1)) {
    erroremail1.innerHTML = `<span style="color:red">${translate1[lan1].validation.email}</span>`;
    return false;
  }

  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone1)) {
    errorphone1.innerHTML = `<span style="color:red">${translate1[lan1].validation.phone}</span>`;
    return false;
  }
  if (file1.files.length === 0) {
    errorfile1.innerHTML = `<span style="color: red;">${translate1[lan1].file}</span>`;
    return false;
  }
  if (file1.files.length > 0) {
    const file = file1.files[0];
    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf("."));
    const fileType = file.type;

    // تحقق من الامتداد + الـ MIME
    if (
      !allowedExtensions1.includes(fileExt) ||
      !allowedMimeTypes1.includes(fileType)
    ) {
      errorfile1.innerHTML = `<p  style="color: red;">${translate1[lan1].format}</p>`;
      file1.value = "";
      fileName1.textContent = "No file chosen";
      return false;
    }

    // تحقق من الحجم (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errorfile1.innerHTML = `<p  style="color: red;">${translate1[lan1].max}</p>`;
      file1.value = "";
      fileName1.textContent = "No file chosen";
      return false;
    }
    // لو الملف صحيح
    fileName1.textContent = fileName;
  }
  if (position1.length < 1) {
    errorposition1.innerHTML = `<span style="color:red">${translate1[lan1].validation.position}</span>`;
    return false;
  }
  // مثال: لازم الرسالة ما تقلش عن 10 حروف
  if (linkedIn1.length < 1) {
    errorlinkedIn1.innerHTML = `<span style="color:red">${translate1[lan1].validation.linkedIn}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
