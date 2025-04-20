function StyleComponent() {
    const divStyle = {
        backgroundColor: "lightblue",
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
        margin: "10px",
    };
    return (
        <div style={divStyle}>
            This is a styled component.
        </div>
    );
}
export default StyleComponent;