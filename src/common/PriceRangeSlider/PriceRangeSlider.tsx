import React from "react";
import s from "./PriceRangeSlider.module.scss"
import {Field, reduxForm} from "redux-form"

const PriceRangeSlider: React.FC = (props: any) => {

    let minPrice : number = props.initialValues.minSlider;
    let maxPrice : number = props.initialValues.maxSlider;
    const changeMinPrice = (eve: React.ChangeEvent<HTMLInputElement>) => {
        minPrice = parseInt( eve.target.value, 10)
    };

    const changeMaxPrice = (eve: React.ChangeEvent<HTMLInputElement>) => {
        maxPrice = parseInt( eve.target.value, 10)
    };

    return (
        <div onBlur={props.handleSubmit} className={s.priceSlider}>
            <span>
    <Field name="minSlider" component="input" type="number" value={minPrice} min="0" max="1500"/>
    <Field name="maxSlider" component="input" type="number" value={maxPrice} min="0" max="1500"/>
            </span>
            <Field name="minSlider" component="input" value={minPrice} min="0" max="1500" step="10" type="range"
                   onInput={changeMinPrice}/>
            <Field name="maxSlider" component="input" value={maxPrice} min="0" max="1500" step="10" type="range"
                   onInput={changeMaxPrice}/>
            <svg width="100%" height="24">
                <line x1="4" y1="0" x2="300" y2="0" stroke="#212121" strokeWidth="12" strokeDasharray="1 28"/>
            </svg>
            <button type="button" onClick={props.reset}>
                Выбрать
            </button>
        </div>
    )
};

export default reduxForm < {}
,
{
    initialValues: any;
    onBlur: any;
    onSubmit: any;
}>
({form: "priceSlider"})(PriceRangeSlider)