import { useState } from "react";
import { useAuthContext } from "./authContext/AuthContext";

function Greetings() {

    const { user, setUser, isAuthenticated, setIsAuthenticated, login, logout } = useAuthContext();
    const [error, setError] = useState(false);

    const handleLogin = () => {
        if (!error) {
            alert("Please fill all the required fields!")
        } else {
            login(user);
            setIsAuthenticated(true);
        }
    }

    return (
        <div style={{ padding: "2rem" }}>
            {isAuthenticated ?
                <h1>Hello, {user?.fullName}!</h1>
                :
                <form>
                    <h1>Login</h1>
                    <label className="form-label" htmlFor="fullName">Write Text Here...</label>
                    <input className={`form-control ${user.fullName && !error?.fullName ? "is-valid" : "is-invalid"}`}
                        type="text"
                        id="fullName"
                        onChange={(e) => {
                            setUser(
                                (prev) => ({ ...prev, fullName: e.target.value })
                            )
                        }}
                        onBlur={(e) => {
                            console.log(error, user)
                            if (!e.target.value && error.fullName) {
                                setError((prev) => ({ fullName, ...prev }))
                            } else {
                                setError((prev) => ({ ...prev, fullName: true }))
                            }
                        }}
                    />
                    <div className={!error?.fullName ? "valid-feedback" : "invalid-feedback"}>
                        {error?.fullName ? "Please enter your name!" : ""}
                    </div>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className={`form-control ${!error?.password ? "is-valid" : "is-invalid"}`} type="password" id="password"
                        onChange={(e) => {
                            setUser(
                                (prev) => ({ ...prev, password: e.target.value })
                            )
                        }}
                        onBlur={(e) => {
                            console.log(error, user)
                            if (!e.target.value && error.password) {
                                setError((prev) => ({ password, ...prev }))
                            } else {
                                setError((prev) => ({ ...prev, password: true }))
                            }
                        }}
                    />
                    <div className={!error?.password ? "valid-feedback" : "invalid-feedback"}>
                        {error?.password ? "Please enter password" : ""}
                    </div>
                    <button type="button" className="btn btn-success" onClick={() => { handleLogin() }}>Login</button>
                </form>
            }
        </div>
    );
}
export default Greetings;