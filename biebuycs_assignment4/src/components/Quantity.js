import React, {useState} from 'react';
import {AiFillCaretDown, AiFillCaretUp  } from 'react-icons/ai';



function QuantitySelection() {
    const [quantity, setQuantity] = useState(0);


    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1);
    return (
        <div>
            <span class="qv">{quantity}</span>
            <div class="quantity_selector">
                <AiFillCaretUp class="increment" onClick={increment} class="pointer" />
                <AiFillCaretDown class="decrement" onClick={decrement} class="pointer" />
            </div>
        </div>
    )



}

export default QuantitySelection;