import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import About from "./views/About/About";
import ProductDetail from './views/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Lo destacado de la semana</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/item/:id' element={<ProductDetail />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
