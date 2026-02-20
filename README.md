# 🛒 ShopHub - Modern React eCommerce Application

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.1.1-CA4245?logo=react-router)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive eCommerce web application built with React, featuring a glassmorphism UI design, smooth animations, and seamless cart management.

![ShopHub Preview](https://img.shields.io/badge/Live%20Demo-View%20Site-blue?style=for-the-badge)

---

## ✨ Features

- 🛍️ **Product Browsing** - Browse products from FakeStore API with real-time data
- 🏷️ **Category Filtering** - Filter products by category with elegant dropdown
- 🛒 **Cart Management** - Add/remove items with quantity tracking
- 💾 **Persistent Storage** - Cart data saved to localStorage
- 🎨 **Modern Glassmorphism UI** - Beautiful translucent design with backdrop blur effects
- ⚡ **Skeleton Loading** - Smooth loading animations for better UX
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🔄 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- 🌙 **Clean Typography** - Inter font family for professional appearance

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18.2.0 |
| **Build Tool** | Vite 7.3.1 |
| **Routing** | React Router 7.1.1 |
| **State Management** | React Context API |
| **Styling** | Vanilla CSS with CSS Variables |
| **Icons** | Emoji & Unicode |
| **API** | [FakeStore API](https://fakestoreapi.com/) |
| **Storage** | localStorage |

---

## 📸 Screenshots

### Home Page - Products Grid
![Products Page](https://via.placeholder.com/800x400/6366F1/FFFFFF?text=Products+Page+with+Glassmorphism+Cards)

### Shopping Cart
![Cart Page](https://via.placeholder.com/800x400/6366F1/FFFFFF?text=Cart+Page+with+Order+Summary)

### About Page
![About Page](https://via.placeholder.com/800x400/6366F1/FFFFFF?text=About+Page+with+Feature+Cards)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChittHirpara/e-commerce-project.git
   cd e-commerce-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
```

The production build will be created in the `dist/` folder.

---

## 🌐 Deployment

### Deploy to Netlify

1. **Install Netlify CLI (if not already installed)**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```


## 🗂️ Project Structure

```
e-commece/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation with cart badge
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management
│   ├── pages/
│   │   ├── Products.jsx        # Product listing with filters
│   │   ├── Cart.jsx            # Shopping cart page
│   │   └── About.jsx           # About page
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── style.css               # Global styles & animations
├── public/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

---

## 🔧 Key Components

### `CartContext.jsx`
Manages global cart state with:
- `addToCart(product)` - Add items or increment quantity
- `removeFromCart(productId)` - Remove items from cart
- `cartCount` - Total item count
- `cartTotal` - Total price calculation
- `localStorage` persistence

### `Products.jsx`
Features:
- API fetching with loading states
- Category filtering
- Skeleton loading animation
- Error handling with styled messages
- Add to cart functionality

### `Cart.jsx`
Features:
- Two-column layout (items + summary)
- Order summary card
- Empty cart state with CTA
- Item removal with confirmation

---

## 🎨 Design System

### Colors
```css
--primary: #6366F1 (Indigo)
--primary-dark: #4F46E5
--secondary: #8B5CF6 (Purple)
--accent: #EC4899 (Pink)
--background: #0F172A (Dark Blue)
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400-500 weight

### Shadows & Effects
- Glassmorphism: `backdrop-filter: blur(20px)`
- Card Shadows: `0 8px 32px rgba(2, 8, 20, 0.4)`
- Hover Transitions: `all 0.3s ease`

---

## 🌟 Key Features Explained

### Glassmorphism Design
The UI features modern glass-like translucent panels with:
- Backdrop blur effects
- Semi-transparent backgrounds
- Gradient overlays
- Subtle borders

### Skeleton Loading
Instead of spinners, we show:
- Animated shimmer cards
- Gradual content reveal
- Better perceived performance

### Responsive Design
Break points:
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (4 columns)

---

## 📱 PWA Ready

This app is structured to be easily converted to a Progressive Web App with:
- Responsive design
- Offline-ready architecture
- Fast loading times
- Mobile-optimized UI

---

## 🐛 Troubleshooting

### Common Issues

**API not loading?**
- Check internet connection
- FakeStore API might be temporarily down
- Check browser console for errors

**Cart not persisting?**
- Ensure localStorage is enabled
- Check browser privacy settings
- Clear cache and reload

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 18+

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) - For providing free e-commerce data
- [React](https://reactjs.org/) - For the amazing UI library
- [Vite](https://vitejs.dev/) - For the fast build tool
- [Inter Font](https://fonts.google.com/specimen/Inter) - For the beautiful typography

---

## 📞 Contact

**Chitt Hirpara**

- GitHub: [@ChittHirpara](https://github.com/ChittHirpara)
- Project Link: [https://github.com/ChittHirpara/e-commerce-project](https://github.com/ChittHirpara/e-commerce-project)

---

<p align="center">
  Made with ❤️ and ☕ by Chitt Hirpara
</p>
