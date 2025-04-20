function MyButton(props) {
    return (
        <button type="button" className="btn btn-secondary mt-3" onClick={props.handleClick}>{props.label}</button>
    );
}
export default MyButton;