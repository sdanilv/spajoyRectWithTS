import React from "react";
import s from "./PriceRangeSlider.module.scss"
import {Field, reduxForm} from "redux-form"

const PriceRangeSlider = props => {
    let minPrice = props.initialValues.minSlider;
    let maxPrice = props.initialValues.minSlider;
    const changeMinPrice = eve => {
        minPrice = eve.target.value;
    };

    const changeMaxPrice = eve => {
        maxPrice = eve.target.value;
    };

    return (
        <form onBlur={props.handleSubmit} className={s.priceSlider}>
            <span>
    <Field name="minSlider" component="input" type="number" value={minPrice} min="0" max="1500"/>
    <Field name="maxSlider" component="input" type="number" value={maxPrice} min="0" max="1500"/>
            </span>
            <Field  name="minSlider" component="input" value={minPrice} min="0" max="1500" step="10" type="range"
                   onInput={changeMinPrice}/>
            <Field name="maxSlider" component="input" value={maxPrice} min="0" max="1500" step="10" type="range"
                   onInput={changeMaxPrice}/>
            <svg width="100%" height="24">
                <line x1="4" y1="0" x2="300" y2="0" stroke="#212121" strokeWidth="12" strokeDasharray="1 28" />
            </svg>
            <button type="cancel" onClick={props.reset}>
                Clear Values
            </button>
        </form>
    )
};

export default reduxForm({form: "priceSlider"})(PriceRangeSlider)