
import React from "react";
import ThemeContext from "../context/themeContext";
import styled from "styled-components";

export default function ThemeSelector({ toggleTheme }) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div>
                    <span>{theme.type}</span>
                    <input
                        type="checkbox"
                        checked={theme.type === "dark"}
                        onChange={() => toggleTheme()}
                    />
                </div>
            )}
        </ThemeContext.Consumer>
    );
}