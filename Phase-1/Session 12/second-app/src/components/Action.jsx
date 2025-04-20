function Action() {
    const handleClick = () => {
        alert("Button clicked!");
    };
    return (
        <div>
            <button type="button" className="btn btn-primary" style={{ marginTop: "10px" }} onClick={handleClick}>Click Me</button>
        </div>

    );
}
export default Action;