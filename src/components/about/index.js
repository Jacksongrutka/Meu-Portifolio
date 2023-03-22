import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const About = () => {

    const {theme} = useContext(ThemeContext)

    const Container = styled.section`
    min-height: 50vh;
    display:flex;
    background-color:${theme.secundaryBackgroundColor};
    justify-content: center;
    align-items: center;
    div{
        width:50%;
        color: ${theme.secundaryColor};
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
        color:${theme.primaryColor};
        line-height: 40px;
    }
    `

    return(
        <Container id="sobre">
                <div>
                    <h2>Sobre</h2>
                    <h3>MINHA HISTORIA</h3>
                    <p>Lorem ipsum dolor sit amet. Et facere accusamus et repellat cupiditate non internos omnis eos voluptas temporibus nam cumque unde aut laboriosam ducimus ut maiores quia. Nam pariatur velit aut dolore nisi ad alias harum. Sed voluptates esse ut nesciunt saepe ut molestiae aspernatur ea autem fugiat id molestiae voluptas.</p>
                </div>
        </Container>
    )
}
