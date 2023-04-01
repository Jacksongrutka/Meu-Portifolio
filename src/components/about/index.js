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
                <p>Meu nome é Jackson, e sou um programador Front-end. Eu sou apaixonado por programaçao e pretendo me tornar programador full-Stack. Durante meu aprendizado, tenho trabalhado em projetos desafiadores que me permitiram desenvolver minhas habilidades em CSS, Javascript e a area de React.</p>
                <p>Além disso, Sou uma pessoa dedicada, comprometida e criativa, e isso me ajuda a trabalhar de forma colaborativa e eficaz com colegas e clientes. Fora do trabalho, gosto de games, que é um dos motivos de eu ter começado a estudar programaçao e amo gatos, um dos meus objetivos e criar uma ONG para acolher gatos de rua.</p>
                <p>Estou animado em compartilhar meu portfólio com você e espero que possamos trabalhar juntos em projetos futuros.</p>
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
