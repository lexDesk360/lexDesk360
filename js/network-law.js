let lan2 = localStorage.getItem("lang");
let translate2;
function getDataPage2(){
fetch("./assets/json/validation.json")
  .then((res) => res.json())
  .then((data) => {
    translate2 = data;
  })
  .catch((err) => console.error(err));
}
getDataPage2();

let messageDiv2 = document.getElementById("message2");

document
  .getElementById("network-law")
  .addEventListener("submit", async function (e) {
    console.log(e);
    e.preventDefault();
    if (!validateForm2()) {
      return; // لو فيه خطأ مش هيبعت
    }
    const submitButton = document.getElementById("submitText2");
    submitButton.disabled = true;
    submitButton.textContent = translate2[lan2].Sending;
    try {
      const name = document.getElementById("name2").value;
      const email = document.getElementById("email2").value;
      const phone = document.getElementById("phone2").value;
      const fileInput = document.getElementById("file2");
      const position = document.getElementById("position2").value;
      const notes = document.getElementById("notes2").value;

      let attachment = null;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // تحقق من حجم الملف (5MB كحد أقصى)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`${translate2[lan2].max}`);
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
         name: "Website Form network firm ",
          email: "wessamtarek438@gmail.com"  // يجب أن يكون مُتحققاً عليه
        },
        to: [
          {
             email: " privacy@lexdesk360.com",
            name: "lexdesk",
          },
        ],
        subject: `network-law form ${name}`,
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

      messageDiv2.innerHTML = `<p class='errorMassage' style="color: green;">${translate2[lan2].succes}</p>`;
      document.getElementById("network-law").reset();
      const fileName22 = document.getElementById("fileName2");
      fileName22.textContent = "";
    } catch (error) {
      console.error("Full Error:", error);
      messageDiv2.innerHTML = `<p class='errorMassage' style="color: red;">${translate2[lan2].fail}</p>`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate2[lan2].Sent;
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

const uploadBox2 = document.getElementById("iconUpload2");
const fileInput2 = document.getElementById("file2");
const fileName2 = document.getElementById("fileName2");

// عند الضغط على الديف، نفتح input file
const allowedExtensions2 = [".pdf", ".doc", ".docx"];
const allowedMimeTypes2 = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

uploadBox2.addEventListener("click", () => {
  fileInput2.click();
});
fileInput2.addEventListener("change", () => {
  if (fileInput2.files.length > 0) {
    const file = fileInput2.files[0];
    const fileName = file.name.toLowerCase();
    fileName2.textContent = fileName;
  } else {
    fileName2.textContent = "No file chosen";
  }
});
function validateForm2() {
  const name2 = document.getElementById("name2").value.trim();
  const email2 = document.getElementById("email2").value.trim();
  const phone2 = document.getElementById("phone2").value.trim();
  const file2 = document.getElementById("file2");
    const fileName2 = document.getElementById("fileName2");

  const position2 = document.getElementById("position2").value.trim();

  const errorname2 = document.getElementById("errorname2");
  const erroremail2 = document.getElementById("erroremail2");
  const errorphone2 = document.getElementById("errorphone2");
  const errorfile2 = document.getElementById("errorfile2");
  const errorposition2 = document.getElementById("errorposition2");

  errorname2.innerHTML = "";
  erroremail2.innerHTML = "";
  errorphone2.innerHTML = "";
  errorfile2.innerHTML = "";
  errorposition2.innerHTML = "";
  // مثال: الاسم لازم يكون أكتر من 3 حروف
  if (name2.length < 3) {
    errorname2.innerHTML = `<span style="color:red">${translate2[lan2].validation.name}</span>`;
    return false;
  }

  // مثال: تحقق من الإيميل بشكل أفضل
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email2)) {
    erroremail2.innerHTML = `<span style="color:red">${translate2[lan2].validation.email}</span>`;
    return false;
  }
  // مثال: التليفون لازم يكون بين 10 و 15 رقم
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone2)) {
    errorphone2.innerHTML = `<span style="color:red">${translate2[lan2].validation.phone}</span>`;
    return false;
  }
  console.log(file2);
  if (file2.files.length === 0) {
    errorfile2.innerHTML = `<span style="color: red;">${translate2[lan2].file}</span>`;
    return false;
  }
  if (file2.files.length > 0) {
    const file = file2.files[0];
    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf("."));
    const fileType = file.type;

    // تحقق من الامتداد + الـ MIME
    if (
      !allowedExtensions2.includes(fileExt) ||
      !allowedMimeTypes2.includes(fileType)
    ) {
      errorfile2.innerHTML = `<p  style="color: red;">${translate2[lan2].format}</p>`;
      file2.value = "";
      fileName2.textContent = "No file chosen";
      return false;
    }

    // تحقق من الحجم (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errorfile2.innerHTML = `<p  style="color: red;">${translate2[lan2].max}</p>`;
      file2.value = "";
      fileName2.textContent = "No file chosen";
      return false;
    }
    // لو الملف صحيح
    fileName2.textContent = fileName;
  }
  if (position2.length < 1) {
    errorposition2.innerHTML = `<span style="color:red">${translate2[lan2].validation.position}</span>`;
    return false;
  }

  // لو كله تمام
  return true;
}
