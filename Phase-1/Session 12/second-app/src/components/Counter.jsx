import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ border: "1.5px solid black", padding: "1rem", margin: "1rem", borderRadius: "5px" }}>
            <p>Counter: {count}</p>
            <button type="button" className="btn btn-success" onClick={() => setCount(count + 1)}>Increase Count</button>
            <button type="button" className="btn btn-danger" style={{ marginLeft: "1rem" }} disabled={count === 0} onClick={() => setCount(count - 1)}>Decrease Count</button>
        </div>
    )
}
export default Counter;