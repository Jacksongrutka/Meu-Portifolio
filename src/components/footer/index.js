import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "../button"

export const Footer = () => {
    return(
        <Container>
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
            </Container>
    )
}

const Container = styled.div`
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
const Icons = styled.div`
    .icon{
        width: 2rem;
        height: 2rem;
        padding: 0 10px;
    }
`