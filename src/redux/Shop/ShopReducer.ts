import mass from "../../images/mass.jpg"
import spa from "../../images/spa.jpg"
import salt from "../../images/salt.jpg"
import {IFilter, IShopState} from "./ShopInterface";
import {AnyAction, Reducer} from "redux";

enum actionType {
    CHANGE_FILTERS = "SHOP_CHANGE_FILTERS",
    CHANGE_PRICE_FILTER = "SHOP_CHANGE_PRICE_FILTER"
}

const initialState: IShopState = {
    filter: {
        price: {
            min: 0,
            max: 1500
        },
        town: "empty",
        gender: "empty",
        category: "empty"
    },

    products: [
        {
            town: "Київ", gender: "Для неї", category: "СПА",
            price: 600, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa,
            describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Київ", gender: "Для неї", category: "Масаж",
            price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Київ", gender: "Для неї", category: "Масаж",
            price: 200, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Київ", gender: "Для неї", category: "Масаж",
            price: 1100, duration: 4, dataId: "5d84a85391d8a57a0e4a5409", img: mass
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Київ", gender: "Для нього", category: "Соляна кімната",
            price: 12000, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: salt
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Одеса", gender: "Для неї", category: "СПА",
            price: 100, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Одеса", gender: "Для нього", category: "СПА",
            price: 700, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Одеса", gender: "Для неї", category: "СПА",
            price: 800, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Одеса", gender: "Для неї", category: "СПА",
            price: 1300, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Одеса", gender: "Для неї", category: "СПА",
            price: 1400, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для неї", category: "СПА",
            price: 300, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для нього", category: "СПА",
            price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для нього", category: "СПА",
            price: 100, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для нього", category: "Соляна кімната",
            price: 500, duration: 1, dataId: "5d84a85391d8a57a0e4a5409", img: salt
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для нього", category: "СПА",
            price: 400, duration: 3, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        },
        {
            town: "Запоріжжя", gender: "Для неї", category: "СПА",
            price: 1500, duration: 2, dataId: "5d84a85391d8a57a0e4a5409", img: spa
            , describe: "Найкраща послуга у вашому місті!"
        }
    ]
};

const ShopReducer = (state = initialState, action: { [key: string]: any, type: actionType }) => {
    switch (action.type) {
        case actionType.CHANGE_FILTERS:
            return {...state, filter: {...state.filter, ...action.filterParam}};
        case actionType.CHANGE_PRICE_FILTER:
            return {...state, price: {min: action.min, max: action.max}};
        default:
            return state;
    }
};
export const changeFilters = (filter: IFilter) => {
    return {
        type: actionType.CHANGE_FILTERS,
        filterParam: {...filter}
    }
};
export const changePriceFilters = (min:number, max:number) => {
    return {
        type: actionType.CHANGE_PRICE_FILTER,
        min, max
    }
};

export default ShopReducer as Reducer<any, AnyAction>;