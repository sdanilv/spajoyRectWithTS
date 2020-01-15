import React, {useEffect, useState} from "react";
import style from "./Shop.module.scss"
import FindForm from "./FindForm/FindForm";
import {connect} from "react-redux"
import {getFilter, getProductsWithFilter, getShopPrice} from "../../redux/Shop/ShopSelector";
import {IFilter, IProduct} from "../../redux/Shop/ShopInterface";
import {changeFilters} from "../../redux/Shop/ShopReducer";
import {defineUserTown} from "../../api/api";


const Shop: React.FC = (props: any) => {
    const {changeFilters, products, town} = props;
    const [price, changePrice] = useState({min: props.price.min, max: props.price.max});
    useEffect(() => {
        defineUserTown().then(town => {
            changeFilters({town})
        });
    }, [changeFilters]);

    const submitFindForm = (formParam: IFilter) => {
        changeFilters({...formParam, price});
    };
    const submitPriceForm = ({minSlider, maxSlider}: { minSlider: string, maxSlider: string }) => {
        changePrice({min: parseInt(minSlider, 10), max: parseInt(maxSlider, 10)})
    };

    const productsMap = products.map((product: IProduct, index: number) => {
        return <div key={index} className={style.product + " " + style.animation}>

            <div><img src={product.img} alt="Colorlib Template"/></div>

                <h3>{product.category} послуга {product.gender} в {product.town}</h3>
                <div className="d-flex">
                    <div className="pricing">
                        <p>Опис: {product.describe}</p>
                        <p>Тривалість: {product.duration} година</p>
                        <p className="price">Ціна: {product.price} грн</p>
                    </div>
                </div>
                <p className="bottom-area d-flex">
                    <button data-id={product.dataId} className={style.addToCart}
                            type="button">Додати в кошик
                    </button>
                </p>

        </div>
    });
    return <div>
        <FindForm onSubmit={submitFindForm} submitPriceForm={submitPriceForm} price={price} town={town}/>
        <div className={style.shop}>
            {productsMap}
        </div>
        {productsMap.length === 0 && <h2>Нічого не знайдено!
            Відповідно до Вашого запиту ми не змогли нічого підібрати.</h2>}

        <div className="container-fluid" id="CartPlace">
            <h4 className="text-center" id="root">Кошик</h4>
            <p className="text-center">Введіть Ваш імейл і оберіть зручний спосіб оплати</p>
            <div id="service"></div>
        </div>
    </div>
};
const mapStateToProps = (state: any) => ({
    products: getProductsWithFilter(state),
    town: getFilter(state).town,
    price: getShopPrice(state)
});

export default connect(mapStateToProps, {changeFilters})(Shop);
