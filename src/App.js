import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Category from './views/Category/Category';
import Cart from './views/Cart/Cart';
import Header from './components/Header/Header';
import { ProductsProvider } from './ProductsContext';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/categoria/:categoria' element={<Category />}/>
            <Route path='/item/:id' element={<ProductDetail />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
      </ProductsProvider>
    </Router>
  );
}

export default App;
