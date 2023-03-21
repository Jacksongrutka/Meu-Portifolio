import styled from "styled-components"

export const Interesses = () => {
    return (
        <Container id="interesses">
            <h2>Interesses</h2>
            <h3>FORA DO ESCRITÓRIO</h3>
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
        }
    `
