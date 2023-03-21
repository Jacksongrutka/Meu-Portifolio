import styled from "styled-components"

export const Formacao = () => {
    return (
        <Container>
            <h2>Formaçao</h2>
            <h3>O QUE APRENDI</h3>
            <ContainerCurso>
                <h4>2000--2008</h4>
                <p>Colegio julio cesar ribeiro de souza, segundo grau</p>
            </ContainerCurso>
        </Container>
    )
}
const Container = styled.div`
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