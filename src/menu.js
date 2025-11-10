// menu.js

export default function loadMenu() {
  const content = document.querySelector("#content");

  content.innerHTML = `
    <div class="menu-page">
      <h2 class="menu-title">Our Menu</h2>

      <div class="menu-container">
        <div class="menu-card">
          <h3>🍕 Pizza Margherita</h3>
          <p>Fresh basil, tomato sauce, mozzarella.</p>
          <span class="price">$12</span>
        </div>

        <div class="menu-card">
          <h3>🔥 BBQ Chicken Pizza</h3>
          <p>Smokey BBQ sauce, grilled chicken, onion.</p>
          <span class="price">$15</span>
        </div>

        <div class="menu-card">
          <h3>🥦 Veggie Delight</h3>
          <p>Bell pepper, olive, mushroom, cheese.</p>
          <span class="price">$10</span>
        </div>
      </div>
    </div>
  `;
}
