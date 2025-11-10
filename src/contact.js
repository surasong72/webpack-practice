// contact.js

export default function loadContact() {
  const content = document.querySelector("#content");

  content.innerHTML = `
    <div class="contact-page">
      <h2 class="contact-title">Contact Us</h2>

      <div class="contact-container">
        <div class="contact-card">
          <h3>📍 Address</h3>
          <p>123 Delicious Street, Food City, FC 45678</p>
        </div>

        <div class="contact-card">
          <h3>📞 Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>

        <div class="contact-card">
          <h3>✉️ Email</h3>
          <p>info@myrestaurant.com</p>
        </div>

        <div class="contact-card">
          <h3>🕒 Opening Hours</h3>
          <p>Mon-Sun: 10:00 AM - 10:00 PM</p>
        </div>
      </div>
    </div>
  `;
}
