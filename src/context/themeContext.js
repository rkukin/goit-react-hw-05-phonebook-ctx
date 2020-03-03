import React from 'react';

export const themeConfig = {
    light: {
        fontColor: 'blue',
        bodybg: 'red'
    },
    dark: {
        fontColor: 'red',
        bodybg: 'blue'
    }
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;