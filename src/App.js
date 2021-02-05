import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import PurchaseSuccesful from "./components/Checkout/PurchaseSuccesful"
import Error404 from "./components/Error404/Error404"
import Footer from "./components/Footer/Footer"
import Contact from "./components/ContactForm/ContactForm"
import TermsBanner from './components/TermsBanner/TermsBanner';
import {Store} from "./Store/Store"
import {useState} from "react";


function App() {

  const [cart, setCart] = useState({items:[], cantidad: 0, precioTotal: 0});

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
                <ItemListContainer title="Productos Destacados" />
                <TermsBanner />
            </Route>
            <Route exact path="/camisas">
              <ItemListContainer title="Camisas Bordadas"/>
            </Route>
            <Route exact path="/accesorios">
              <ItemListContainer title="Accesorios Bordados"/>
            </Route>
            <Route exact path="/totebags">
              <ItemListContainer title="Tote Bags Bordadas"/>
            </Route>
            <Route path={["/camisas/:id", "/accesorios/:id", "/totebags/:id" ]}>
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>            
            <Route path="/purchase-succesful">
              <PurchaseSuccesful />
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
