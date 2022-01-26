import './App.css';
import NavBar from "./components/NavBar";
import CardWidget from "./components/CardComponent/CardComponent";
import JakePark from "./images/jakePark.png"
import JakeParkSkin from "./images/jakeParkSkin.png"

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Lo destacado de la semana</h1>
      <div className="Articulos">
        <CardWidget 
          name="Jake Park"
          description="Chaqueta verde"
          img={JakePark}
        />
        <CardWidget 
          name="Jake Saqueador de Vigo"
          description="Chaqueta verde"
          img={JakeParkSkin}
        />
        <CardWidget 
          name="Celulas auricas"
          description="1000 celulas auricas"
          img={JakePark}
        />
      </div>
    </div>
  );
}

export default App;
