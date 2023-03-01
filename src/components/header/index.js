import { Button } from "../button"

export const Header = () => {
    return(
        <section>
           <div className="menu"></div> 
           <div className="container">
                <div className="container-titles">
                    <div className="container-texts">
                        <h2>OLÁ! EU SOU</h2>
                        <h1>Jackson Grutka</h1>
                        <h3>Desenvolvedor Front-End</h3>
                    </div>
                </div>
                <div className="container-contact">
                    <div className="container-image">

                    </div>
                    <h2>Jackson Grutka</h2>
                    <p>Cursando superior em <br/> análise e desenvolvimento de sistemas <br/> porto alegre, RS</p>
                    <a href="#">colocar um site aqui</a>
                    <p><i class="fa-brands fa-whatsapp"></i>(51)989215428</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/jacksongrutka/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/jackson-grutka-048633225/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Jacksongrutka"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <div className="container-button">
                        <Button/>
                    </div>
                </div>
           </div>
        </section>
    )
}