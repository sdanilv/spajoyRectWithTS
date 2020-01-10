import {createSelector } from "reselect"
export  const getShopProducts = state => state.shop.products;
export const  getFilter = state => state.shop.filter;
export  const getShopPrice = state => getFilter(state).price;
export const getProductsWithFilter = createSelector([getShopProducts, getFilter],
    (products,  filter) => {
return  products.filter(product => {
    let triger = true;
    if(filter.town!=="empty"&&product.town!==filter.town) triger = false;
    if(filter.gender!=="empty"&&product.gender!==filter.gender)  triger = false;
    if(filter.category!=="empty"&&product.category!==filter.category)  triger = false;
    if(filter.price.max>product.price&&filter.price.min<product.price)
    return triger;
})
}, );