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


function App() {
  return (
    <BrowserRouter>
        <Navbar />
         <Switch>
          <Route exact path="/">
              <Hero />
          </Route>
          <Route path="/featured-products">
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
    
  );
}

export default App;
