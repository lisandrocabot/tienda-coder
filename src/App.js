import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import Error404 from "./components/Error404/index"
import Footer from "./components/Footer/Footer"
import Contact from "./components/ContactForm/index"
import TermsBanner from './components/TermsBanner/TermsBanner';
import {Store} from "./store/Store"
import {useState} from "react";


function App() {

  const [cart, setCart] = useState({items:[], cantidad: 0});
  
  return (
    
    <Store.Provider 
      value={[
              cart, 
              setCart]}>

      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
                <Hero />          
                <ItemListContainer />
                <TermsBanner />
            </Route>
            <Route path="/camisas">
              <ItemListContainer />
            </Route>
            <Route path="/accesorios">
              <ItemListContainer />
            </Route>
            <Route path="/detail/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>         
        <Footer />   
      </BrowserRouter>
    </Store.Provider>
    
  );
}

export default App;
