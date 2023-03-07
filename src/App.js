import { Home } from "./components/home";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <Main>
      <GlobalStyle/>
      <Home/>
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
  a{
      text-decoration: none;
      color: #000;
  }
  img{
    width:100%;
  }
  html {
    scroll-behavior: smooth;
  }
`
const Main = styled.div`
min-height: 100vh;
background-color:#fff;
`

export default App;
