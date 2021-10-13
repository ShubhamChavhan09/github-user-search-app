import React from "react";
import styled from "styled-components";

const Header = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const icon =
    theme === "light" ? (
      <i class="fas fa-moon"></i>
    ) : (
      <i className="fas fa-sun"></i>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Github</h1>

      <h3 style={{ transition: "all 1s ease" }}>
        {theme === "light" ? "DARK" : "LIGHT"}
        <Button onClick={changeTheme}>{icon}</Button>
      </h3>
    </div>
  );
};

export default Header;

const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: ${(bg) => bg.theme.fontColor};
  font-size: 1rem;
  margin-left: 10px;
`;
