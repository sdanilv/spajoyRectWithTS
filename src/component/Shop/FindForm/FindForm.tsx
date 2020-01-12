import React, {Props, useEffect, useState} from "react";
import style from "./FindForm.module.scss"
import PriceRangeSlider from "../../../common/PriceRangeSlider/PriceRangeSlider";
import {Field, reduxForm} from "redux-form";

const FindForm: React.FC = (props:any) => {
    const [isSeePriceArea, seePriceArea] = useState(false);
    const [isSeeForm, seeForm] = useState(true);
    useEffect(() => {
        if (window.innerWidth < 750)
            seeForm(false)
    }, []);

    const seePriceAreaToggle = () => {
        seePriceArea(!isSeePriceArea);
        console.log(isSeePriceArea);
    };
    const seeFormToggle = () => {
        seeForm(!isSeeForm);
    };

    return (<>
        <div className={style.hideButton}>
            <button type="button" onClick={seeFormToggle}>
                {isSeeForm ? "Сховати" : "Знайти"}
            </button>
            <div className={style.cart}>
                <a href="#CartPlace">
                    <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                         alt="cart"/>
                    <span>0</span>
                </a>
            </div>
        </div>
        {isSeeForm && <form onSubmit={props.handleSubmit} className={style.findForm}>
            <label>Місто:</label>
            <Field  component="select" name="town">
                <option value="empty">Обрати</option>
                <option value="Київ">Київ</option>
                <option value="Запоріжжя">Запоріжжя</option>
                <option value="Одеса">Одеса</option>
            </Field>

            <label>Кому:</label>
            <Field component="select" name="gender">
                <option value="empty">Обрати</option>
                <option value="Для неї">Для неї</option>
                <option value="Для нього">Для нього</option>
                <option value="empty">Для когось</option>
            </Field>

            <label>Категорія:</label>
            <Field component="select" name="category">
                <option value="empty">Обрати</option>
                <option value="СПА">СПА</option>
                <option value="Масаж">Масаж</option>
                <option value="Соляна кімната">Соляна кімната</option>
            </Field>

            <label>Ціна:</label>
            <div className={style.popupContainer}>
            <button
                type="button"
                onClick={seePriceAreaToggle}
                className={style.priceButton}
                id="price">
                {props.price.min}-{props.price.max}
            </button>
            {isSeePriceArea &&
            <div id="overlay" className={style.popup} onBlur={seePriceAreaToggle}>
                <div className={style.priceForm}>
                    <PriceRangeSlider onSubmit={props.submitPriceForm} onBlur={seePriceAreaToggle}
                                      initialValues={{minSlider: props.price.min, maxSlider: props.price.max} }/>
                </div>
            </div>
            }
            </div>

            <div className={style.submitFindFormDiv}>
                <button className={style.submitButton} type="submit">
                    Знайти
                </button>
            </div>
            <div className={style.cart}>
                <a href="#CartPlace">
                    <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png"
                         alt="cart"/>
                    <span>0</span>
                </a>
            </div>
        </form>}
    </>)
};

export default reduxForm<{},  {
    previousPage: any;
    isLoading: boolean;
}>({form: "shopParam"})(FindForm);
