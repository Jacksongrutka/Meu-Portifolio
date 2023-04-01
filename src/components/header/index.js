import imgJackson from "../../imagens/FotoJackson.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "../button"
import styled from "styled-components"
import { ThemeButtonContext } from "../themeButtonContext"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import { breakpoint } from "../breakpoints"
import { useState, useEffect } from "react"


export const Header = () => {

    const {theme} = useContext(ThemeContext)

    const [selecionado,setSelecionado] = useState({
        estaSelecionado: false,
        selecao:""
    })

    useEffect(() => {

    },[])

    const mudarMenu = () => {
        if(selecionado.estaSelecionado === false){
            setSelecionado({
                estaSelecionado:true,
                selecao:"selecionado"
            })
        }else if(selecionado.estaSelecionado === true){
            setSelecionado({
                estaSelecionado:false,
                selecao:""
            })
        }
    }
    const fecharMenu = () => {
        setSelecionado({
            estaSelecionado:false,
            selecao:"",
        })
    }

    return (
        <Container id="menu">
            <ThemePosition>
                <ThemeButtonContext />
            </ThemePosition>
            <MenuResponsivo>
                <h3>Jackson Grutka</h3>
            </MenuResponsivo>
            <MenuHamburguerPosition>
                <MenuHamburguer href="#" onClick={mudarMenu} >
                    <div className={selecionado.selecao}></div>
                </MenuHamburguer>
            </MenuHamburguerPosition>
            <MenuSelecionado>
                <Menu className={selecionado.selecao}>
                    <a href="#sobre"onClick={fecharMenu}>Sobre</a>
                    <a href="#formacao"onClick={fecharMenu}>Formaçao e Experiência</a>
                    <a href="#habilidades"onClick={fecharMenu}>Habilidade e Idiomas</a>
                    <a href="#interesses"onClick={fecharMenu}>Interesses</a>
                </Menu>
            </MenuSelecionado>
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
    position:relative;
`
const ThemePosition = styled.div`
    position:absolute;
    top:3%;
    left:4%;
`
const MenuResponsivo = styled.div`
    display:none;
    ${breakpoint('down' , 'sp')`
        display:flex;
        align-items:center;
        justify-content: center;
        min-height: 10vh;
    `}
    h3{
        color:#fff;
        padding-right: 15%;
        padding-top: 5%;
        font-size: 1.8rem;
    }
`
const MenuHamburguerPosition = styled.div`
    display:none;
    position:absolute;
    top: 3%;
    right: 4%;
    ${breakpoint('down','sp')`
        display:block;
    `}
`;
const MenuHamburguer = styled.a`
    display:flex;
    align-items: center;
    width: 40px;
    height: 40px;
    
    div{ 
        position:relative;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition:0.3s ease-in-out;
    }
    div::before{
        display:block;
        content:"";
        position:absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        bottom: -10px;
        transition:0.3s ease-in-out;
    }
    div::after{
        display:block;
        content:"";
        position:absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        top: -10px;
        transition:0.3s ease-in-out;
    }
    .selecionado{
        transform: rotate(45deg);
    }
    .selecionado::after{
        transform: rotate(90deg);
        top: 0;
    }
    .selecionado::before{
        transform: rotate(90deg);
        bottom: 0;
    }
`;
const MenuSelecionado = styled.div`
    .selecionado{
        display:flex;
    }
`
const Menu = styled.div`
    min-height: 70px;
    display: flex;
    justify-content: center;
    ${breakpoint('down', 'sp')`
        display:none;
        position:absolute;
        min-height:100vh;
        width: 100%;
        flex-direction:column;  
        background-color: ${(props) => useContext(ThemeContext).theme.primaryBackgroundColor};
        align-items: center;
    `}
    }
    a{
        color: #fff;
        padding: 10px;
        margin: 20px 10px;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        transition: 0.3s ease-in-out;
        ${breakpoint('down','ms')`
            padding: 5px;
            margin:20px 5px 10px 5px;
            font-size: 1.2rem;
        `}
        ${breakpoint('down' , 'sp') `
            font-size: 2rem;
            padding: 30px 0px;
        `}
    }
    a:hover{
        color: #bbb;
    }
`
const HeaderContainer = styled.div`
    display: flex;
    ${breakpoint('down', 'sp')`
        flex-direction:column;
    `}
`
const Titles = styled.div`
    background-size: cover;
    width: 75%;
    min-height: 700px;
    display: flex;
    align-items:center;
    justify-content:flex-start;
    ${breakpoint('down','ms')`
        width:70%;
    `}
    ${breakpoint('down', 'sp')`
        width:100%;  
        min-height: 300px;
    `}
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
        ${breakpoint('down','ms')`
            font-size:3rem;
        `}
        ${breakpoint('down', 'sp')`
            font-size: 2rem;
        `}
    }
    h1{
        font-family: 'Spectral', serif;
        font-size:7rem;
        font-weight: 700;
        ${breakpoint('down','ms')`
            font-size: 5rem;
        `}
        ${breakpoint('down', 'sp')`
            font-size: 3rem;
        `}
    }
    h2{
        font-size: 3rem;
        ${breakpoint('down','ms')`
            font-size: 2.5rem;
        `}
        ${breakpoint('down', 'sp')`
            font-size: 1.5rem;  
        `}
    }
`
const Contact = styled.div`
    display: flex;
    justify-content: center;
    width: 25%;
    padding: 0 2%;
    ${breakpoint('down','ms')`
        width: 30%;
    `}
    ${breakpoint('down', 'sp')`
        width: 100%;
    `}
`
const CentralizeContact = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #fff;
    p{
        font-size: 1.5rem;
        ${breakpoint('down','ms')`
            font-size: 1.2rem;
        `}
        ${breakpoint('down', 'sp')`
            padding-top: 5%;    

        `}
    }
    a{
        color: #fff;
    }
    h2{
        font-size: 2.5rem;
        font-family: 'Spectral', serif;
        ${breakpoint('down','ms')`
            font-size: 1.8rem;
        `}
        ${breakpoint('down', 'sp')`
            font-size: 2rem;  
            margin-top: 10%;      
        `}
    }
`
const Image = styled.div`
    max-width: 150px;
    ${breakpoint('down', 'sp')`
        max-width: 80px;       
        margin-top: 10%;   
    `}
    img {
        border-radius: 50%;
    }
`
const Number = styled.div`
    ${breakpoint('down', 'sp')`
        margin-top:10%;            
    `}
    .icon{
        width: 1.5rem;
        height: 1.5rem;
        ${breakpoint('down','ms')`
            width: 1.2rem;
            height: 1.2rem;
        `}
    }
`
const Icons = styled.div`
    ${breakpoint('down', 'sp')`
        margin-top: 10%;            
    `}
    .icon{
        width: 2rem;
        height: 2rem;
        padding: 0 10px;
    }
`
const ContainerButton = styled.div`
    margin-bottom: 100px;
    ${breakpoint('down','ms')`
        margin-bottom: 50px;
    `}
    ${breakpoint('down', 'sp')`
        margin-top: 10%;          
    `}
`

