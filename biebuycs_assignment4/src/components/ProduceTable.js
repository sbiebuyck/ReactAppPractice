import React from 'react';
import ProduceRow from './ProduceRow';

function ProduceTable({ items, quantity}) {
    return (
        <table id="producelist">
            <caption> Totally Not Expired Groceries</caption>
            <thead>
                <tr>
                    <th> Item </th>
                    <th> Price </th>
                    <th> Quantity </th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item, i) => <ProduceRow item={item} key={i} /> )}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    )
}

export default ProduceTable;