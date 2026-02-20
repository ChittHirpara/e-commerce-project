import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);

      const uniqueCategories = [...new Set(data.map((p) => p.category))];
      setCategories(["All", ...uniqueCategories]);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="products-page">
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Discover amazing products at great prices</p>
        </div>
        <div className="skeleton-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-price"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-page">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3 className="error-title">Oops! Something went wrong</h3>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="filter-section">
        <label>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-content">
              <span className="product-category">{product.category}</span>
              <h3 className="product-title">
                {product.title.length > 50
                  ? product.title.substring(0, 50) + "..."
                  : product.title}
              </h3>
              <div className="product-footer">
                <span className="product-price">
                  {product.price.toFixed(2)}
                </span>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
