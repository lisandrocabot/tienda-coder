import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"


function App() {
  return (
    <BrowserRouter>
        <Navbar />
         <Switch>
          <Route exact path="/">
              <Hero />
          </Route>
          <Route path="/featured-products/">
            <ItemListContainer />
          </Route>
          <Route path="/detail/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
         </Switch>
         
        
    </BrowserRouter>
    
  );
}

export default App;
