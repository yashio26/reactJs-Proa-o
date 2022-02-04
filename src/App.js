import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Lo destacado de la semana</h1>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
