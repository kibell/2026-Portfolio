import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import "../../../src/utilities.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import './style.css'

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  padding: 0.6rem;
  float: right;
  margin-right: 25px
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <FaSun className="sun-style" onClick={toggleTheme}>

      </FaSun>
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
