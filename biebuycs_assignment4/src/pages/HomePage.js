import React from 'react';
import { MdDonutLarge } from 'react-icons/md';
import '../App.css';

function HomePage() {
    return (
        <article className='App-article'>
            <h2> Prices so cheap, you'll wonder if they're still good! </h2>
            <p> To browse questionable produce, use the links above to find a store near you! </p>
            <MdDonutLarge className="products" />
            </article>
    );
}

export default HomePage;