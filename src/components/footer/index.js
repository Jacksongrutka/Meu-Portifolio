import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "../button"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import { breakpoint } from "../breakpoints"

export const Footer = () => {

    
    return (
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
                    <div className="containerButton">
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
    background-color:${(props) => useContext(ThemeContext).theme.secundaryBackgroundColor};
    justify-content: center;
    align-items: center;
    color:${(props) => useContext(ThemeContext).theme.primaryColor};
    `
    const ContainerFooter = styled.div`
    display:flex;
    width: 50%;
    justify-content: space-between;
    min-height: 20vh;
    ${breakpoint('down' , 'ms')`
            width: 80%;
            flex-direction: column;
            justify-content: center;
        `}
    ${breakpoint('down', 'sp')`   
        align-items:center;
    `}
    `
    const SocialMedia = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5%;
    ${breakpoint('down', 'sp')` 
         width:100%;
         align-items:center;
         padding-bottom: 10%
    `}
    h3{
        font-size:2rem;
        ${breakpoint('down','ms')`
            font-size: 1.5rem;
        `}
        ${breakpoint('down', 'sp')` 
        padding-bottom: 15px;
        font-size: 2rem;
        `}
    }
    `
    const FooterContacts = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    ${breakpoint('down', 'sp')` 
        width: 100%;
        align-items: center;   
        padding-bottom: 10%; 
    `}
    div{
        ${breakpoint('down', 'sp')` 
            display:flex;
            flex-direction:column;
            width:100%;
            align-items: center;
        `}  
    }
    div p{
        font-size: 1.5rem;
        ${breakpoint('down', 'sp')` 
            font-size: 2rem;
            padding-bottom: 10px;
        `}  
    }
    div .icon{
        width: 1.5rem;
        height: 1.5rem;
        color:${(props) => useContext(ThemeContext).theme.primaryColor};
        ${breakpoint('down', 'sp')` 
        width: 2rem;
        height: 2rem;
        `}  
    }
    .containerButton{
        ${breakpoint('down', 'sp')` 
            margin-top:10px;
        `}
    }
    .containerButton a div{
        ${breakpoint('down' , 'sp')`
            width: 150px;
        `}
    }
    .containerButton p{
        padding-bottom: 0;
    }
    `

    const ContainerArrow = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:end;
    a .arrow{
        width:3rem;
        height: 3rem;
        color:${(props) => useContext(ThemeContext).theme.primaryColor};
        ${breakpoint('down', 'sp')` 
            width: 4rem;
            height: 4rem;
        `}  
    }
`
    const Icons = styled.div`
    .icon{
        width: 2rem;
        height: 2rem;
        padding: 0 10px;
        color:${(props) => useContext(ThemeContext).theme.primaryColor};
        ${breakpoint('down', 'sp')` 
            width: 2.5rem;
            height: 2.5rem;
            padding: 0px 20px;
        `}
    }
`

