import React from 'react';
import logo from './logo.svg';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/store.js"

const App: React.FC = () => {
  return (
        <Provider store={store}>
                <Header/>
                <Shop/>
                <Footer/>
        </ Provider>
    );
}

export default App;
