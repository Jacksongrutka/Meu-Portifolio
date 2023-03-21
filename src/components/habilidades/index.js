import styled from "styled-components"

export const Habilidades = () => {
    return (
        <Container id="habilidades">
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
        </Container>
    )
}
const Container = styled.div`
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