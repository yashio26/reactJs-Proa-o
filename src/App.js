import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Electronics from './views/Electronics/Electronics';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/category' element={<Electronics />}/>
          <Route path='/item/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={ItemCount}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
