import React, { useState } from 'react';
import Parent from './Parent';
function GrandParent() {
    const [data, setData] = useState("Grand Parent Data");

    const changedData = (e) => {
        setData(e.target.value);
    }
    return (
        <div>
            <h2>Grand Parent</h2>
            <p>Data from Child in Grand Parent component: {data}</p>
            <Parent data={data} setData={changedData} />
        </div>
    );
}
export default GrandParent;