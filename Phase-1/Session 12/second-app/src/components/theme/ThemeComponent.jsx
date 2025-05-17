import { useCallback } from "react";
import { useThemeContext } from "./ThemeContext";

function ThemeComponent() {

    const { theme, toggleTheme } = useThemeContext();

    return (
        <div style={{
            padding: "2rem",
            background: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
            textAlign: "center"
        }}>
            <h3>Theme</h3>
            <button type="button" className="btn btn-success" onClick={() => { toggleTheme() }}>Toggle Theme</button>
        </div>
    )
}
export default ThemeComponent;