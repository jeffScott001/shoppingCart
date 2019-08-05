import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Navigater from "./components/layout/Navigater";
import Shoes from "./components/body/shoes";
import Cart from "./components/body/Cart";
import ShoeDetails from "./components/body/ShoeDetails";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <div className="inherit">
            <div className="fixed">
              <Header />
              <Navigater />
            </div>
          </div>
          <Route exact path="/" component={Shoes} />

          <Cart />
          <Route exact path="/shoes" component={ShoeDetails} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
