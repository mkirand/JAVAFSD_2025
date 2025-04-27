import React, { useEffect, useState } from 'react';

function FetchData() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.error("Error fetching data:", err)
            })
    }, [])

    return (
        <div>
            {data ? <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.body}</p>
                    </div>
                </div>
            </>
                : <p>Loading...</p>
            }
        </div>
    )

}
export default FetchData;