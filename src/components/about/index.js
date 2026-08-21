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
                <p>Sou desenvolvedor Full-Stack com experiência no desenvolvimento de aplicações web utilizando React e Angular. Tenho experiência na criação de interfaces responsivas, componentização e integração com APIs. Tenho como objetivo atuar profissionalmente no desenvolvimento de aplicações web, contribuindo para projetos que envolvam boas práticas de desenvolvimento, código organizado e soluções eficientes. Meu portfólio reúne projetos desenvolvidos ao longo da minha formação, demonstrando minha evolução técnica e experiência prática com diferentes tecnologias e ferramentas.</p>
                <p>Desenvolvo sites, lojas virtuais e sistemas de gerenciamento personalizados, com front-end, back-end e banco de dados integrados. Se você tiver algum problema que eu possa resolver, entre em contato.</p>
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
        width:70%;
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
