import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import imgElo from "../../imagens/Elo.png"
import imgEloPlate from "../../imagens/EloPlate.png"


export const Interesses = () => {
    return (
        <Container id="interesses">
            <h2>Interesses</h2>
            <h3>FORA DO ESCRITÓRIO</h3>
            <ContainerProjeto>
                <ContainerTitle>
                    <h4>Riot games</h4>
                    <p>no meu tempo livre, eu gosto de jogar todos jogos da empresa Riot games, que sao. League of legends, Legends of Runeterra e Valorant</p>
                </ContainerTitle>
                <ContainerInfo>
                    <h5>Meu elo no TeamFightTatics é Ouro 2</h5>
                    <img src={imgElo} />
                    <div>
                        <p>II</p>
                    </div>
                </ContainerInfo>
            </ContainerProjeto>
        </Container>
    )
}

const Container = styled.div`
margin: 100px 0;
h2{
    font-size: 3rem;
    color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
}
h3{
    font-size: 2rem;
    color: ${(props) => useContext(ThemeContext).theme.secundaryColor};
    margin-bottom: 50px;
}
`
const ContainerProjeto = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 100px;
`
const ContainerTitle = styled.div`
display:flex;
width: 45%;
flex-direction:column;
align-items: flex-start;
h4{  
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
    font-size:1.8rem;
    padding-bottom: 40px;
}
p{
    font-size: 1.5rem;
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
}
`
const ContainerInfo = styled.div`
width: 50%;
min-height: 100px;
display:flex;
flex-direction: column;
align-items: center;
h5{
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
    font-size: 1.5rem;
}
img{
    width: 50%;
}
div{
    background: url(${imgEloPlate}) no-repeat center;
    background-size: cover;
    text-align: center;
    width: 100px;
}
p{
    padding: 5px;
    color: #fff;
    font-size: 3rem;
}
`



