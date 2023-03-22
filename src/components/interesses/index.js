import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const Interesses = () => {
    
    const {theme} = useContext(ThemeContext)
    
    const Container = styled.div`
        margin: 100px 0;
        h2{
            font-size: 3rem;
            color: ${theme.secundaryColor};
        }
        h3{
            font-size: 2rem;
            color: ${theme.secundaryColor};
        }
    `
    return (
        <Container id="interesses">
            <h2>Interesses</h2>
            <h3>FORA DO ESCRITÓRIO</h3>
        </Container>
    )
}


