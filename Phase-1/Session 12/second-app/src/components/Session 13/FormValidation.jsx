import { useState, useEffect } from "react";

function FormValidation() {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (input.length > 5) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input])

    return (
        <form>
            <label className="form-label" htmlFor="input">Write Text Here...</label>
            <input className={`form-control ${isValid ? "is-valid" : "is-invalid"}`} type="text" id="input" onChange={(e) => { setInput(e.target.value) }} required />
            {/* <div style={{ backgroundColor: isValid ? "lightgreen" : "lightpink" }}>
                {isValid ? "Looks good!" : "Input cannot be greater than 5 characters"}
            </div> */}
            <div className={isValid ? "valid-feedback" : "invalid-feedback"}>
                {isValid ? "Looks good!" : "Input cannot be greater than 5 characters"}
            </div>
        </form>
    )
}
export default FormValidation;