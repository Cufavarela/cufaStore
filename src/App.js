import NavBar from "./components/header/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/body/itemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="CufaStore in progress" />
    </div>
  );
}

export default App;
