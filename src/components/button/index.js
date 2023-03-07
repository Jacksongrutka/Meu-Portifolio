import styled from "styled-components"

export const Button = () => {
    return(
        <A href="../../arquivos/Curriculo_profissional_de_Jackson.pdf" download>
            <div>
                <p>Baixar CV</p>
            </div>
        </A>
    )
}

const A = styled.a`
    div{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 150px;
    height: 40px;
    transition: 0.3s ease-in-out;
    }
    div:hover{
        background-color: #bbb;
    }
    div p{
        color: #5569dc;
        font-size: 1.5rem;
    }
`