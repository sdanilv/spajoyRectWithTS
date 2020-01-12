import {reducer as formReducer} from "redux-form";
import shopReducer  from "./Shop/ShopReducer"
import {combineReducers, createStore} from "redux";

export default createStore(combineReducers({form: formReducer, shop: shopReducer}));
