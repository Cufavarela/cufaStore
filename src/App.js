import NavBar from "./components/header/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/body/itemList/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from "./components/body/cart/Cart";
import { Contact } from "./components/body/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
