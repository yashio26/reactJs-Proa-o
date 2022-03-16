import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
//React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Category from './views/Category/Category';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout';
import About from './views/About/About';
import Error404 from './views/Error404/Error404';
//Context
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
            <Route path='/carrito' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/sobre-nosotros' element={<About />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </div>
      </ProductsProvider>
    </Router>
  );
}

export default App;
