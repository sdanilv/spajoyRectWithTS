import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import shopReducer  from "./Shop/ShopReducer"
import { init } from '@rematch/core'


// export default createStore(combineReducers({form: formReducer, shop: shopReducer}));
export default  init({
    models: {
        shop: shopReducer
    },
    redux: {
        reducers: {
            form: formReducer
        }
    },
});