import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import "./Subtotal.css"

function Subtotal() {

    const history = useNavigate();

    const [{basket}] = useStateValue();
    /* Moved to reducer.js
    const getBasketTotal= (basket) => {
        let total = 0;
        basket.forEach((item) => {
            total += (item.price)
        })
        return total;
    };*/

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> 
                            This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={ e => history('/payment') } >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
