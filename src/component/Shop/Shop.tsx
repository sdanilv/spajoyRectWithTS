import React, {useState} from "react";
import style from "./Shop.module.scss"
import FindForm from "./FindForm/FindForm";
import {connect} from "react-redux"
import {getProductsWithFilter, getShopPrice} from "../../redux/Shop/ShopSelector";
import {IFilter, IProduct} from "../../redux/Shop/ShopInterface";
import {changeFilters} from "../../redux/Shop/ShopReducer";


const Shop:React.FC = (props: any) => {

    const [price, changePrice] = useState({min: props.price.min, max: props.price.max});

    // const submitFindForm = ({town, gender, category, price}) => {
    //     props.changeViewParameters(town, gender, category, price)
    // };
    const submitFindForm = (formParam: IFilter) => {
        console.log({...formParam, price});
        props.changeFilters({...formParam, price})
    };
    const submitPriceForm = ({minSlider, maxSlider} : any) => {
        changePrice({min: parseInt(minSlider, 10), max: parseInt(maxSlider, 10)})
    };

    const products = props.products.map((product:IProduct, index: number) => {
        return <div key={index} className={style.product+" "+ style.animation}>
            <div>
                <div><img src={product.img} alt="Colorlib Template"/></div>
                <div className="text py-3 px-3">
                    <h3>{product.category} послуга {product.gender} в {product.town}</h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p>Опис: {product.describe}</p>
                            <p>Тривалість: {product.duration} година</p>
                            <p className="price">Ціна: {product.price} грн</p>
                        </div>
                    </div>
                    <p className="bottom-area d-flex">
                        <button data-id={product.dataId}
                                type="button">Додати в кошик
                        </button>
                    </p>
                </div>
            </div>
        </div>
    });
    return <div>
        <FindForm onSubmit={submitFindForm} submitPriceForm={submitPriceForm} price={price}/>
        <div className={style.shop}>
            {products}
        </div>
        <h5>Нічого не знайдено!
            Відповідно до Вашого запиту ми не змогли нічого підібрати.</h5>
        <div id="CartPlace">
            <h4 id="root">Кошик</h4>
            <p className="text-center">Введіть Ваш імейл і оберіть зручний спосіб оплати</p>
            <div id="service"> </div>
        </div>
    </div>
};
const mapStateToProps = (state : any) => ({
    products: getProductsWithFilter(state),
    price: getShopPrice(state)
});

export default connect(mapStateToProps, {changeFilters})(Shop);
