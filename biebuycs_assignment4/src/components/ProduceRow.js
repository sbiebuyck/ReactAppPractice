import React from 'react';
import QuantitySelection from './Quantity';

function ProduceRow({ item }) {
    return (
        <tr>
            <td> {item?.name} </td>
            <td> ${item?.price} </td>
            <td> <QuantitySelection /> </td>
        </tr>
    )
}

export default ProduceRow;