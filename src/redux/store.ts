import {reducer as formReducer} from "redux-form";
import shopReducer  from "./Shop/ShopReducer"
import {combineReducers, createStore} from "redux";

export default createStore(combineReducers({form: formReducer, shop: shopReducer}),  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());
