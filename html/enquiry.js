const form = document.getElementById('enquiryForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const type = document.getElementById('enquiry-type').value;
  const quantity = document.getElementById('quantity').value || 1;

  let reply = `Hi ${name}, thank you for your enquiry. `;

  switch(type) {
    case "product":
      reply += `Estimated cost: R${quantity * 120}. We will contact you at ${email} for availability and customization.`;
      break;
    case "service":
      reply += `We will contact you at ${email} regarding our services and availability.`;
      break;
    case "volunteer":
      reply += `Thank you for your interest in volunteering. We'll reach out to ${email}.`;
      break;
    case "sponsor":
      reply += `Thank you for considering sponsorship. We'll contact ${email} with more information.`;
      break;
    default:
      reply += `We will contact you soon regarding your enquiry.`;
  }

  responseDiv.innerHTML = reply;
  responseDiv.style.display = 'block';
  form.reset();

  // Hide the response after 5 seconds
  setTimeout(() => {
    responseDiv.style.display = 'none';
    responseDiv.innerHTML = '';
  }, 5000);
});

