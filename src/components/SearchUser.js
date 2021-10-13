import React from "react";
import styled from "styled-components";

const SearchUser = ({
  handleSubmit,
  inputRef,
  setUserName,
  theme,
  setTheme,
}) => {
  return (
    <>
      <Form>
        <In className="fas fa-search"></In>
        <Input
          onChange={(e) => setUserName(inputRef.current.value)}
          ref={inputRef}
          type="text"
          placeholder="Search username..."
        />
        <Button onClick={handleSubmit}>Search</Button>
      </Form>
    </>
  );
};

export default SearchUser;

const Form = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  transition: all 0.5s ease;
`;
const Input = styled.input`
  width: 100%;
  background: ${(bg) => bg.theme.mainColor};
  padding: 15px 15px 15px 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: ${(bg) => bg.theme.fontColor};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    letter-spacing: 0;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 6px;
  top: 6px;
  width: 100px;
  border-radius: 8px;
  border: none;
  background: #0377fa;
  padding: 9px 5px;
  color: #bdc3c7;
  font-size: 14px;
  font-weight: 550;
`;
const In = styled.i`
  position: absolute;
  left: 25px;
  top: 12px;
  z-index: 1;
  font-size: 1.2rem;
  color: #0652dd;
`;
