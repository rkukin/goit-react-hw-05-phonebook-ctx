import React from "react";
import styled from "styled-components";
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import withTheme from "../hoc/withTheme";

const ToggleLabel = styled.span`
margin: 10px;
`;

function ThemeSelector({toggleTheme, theme}) {
  return (
    <label>
      <ToggleLabel>{theme.type}</ToggleLabel>
      <Toggle
        type="checkbox"
        checked={theme.type === "dark"}
        onChange={() => toggleTheme()}
      />
    </label>

  );
}

export default withTheme(ThemeSelector)