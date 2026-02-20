function About() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>
        Welcome to our Mini eCommerce Application! This app was built as a learning
        project to demonstrate modern React development practices.
      </p>
      
      <h3>Features</h3>
      <ul>
        <li>Browse products from the FakeStore API</li>
        <li>Filter products by category</li>
        <li>Add items to your shopping cart</li>
        <li>Cart persistence using localStorage</li>
        <li>Responsive design</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li><strong>React</strong> - UI library</li>
        <li><strong>React Router</strong> - Navigation</li>
        <li><strong>Context API</strong> - State management</li>
        <li><strong>FakeStore API</strong> - Product data</li>
        <li><strong>localStorage</strong> - Data persistence</li>
      </ul>

      <h3>About FakeStore API</h3>
      <p>
        FakeStore API is a free online REST API that provides fake e-commerce data
        for testing and prototyping. It returns products with realistic data
        including images, prices, descriptions, and categories.
      </p>
    </div>
  )
}

export default About
