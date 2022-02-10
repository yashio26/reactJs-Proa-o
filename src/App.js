import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import ProductDetail from './views/ProductDetail/ProductDetail';
import Electronics from './views/Electronics/Electronics';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/item/:id' element={<ProductDetail />}/>
          <Route path='/category' element={<Electronics />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
