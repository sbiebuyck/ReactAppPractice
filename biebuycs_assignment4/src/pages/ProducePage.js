import React from 'react';
import ProduceTable from '../components/ProduceTable';
import '../App.css';
import OrderData from '../data/items';

function ProducePage({ items }) {

    return (

        <article className='App-article'>
            <h2>See an item you want? Put it in your cart!</h2>
            <p>Take as much as you want!</p>
            <p>**Disclaimer: limit of 10 items per item.**</p>
            <ProduceTable items={OrderData}/>

        </article>

    )
}

export default ProducePage;