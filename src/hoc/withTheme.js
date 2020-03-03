import React from "react";
import ThemeContext from "../context/themeContext";

const withTheme = WrappedComponent => {
    return function WithTheme(props) {
        return (
            <ThemeContext.Consumer>
                {theme => <WrappedComponent {...props} styles={{ color: theme.config.fontColor, background: theme.config.bodybg }} />}
            </ThemeContext.Consumer>
        );
    };
};

export default withTheme;