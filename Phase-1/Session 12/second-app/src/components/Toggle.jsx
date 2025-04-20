import { useState } from "react";

function Toggle() {
    const [isToggled, setIsToggled] = useState(true)

    return (
        <div>
            <button type="button" style={{ marginTop: "1rem" }} className={`btn btn-${isToggled ? "success" : "danger"}`} onClick={() => setIsToggled(!isToggled)}>{isToggled ? "ON" : "OFF"}</button>
        </div>
    )
}
export default Toggle;