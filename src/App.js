import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Lo destacado de la semana</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;
