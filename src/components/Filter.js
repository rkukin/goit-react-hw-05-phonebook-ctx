import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import withTheme from "../hoc/withTheme";

const FilterInput = styled.input`
max-width: 40%;
margin-top: 10px;
margin-bottom: 30px;
`;

function Filter({ handleChange }) {

  return (
    <FilterInput type="text" onChange={handleChange} name="filter" autoComplete='off' />
  )
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default withTheme(Filter);