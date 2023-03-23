import imgJackson from "../../imagens/FotoJackson.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "../button"
import styled from "styled-components"
import { ThemeButtonContext } from "../themeButtonContext"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"


export const Header = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <Container>
            <Menu id="menu">
                <a href="#sobre">Sobre</a>
                <a href="#formacao">Formaçao e Experiência</a>
                <a href="#habilidades">Habilidade e Idiomas</a>
                <a href="#interesses">Interesses</a>
                <ThemeButtonContext />

            </Menu>
            <HeaderContainer>
                <Titles style={{
                    backgroundImage: `url(${theme.headerImg})`,
                    backgroundPosition: "center center",
                }}>

                    <div>
                        <h3>OLÁ! EU SOU</h3>
                        <h1>Jackson Grutka</h1>
                        <h2>Desenvolvedor Front-End</h2>
                    </div>
                </Titles>
                <Contact>
                    <CentralizeContact >
                        <Image>
                            <img src={imgJackson}></img>
                        </Image>
                        <h2>Jackson Grutka</h2>
                        <p >Cursando superior em análise e desenvolvimento de sistemas <br /> porto alegre, RS</p>
                        <Number>
                            <p>jgrutka01@gmail.com</p>
                            <p className="number"><FontAwesomeIcon icon={faWhatsapp} className="icon" />(51)989215428</p>
                        </Number>
                        <Icons>
                            <a href="https://www.instagram.com/jacksongrutka/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                            <a href="https://www.linkedin.com/in/jackson-grutka-048633225/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                            <a href="https://github.com/Jacksongrutka"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                        </Icons>
                        <ContainerButton>
                            <Button />
                        </ContainerButton>
                    </CentralizeContact>
                </Contact>
            </HeaderContainer>
        </Container>
    )
}

const Container = styled.section`
    background-color: ${(props) => useContext(ThemeContext).theme.primaryBackgroundColor};
    min-height: 80vh;
`
const Menu = styled.div`
    min-height: 70px;
    display: flex;
    justify-content: center;
    a{
        color: #fff;
        padding: 10px;
        margin: 20px 10px;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        transition: 0.3s ease-in-out;
    }
    a:hover{
        color: #bbb;
    }
`
const HeaderContainer = styled.div`
    display: flex;
`
const Titles = styled.div`
    background-size: cover;
    width: 75%;
    min-height: 700px;
    display: flex;
    align-items:center;
    justify-content:flex-start;
    div{
        margin-left: 15%;
        color: #fff;
        text-shadow:
          1px -1px 0 #000,
          1px 1px 0 #000,
          1px 1px 0 #000,
          1px 1px 0 #000; 
    }
    h3{
        font-size: 4rem ;
        font-weight: 300;
    }
    h1{
        font-family: 'Spectral', serif;
        font-size:7rem;
        font-weight: 700;
    }
    h2{
        font-size: 3rem;
    }
`
const Contact = styled.div`
    display: flex;
    justify-content: center;
    width: 25%;
`
const CentralizeContact = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #fff;
    p{
        font-size: 1.5rem;
    }
    a{
        color: #fff;
        font-size: 1.5rem;
    }
    h2{
        font-size: 2.5rem;
        font-family: 'Spectral', serif;
    }
`
const Image = styled.div`
    max-width: 150px;
    img {
        border-radius: 50%;
    }
`
const Number = styled.div`
    .icon{
        width: 1.5rem;
        height: 1.5rem;
    }
`
const Icons = styled.div`
    .icon{
        width: 2rem;
        height: 2rem;
        padding: 0 10px;
    }
`
const ContainerButton = styled.div`
    margin-bottom: 100px;
`

