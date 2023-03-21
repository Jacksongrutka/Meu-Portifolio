import styled from "styled-components"
import { Header } from "../header"
import { About } from "../about"
import { Formacao } from "../formacao"
import { Projetos } from "../projetos"
import { Habilidades } from "../habilidades"
import { Footer } from "../footer"
import { Interesses } from "../interesses"



export const Home = () => {
    return (
        <>
            <Header/>
            <About/>
            <Conteudo>
                <CentralizacaoConteudo>
                    <FormacaoProjetos id="formacao">
                        <Formacao/>
                        <Projetos/>
                    </FormacaoProjetos>
                    <Habilidades/>
                    <Interesses/>
                </CentralizacaoConteudo>
            </Conteudo>
            <Footer/>
        </>
    )
}

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