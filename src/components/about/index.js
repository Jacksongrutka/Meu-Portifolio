import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import { breakpoint } from "../breakpoints"

export const About = () => {

    return (
        <Container id="sobre">
            <div>
                <h2>Sobre</h2>
                <h3>MINHA HISTORIA</h3>
                <p>Meu nome é Jackson, e sou um programador Front-end. Sou apaixonado por programação e pretendo me tornar programador full-Stack. Durante meu aprendizado tenho trabalhado em projetos desafiadores, que me permitiram desenvolver minhas habilidades em CSS, JavaScript e em aplicações REACT.</p>
                <p>Além disso, Sou uma pessoa dedicada, comprometida e criativa e isso me ajuda a trabalhar de forma eficaz e coloborativa com clientes e colegas. Fora do trabalho gosto de games, que é um dos motivos para eu começar a estudar programaçâo. Também amo gatos e um dos meus objetivos é criar uma ONG para acolher gatos de rua.</p>
                <p>Espero que goste do meu portfólio e que possamos trabalhar em grandes projetos no futuro!</p>
            </div>
        </Container>
    )
}

const Container = styled.section`
    min-height: 50vh;
    display:flex;
    background-color:${(props) => useContext(ThemeContext).theme.secundaryBackgroundColor};
    justify-content: center;
    align-items: center;
    div{
        width:50%;
        color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
        margin: 50px 0;
        ${breakpoint('down' , 'lg')`
        width: 80%;
    `}
    }
    div h2{
        font-size: 3rem;
       
    }
    div h3{
        font-size: 2rem;
        padding-bottom: 40px;
        
    }
    div p{
        font-size: 2rem;
        color:${(props) => useContext(ThemeContext).theme.primaryColor};
        line-height: 30px;
        margin-top: 30px;
        ${breakpoint('down', 'sp')`
            font-size: 1.5rem;        
        `}
    }
    `
