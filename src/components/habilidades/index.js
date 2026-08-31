import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import { breakpoint } from "../breakpoints"
import { useOnScreen } from "../../hooks/useOnScreen"

export const Habilidades = () => {

    const [ref , visible] = useOnScreen();

    return (
        <Container id="habilidades" ref={ref} className={visible ? "visible" : ""}>
            <h2>Habilidades e Idiomas</h2>
            <h3>O QUE OFEREÇO</h3>
            <ContainerHabilidade>
                <h4>Angular</h4>
                <Base>
                    <div style={{ width: '60%'}} />
                </Base>
            </ContainerHabilidade>
            <ContainerHabilidade>
                <h4>Javascript</h4>
                <Base>
                    <div style={{ width: '80%' }} />
                </Base>
            </ContainerHabilidade>
            <ContainerHabilidade>
                <h4>React</h4>
                <Base>
                    <div style={{ width: '60%' }} />
                </Base>
            </ContainerHabilidade>
            <ContainerHabilidade>
                <h4>Inglês</h4>
                <Base>
                    <div style={{ width: '70%' }} />
                </Base>
            </ContainerHabilidade>
            <ContainerHabilidade>
                <h4>API's</h4>
                <Base>
                    <div style={{ width: '75%' }} />
                </Base>
            </ContainerHabilidade>
        </Container>
        
    )
}

const Container = styled.div`
    margin: 100px 0;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 2s ease, transform 2s ease;
    &.visible{
        opacity: 1;
        transform: translateY(0);
    }opacity: 0;
    transform: translateY(30px);
    transition: opacity 2s ease, transform 2s ease;
    &.visible{
        opacity: 1;
        transform: translateY(0);
    }
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
const ContainerHabilidade = styled.div`
    display:flex;
    margin-bottom:10px;
        h4{
            color: ${(props) => useContext(ThemeContext).theme.primaryColor};
            font-size:1.5rem;
            width:15%;
            ${breakpoint('down','ms')`
                width: 30%;
            `}
            ${breakpoint('down', 'sp')`
                font-size: 1.2rem;
            `}
        }
    `
const Base = styled.div`
        width:85%;
        height: 15px;
        border-bottom: 2px solid #ccc;
        ${breakpoint('down','ms')`
            width: 70%;
        `}
        div{
            height:100%;
            border-bottom:4px solid #5569dc;
        }
    `
