import React from 'react';
import StoresRow from './StoresRow';

function StoresTable({ stores }) {
    console.log(stores)
    return (
        <table id="stores">
            <caption> Stores Across the US of A</caption>
            <thead>
                <tr>
                    <th> City </th>
                    <th> State </th>
                    <th> Zip Code </th>
                </tr>
            </thead>
            <tbody>
                {stores?.map((store, i) => <StoresRow store={store} key={i} />)}
            </tbody>
        </table>
    );
}

export default StoresTable;