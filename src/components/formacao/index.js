import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const Formacao = () => {

    
    return (
        <Container>
            <h2>Formaçao</h2>
            <h3>O QUE APRENDI</h3>
            <ContainerCurso>
                <h4>12/04/2022---08/12/2022</h4>
                <p>Curso Programador Front-end no curso do Dev em Dobro dos gemeos</p>
                <a href="https://www.linkedin.com/search/results/all/?keywords=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fschool%2Fdevquest-dev-em-dobro%2F&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BkcF0XnPzT1iYqxj34%2B97jw%3D%3D" target="blank">Entre no linkedin do curso Dev em dobro</a>
            </ContainerCurso>
            <ContainerCurso>
                <h4>2023---2025</h4>
                <p>Faculdade em analise e desenvolvimento de sistemas na anhanguera</p>
                <a href="https://www.anhanguera.com/" target="blank">entre no site da anhanguera</a>
            </ContainerCurso>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin-bottom: 50px;
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
const ContainerCurso = styled.div`
    margin-bottom:30px;
    h4{
        font-size:1.5rem;
        padding-bottom: 10px;
        color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
    }
    p{
        font-size:1.5rem;
        color: ${(props) => useContext(ThemeContext).theme.primaryColor};
        padding-bottom: 25px;
    }
    a{
        color: ${(props) => useContext(ThemeContext).theme.primaryColor};
        font-size: 1.5rem;
    }
    a:hover{
        color: ${(props) => useContext(ThemeContext).theme.secundaryColor}
    }
    `