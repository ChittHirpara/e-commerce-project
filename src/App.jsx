import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
