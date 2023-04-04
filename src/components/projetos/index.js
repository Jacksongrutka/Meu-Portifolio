import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import imgPokeList from "../../imagens/PokeList.png"
import imgLandingPage from "../../imagens/PrimeiraLandingPage.png"
import imgLitleCatLife from "../../imagens/LitleCatLife.png"
import { breakpoint } from "../breakpoints"

export const Projetos = () => {


    return (
        <Container>
            <h2>Projetos</h2>
            <h3>EXEMPLOS</h3>
            <ContainerProjeto>
                <ContainerTitle>
                    <a href="https://github.com/Jacksongrutka/poke-List" target="_blank">Poke-List</a>
                    <p>Projeto onde eu uso a API do pokemon para apresentar na tela uma listagem de pokemons e suas caracteristicas.</p>
                </ContainerTitle>
                <ContainerImage>
                    <img src={imgPokeList} alt="ilustraçao do projeto Poke-List"></img>
                </ContainerImage>
            </ContainerProjeto>
            <ContainerProjeto>
                <ContainerTitle>
                    <a href="https://jacksongrutka.github.io/primeira-landing-page/" target="_blank">Landing Page</a>
                    <p>Primeira landing page que eu fiz.</p>
                </ContainerTitle>
                <ContainerImage>
                    <img src={imgLandingPage} alt="ilustraçao do projeto Landing page"></img>
                </ContainerImage>
            </ContainerProjeto>
            <ContainerProjeto>
                <ContainerTitle>
                    <a href="https://jacksongrutka.github.io/litle-cat-life/" target="_blank">Little cat life</a>
                    <p>Projeto de uma loja virtual que estou trabalhando relacionada a gatos. Ainda está incompleta!</p>
                </ContainerTitle>
                <ContainerImage>
                    <img src={imgLitleCatLife} alt="ilustraçao do projeto Litle cat life"></img>
                </ContainerImage>
            </ContainerProjeto>
        </Container>
    )
}

const Container = styled.div`
width:100%;

h2{
    font-size: 3rem;
    color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
}
h3{
    font-size: 2rem;
    color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
    margin-bottom: 40px;
}
`
const ContainerProjeto = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 100px;
    ${breakpoint('down', 'sp')`
        flex-direction:column;
    `}
`
const ContainerTitle = styled.div`
display:flex;
width: 45%;
flex-direction:column;
align-items: flex-start;
    ${breakpoint('down', 'sp')`
        width: 100%;
    `}
a{  
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
    font-size:1.8rem;
    padding-bottom: 40px;
    text-decoration: underline;
    ${breakpoint('down', 'sp')`
      padding-bottom: 20px;  
    `}
}
a:hover{
    color:${(props) => useContext(ThemeContext).theme.secundaryColor}
}
p{
    font-size: 1.5rem;
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
}
`
const ContainerImage = styled.div`
width: 50%;
    ${breakpoint('down', 'sp')`
        width:100%;
        margin-top:20px    
    `}
img{
    width:100%;
}
`
