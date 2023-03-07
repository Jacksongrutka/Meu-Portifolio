import { Button } from "../button"
import imgClaro from "../../imagens/FundoClaro.png"
import imgJackson from "../../imagens/FotoJackson.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components"


export const Home = () => {
    return (
        <>
            <Header>
                <Menu id="menu">
                    <a href="#sobre">Sobre</a>
                    <a href="#formacao">Formaçao e Experiência</a>
                    <a href="#habilidades">Habilidade e Idiomas</a>
                    <a href="#interesses">Interesses</a>
                </Menu>
                <HeaderContainer>
                    <Titles>
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
            </Header>
            <Sobre id="sobre">
                <div>
                    <h2>Sobre</h2>
                    <h3>MINHA HISTORIA</h3>
                    <p>Lorem ipsum dolor sit amet. Et facere accusamus et repellat cupiditate non internos omnis eos voluptas temporibus nam cumque unde aut laboriosam ducimus ut maiores quia. Nam pariatur velit aut dolore nisi ad alias harum. Sed voluptates esse ut nesciunt saepe ut molestiae aspernatur ea autem fugiat id molestiae voluptas.</p>
                </div>
            </Sobre>
            <Conteudo>
                <CentralizacaoConteudo>
                    <FormacaoProjetos id="formacao">
                        <Formacao>
                            <h2>Formaçao</h2>
                            <h3>O QUE APRENDI</h3>
                            <ContainerCurso>
                                <h4>2000--2008</h4>
                                <p>Colegio julio cesar ribeiro de souza, segundo grau</p>
                            </ContainerCurso>
                        </Formacao>
                        <Projetos>
                            <h2>Projetos</h2>
                            <h3>EXEMPLOS</h3>
                            <ContainerProjeto>
                                <a href="https://www.google.com.br/" target="_blank">Poke-List</a>
                                <p>uma listagem dos pokemons usando a poke API</p>
                                <div>
                                    <img></img>
                                </div>
                            </ContainerProjeto>
                        </Projetos>
                    </FormacaoProjetos>
                    <Habilidades id="habilidades">
                        <h2>Habilidade e Idiomas</h2>
                        <h3>O QUE OFEREÇO</h3>
                        <ContainerHabilidade>
                            <h4>HTML</h4>
                            <Base>
                                <div style={{ width: '80%' }} />
                            </Base>
                        </ContainerHabilidade>
                        <ContainerHabilidade>
                            <h4>CSS</h4>
                            <Base>
                                <div style={{ width: '90%' }} />
                            </Base>
                        </ContainerHabilidade>
                    </Habilidades>
                    <Interesses id="interesses">
                        <h2>Interesses</h2>
                        <h3>FORA DO ESCRITÓRIO</h3>
                    </Interesses>
                </CentralizacaoConteudo>
            </Conteudo>
            <Footer>
                <ContainerFooter>
                    <SocialMedia>
                        <h3>Adoraria ouvir de voçê</h3>
                        <div>
                            <Icons>
                                <a href="https://www.instagram.com/jacksongrutka/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                <a href="https://www.linkedin.com/in/jackson-grutka-048633225/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                                <a href="https://github.com/Jacksongrutka"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                            </Icons>
                        </div>
                    </SocialMedia>
                    <FooterContacts>
                        <div>
                            <p>jgrutka01@gmail.com</p>
                            <p className="number"><FontAwesomeIcon icon={faWhatsapp} className="icon" />(51)989215428</p>
                        </div>
                        <div>
                            <Button />
                        </div>
                    </FooterContacts>
                    <ContainerArrow>
                        <a href="#menu">
                        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-up" className="arrow" />
                        </a>
                    </ContainerArrow>
                </ContainerFooter>
            </Footer>
        </>
    )
}
const Header = styled.section`
    background-color: #5569dc;
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
    background:url(${imgClaro}) center;
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
const Sobre = styled.section`
    min-height: 50vh;
    display:flex;
    background-color:#e1e3fb;
    justify-content: center;
    align-items: center;
    div{
        width:50%;
        color: #5569dc;
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
        color:#666;
        line-height: 40px;
    }
    `
const Conteudo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    `
const CentralizacaoConteudo = styled.div`
    width: 50%;
    background-color:#fff;
    `
const FormacaoProjetos = styled.div`
    display:flex;
    margin: 100px 0;
    `
const Formacao = styled.div`
    width:50%;
    padding-right: 5%;
    h2{
        font-size: 3rem;
        color: #5569dc;
    }
    h3{
        font-size: 2rem;
        color: #5569dc;
        margin-bottom: 40px;
    }
    `
const ContainerCurso = styled.div`
    h4{
        font-size:1.5rem;
        padding-bottom: 10px;
        color: #666;
    }
    p{
        font-size:1.5rem;
        color: #666;
    }
    `
const Projetos = styled.div`
    width:50%;
    padding-left:5%;

    h2{
        font-size: 3rem;
        color: #5569dc;
    }
    h3{
        font-size: 2rem;
        color: #5569dc;
        margin-bottom: 40px;
    }
    `
const ContainerProjeto = styled.div`
    a{
        font-size:1.5rem;
        display:block;
        padding-bottom: 10px;
        color: #666;
    }
    p{
        font-size:1.5rem;
        padding-bottom: 25px;
        color: #666;
    }
    div{
        background-color: #000;
        width: 100%;
        height: 250px;
    }
    `
const Habilidades = styled.div`
    margin: 100px 0;
    h2{
        font-size: 3rem;
        color: #5569dc;
    }
    h3{
        font-size: 2rem;
        color: #5569dc;
        margin-bottom: 40px;
    }
    `
const ContainerHabilidade = styled.div`
    display:flex;
    margin-bottom:10px;
        h4{
            font-size:1.5rem;
            width:15%;
        }
    `
const Base = styled.div`
        width:85%;
        height: 15px;
        border-bottom: 1px solid #ccc;
        div{
            height:100%;
            border-bottom:2px solid #5569dc;
        }
    `
const Interesses = styled.div`
        margin: 100px 0;
        h2{
            font-size: 3rem;
            color: #5569dc;
        }
        h3{
            font-size: 2rem;
            color: #5569dc;
        }
    `
const Footer = styled.div`
    min-height: 50vh;
    display:flex;
    background-color:#e1e3fb;
    justify-content: center;
    align-items: center;
    `
const ContainerFooter = styled.div`
    display:flex;
    width: 50%;
    justify-content: space-between;
    height: 20vh;
    `
const SocialMedia = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        font-size:2rem;
    }
    `
const FooterContacts = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    div p{
        font-size: 1.5rem;
    }
    div .icon{
        width: 1.5rem;
        height: 1.5rem;
    }
    `

const ContainerArrow = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:end;
    a .arrow{
        width:3rem;
        height: 3rem;
    }
`