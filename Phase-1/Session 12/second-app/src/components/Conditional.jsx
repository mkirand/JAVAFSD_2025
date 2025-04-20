function Conditional() {
    const isLoggedIn = true;

    return (
        <button type="button" className="btn btn-dark">
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    );
}
export default Conditional;