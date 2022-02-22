import React  from "react";
import ZipCode from '../components/ZipCode';
import StoresTable from '../components/StoresTable';
import '../App.css';
import StoreData from '../data/stores';

function StoresPage({ stores }) {
    console.log(StoreData)
    return (

        <article className="App-article">
            <h2>Find a store near you!</h2>
            <p> Enter your Zip Code in the dialog box below.</p>
            <ZipCode />
            <StoresTable stores={StoreData} />

        </article>
    );
}

export default StoresPage;