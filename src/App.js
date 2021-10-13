import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import MainInfo from "./components/MainInfo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

const LightTheme = {
  pageBackground: "#bdc3c7",
  mainColor: "#dfe6e9",
  fontColor: "#333",
  mobile: "768px",
};

const DarkTheme = {
  pageBackground: "#141c2f",
  mainColor: "#1f2a48",
  fontColor: "#bdc3c7",
  mobile: "768px",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
  mobile: "768px",
};

function App() {
  const inputRef = useRef();
  const [userName, setUserName] = useState("octocat");
  const [data, setData] = useState("");
  const [theme, setTheme] = useState("dark");
  const [error, setError] = useState("");

  //
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [setUserName]);

  const fetchData = async () => {
    await fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
        }
        console.log(userName);
      });
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        <SearchUser
          theme={theme}
          setTheme={setTheme}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
          setUserName={setUserName}
        />
        {error ? (
          <h2>{error}</h2>
        ) : (
          <MainInfo userName={userName} data={data} theme={theme} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
