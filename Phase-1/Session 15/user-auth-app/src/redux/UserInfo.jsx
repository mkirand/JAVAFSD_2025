import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

function UserInfo() {

    const dispatch = useDispatch();// it is used to  send actions to the store
    const user = useSelector((state) => state.auth.user);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleLogin = () => {
        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }
        dispatch(login(username))
        setUsername("");
        setPassword("");
    }

    return (
        <div style={{ textAlign: "center", marginTop: '50px', padding: "20px" }}>
            {
                user ?
                    <>
                        <p>Welcome {user}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                    :
                    <>
                        <h2>Redux User Login</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                    </>
            }
        </div>
    )
}
export default UserInfo;