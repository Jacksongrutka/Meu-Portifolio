import styled from "styled-components"

export const Button = () => {
    return(
        <A href="https://drive.google.com/file/d/1KuHsm0j4I8K9I2IpHagbqgQ4FAAtBFrz/view?usp=sharing" target="blank">
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
    padding-bottom: 5px;
    }
    div:hover{
        background-color: #bbb;
    }
    div p{
        color: #5569dc;
        font-size: 1.5rem;
    }
`