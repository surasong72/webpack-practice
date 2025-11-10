// home.js

export default function loadHome() {
  const content = document.querySelector("#content");

  content.innerHTML = `
    <div class="home-page">
      <div class="home-hero">
        <h1>Welcome to Our Restaurant!</h1>
        <p>Experience the best flavors in a cozy and inviting atmosphere. Fresh ingredients, delicious dishes, and unforgettable moments await you.</p>
      </div>

      <div class="home-container">
        <div class="home-section">
          <h2>About Us</h2>
          <p>We are passionate about creating delicious meals made with love and care. Come and taste the difference!</p>
        </div>

        <div class="home-section">
          <h2>Specials</h2>
          <p>Check out our daily specials and seasonal dishes crafted by our chefs with fresh ingredients.</p>
        </div>
      </div>
    </div>
  `;
}
