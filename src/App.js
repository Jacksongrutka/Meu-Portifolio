import { Header } from "./components/header";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <Main>
      <GlobalStyle/>
      <Header/>
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
  }
  a{
      text-decoration: none;
      color: #000;
  }
  img{
    width:100%;
  }
`
const Main = styled.div`
min-height: 100vh;
background-color:gray;
`

export default App;
