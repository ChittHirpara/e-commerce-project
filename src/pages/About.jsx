function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h2>About ShopHub</h2>
        <p>A modern eCommerce experience built with React and FakeStore API</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>
            <span className="about-card-icon">✨</span>
            Features
          </h3>
          <ul>
            <li>Browse products from FakeStore API</li>
            <li>Filter products by category</li>
            <li>Add items to shopping cart</li>
            <li>Cart persistence with localStorage</li>
            <li>Responsive design for all devices</li>
            <li>Modern glassmorphism UI</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>
            <span className="about-card-icon">🛠️</span>
            Technologies
          </h3>
          <ul>
            <li>React 18 with Hooks</li>
            <li>React Router v7</li>
            <li>Context API for state</li>
            <li>FakeStore API</li>
            <li>localStorage persistence</li>
            <li>Modern CSS with animations</li>
          </ul>
        </div>

        <div className="about-card" style={{ gridColumn: "span 2" }}>
          <h3>
            <span className="about-card-icon">📡</span>
            About FakeStore API
          </h3>
          <p>
            FakeStore API is a free online REST API that provides realistic fake
            e-commerce data for testing and prototyping. It returns products
            with complete data including images, prices, descriptions, and
            categories - perfect for building demo applications like this one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
