document.addEventListener("DOMContentLoaded", () => {
  const emailTo = "jaspervanniekerk1111@gmail.com";
  const contactForm = document.getElementById("contactForm");
  const statusMsg = document.getElementById("formStatus");

  const encode = (text) => encodeURIComponent(text.trim());

  // Generate links for different email platforms
  const makeMailLink = {
    default: (to, subject, body) => `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`,
    gmail: (to, subject, body) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encode(to)}&su=${encode(subject)}&body=${encode(body)}`,
    outlook: (to, subject, body) => `https://outlook.office.com/mail/deeplink/compose?to=${encode(to)}&subject=${encode(subject)}&body=${encode(body)}`
  };

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.userName.value;
    const email = contactForm.userEmail.value;
    const message = contactForm.userMessage.value;
    const sendType = contactForm.querySelector("input[name='sendType']:checked").value;

    const subject = `New message from ${name}`;
    const body = `
Hi SweetCrumbs Bakery Team,

${message}

---
From: ${name}
Email: ${email}
`.trim();

    const mailLink = makeMailLink[sendType](emailTo, subject, body);

    // Open appropriate mail client
    if (sendType === "default") {
      window.location.href = mailLink;
    } else {
      window.open(mailLink, "_blank", "noreferrer");
    }

    statusMsg.textContent = "Your email draft has been opened — please review and send!";
    contactForm.reset();
  });
});