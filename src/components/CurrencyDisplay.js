import React from "react";


const CurrencyDisplay = (props) => {
    <p>
        US Dollar ${props.amount.toFixed(2)} = {props.currency.name}{""}
        {props.currency.symbol}
        {(props.amount * props.currency.rate).toFixed(1)}
    </p>
}



export default CurrencyDisplay;