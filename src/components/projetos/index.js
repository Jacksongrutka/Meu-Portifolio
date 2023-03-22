import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const Projetos = () => {

    const {theme} = useContext(ThemeContext)

    const Container = styled.div`
    width:50%;
    padding-left:5%;

    h2{
        font-size: 3rem;
        color: ${theme.secundaryColor};
    }
    h3{
        font-size: 2rem;
        color: ${theme.secundaryColor};
        margin-bottom: 40px;
    }
    `
const ContainerProjeto = styled.div`
    a{
        font-size:1.5rem;
        display:block;
        padding-bottom: 10px;
        color: ${theme.secundaryColor};
    }
    p{
        font-size:1.5rem;
        padding-bottom: 25px;
        color: ${theme.primaryColor};
    }
    div{
        background-color: #000;
        width: 100%;
        height: 250px;
    }
    `

    return (
        <Container>
            <h2>Projetos</h2>
            <h3>EXEMPLOS</h3>
            <ContainerProjeto>
                <a href="https://www.google.com.br/" target="_blank">Poke-List</a>
                <p>uma listagem dos pokemons usando a poke API</p>
                <div>
                    <img></img>
                </div>
            </ContainerProjeto>
        </Container>
    )
}
