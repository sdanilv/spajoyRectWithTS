import React from 'react';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/store"

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
