import React, {useState} from "react";
import style from "./Shop.module.scss"
import FindForm from "./FindForm/FindForm";
import {connect} from "react-redux"
import {getProductsWithFilter, getShopPrice, getShopProducts} from "../../redux/Shop/ShopSelector";
import {IProduct} from "../../redux/Shop/ShopInterface";


const Shop:React.FC = (props: any) => {

    const [price, changePrice] = useState({min: props.price.min, max: props.price.max});

    // const submitFindForm = ({town, gender, category, price}) => {
    //     props.changeViewParameters(town, gender, category, price)
    // };
    const submitFindForm = (formParam: ) => {
        console.log({...formParam, price});
        props.changeViewParameters({...formParam, price})
    };
    const submitPriceForm = ({minSlider, maxSlider} : any) => {
        changePrice({min: minSlider, max: maxSlider})
    };

    const products = props.products.map((product:IProduct, index: number) => {
        return <div key={index} className={style.product}>
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
                                type="cart">Додати в кошик
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
            <h4 d="root">Кошик</h4>
            <p className="text-center">Введіть Ваш імейл і оберіть зручний спосіб оплати</p>
            <div id="service"></div>
        </div>
    </div>
};
const mapStateToProps = (state) => ({
    products: getProductsWithFilter(state),
    price: getShopPrice(state)
});
const mapDispatchToProps = ({shop}) => ({
    changeViewParameters: (param) => shop.changeViewParameters({...param})
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
