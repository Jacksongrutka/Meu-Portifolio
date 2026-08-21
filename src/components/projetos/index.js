import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import img3Am from "../../imagens/imagem3Am.png"
import imgRCPProject from "../../imagens/imagemRCPProject.png"
import imgLitleCatLife from "../../imagens/LitleCatLife.png"
import { breakpoint } from "../breakpoints"

export const Projetos = () => {


    return (
        <Container>
            <h2>Projetos</h2>
            <h3>EXEMPLOS</h3>
            <ContainerProjeto>
                <ContainerTitle>
                    <a href="https://jacksongrutka.github.io/ficha-3-am/" target="_blank">Ficha 3 AM</a>
                    <p>Projeto desenvolvido para um cliente que precisava de uma ficha digital personalizada e compatível com seu próprio sistema de RPG. <br></br>Para o desenvolvimento, foram utilizados Angular e Reactive Forms, com BehaviorSubject para gerenciamento e compartilhamento de estado, garantindo a consistência dos dados entre as diferentes páginas da aplicação.</p>
                </ContainerTitle>
                <ContainerImage>
                    <img src={img3Am} alt="ilustraçao do projeto ficha 3Am"></img>
                </ContainerImage>
            </ContainerProjeto>
            <ContainerProjeto>
                <ContainerTitle>
                    <a href="https://jacksongrutka.github.io/fichaRcpProject/" target="_blank">Ficha RCP Project</a>
                    <p>Projeto desenvolvido a partir da base do projeto anterior, adaptado para um novo sistema de RPG e novos requisitos do cliente.
                        <br></br>Além da ficha de personagem, foi desenvolvido um sistema próprio de rolagem de dados, com tratamento dos resultados de acordo com as regras do sistema. Para interpretar as expressões de rolagem, foi utilizado Regex, permitindo identificar e processar diferentes partes das strings de entrada.
                        <br></br>O sistema de rolagem foi implementado internamente, evitando a dependência de uma API externa para uma funcionalidade essencial da aplicação.</p>
                </ContainerTitle>
                <ContainerImage>
                    <img src={imgRCPProject} alt="ilustraçao do projeto Ficha RCP Project"></img>
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
