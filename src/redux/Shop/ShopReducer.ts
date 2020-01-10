import mass from "../../images/mass.jpg"
import spa from "../../images/spa.jpg"
import salt from "../../images/salt.jpg"


const initialState = {
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

const ShopModule = {
    state: {...initialState},
    reducers: {
        // changePrice: (state, min, max) =>
        //     ({...state, price: {min, max}}),
        changeViewParameters: (state, filterParam) =>
            ({...state, filter: {...state.filter, ...filterParam}})
    }
};

export default ShopModule;