import React, { useState } from 'react';

function ZipCode() {

    const [zipCode, setZipCode] = useState('');

    return (
        <form action="" method="" >
            <fieldset>
                <legend> Please enter your zipcode: </legend>
                <label for="zip">Zip Code: </label>
                    <input type="number" required
                        value={zipCode}
                        id="zip"
                        name="zipCode"
                        placeholder='00000'
                        size="5"
                        maxLength="5"
                        min="5"
                        onChange={e => setZipCode(e.target.value)}
                        />

                <label for="alert">
                    <button name="alert" id="alert" onClick={e => {
                        alert(`${zipCode} was entered.`);
                        e.preventDefault();
                    }}>Submit</button>

                </label>

            </fieldset>
        </form>
    )
}
export default ZipCode;