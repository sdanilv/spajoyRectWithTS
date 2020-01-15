import {IShopState} from "./ShopInterface"
import {createSelector} from "reselect"

interface state {
    shop: IShopState
}


export const getShopProducts = ({shop}: state) => shop.products;
export const getFilter = ({shop}: state) => shop.filter;
export const getShopPrice = (state: state) => getFilter(state).price;
export const getProductsWithFilter = createSelector([getShopProducts, getFilter],
    (products, filter) => {
        return products.filter(product => {
                let trigger: boolean = true;
                if (filter.town !== "empty" && product.town !== filter.town) trigger = false;
                if (filter.gender !== "empty" && product.gender !== filter.gender) trigger = false;
                if (filter.category !== "empty" && product.category !== filter.category) trigger = false;
                if (filter.price && (filter.price.max < product.price || filter.price.min > product.price))  trigger = false;
                    return trigger;
            }
        )
    },);